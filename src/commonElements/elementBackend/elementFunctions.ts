import { getCurrentHTMLFile } from '../../common';
import { ElementFunction, ElementFunctions, GlobalElements } from '../../types/elements';
import { globalElements, pageData, transformedElementFunctions } from '../../variables/objects';
import { getDestElements } from './elementStore';
import { hashElement } from './hashes';

export function assignFunction(dataObject: ElementFunction): void {
	const simplePages = ['about', ''];	// excludes the index and about pages from the advanced behaviour
	if (!pageData.eventListeners && !simplePages.includes(getCurrentHTMLFile())) {
		transformListenerData(dataObject);
		return;
	}
	const { handler, func } = dataObject;
	const elementId = dataObject.element as keyof GlobalElements;
	const element = getListenerElement(elementId);
	const elementArray = [element];
	const flattenedArray = elementArray.flat();
	for (const element of flattenedArray) {
		const listener: keyof HTMLElementEventMap = getEventHandler(handler, element);
		element?.addEventListener(listener, func);
	}
}

export function assignElementFunctions(elementFunctions: ElementFunctions) {
	for (const functionObject of elementFunctions) {
		assignFunction(functionObject);
	}
}

function getListenerElement(elementId: string | HTMLElement) {
	if (typeof elementId != 'string') return elementId;

	if (globalElements.input[elementId]) {
		return globalElements.input[elementId];
	}

	return getDestElements(elementId);
}

function getEventHandler(handler: keyof HTMLElementEventMap | undefined, element: HTMLElement) {
	const inputTag = element?.tagName?.toLowerCase();
	const inputType: string = inputTag == 'input' ? (element as HTMLInputElement).type : '';

	return handler ?? (() => {
		if (inputTag == 'select' || inputType == 'radio' || inputType == 'checkbox') {
			return 'change';
		} else {
			return 'input';
		}
	})();
}

export function transformListenerData(dataObj: ElementFunction | ElementFunctions) {
	const sourceArray = [dataObj].flat();

	for (const obj of sourceArray) {
		const htmlElement = getListenerElement(obj.element) as HTMLElement;
		if (Array.isArray(htmlElement) && !htmlElement.length) continue;
		const hashedValue = hashElement(htmlElement);
		const handler = getEventHandler(obj.handler, htmlElement);
		transformedElementFunctions[hashedValue] ??= {};

		if (!transformedElementFunctions[hashedValue][handler]) {
			transformedElementFunctions[hashedValue][handler] = {
				element: htmlElement,
				func: []
			}
		}
		transformedElementFunctions[hashedValue][handler].func[obj.prio ? 'unshift' : 'push'](obj.func);
	}
}

export function addEventListeners() {
	for (const [, handlerObj] of Object.entries(transformedElementFunctions)) {
		for (const [handler, obj] of Object.entries(handlerObj)) {
			for (const func of obj.func) {
				const elementArray = [obj.element];
				const flattenedArray = elementArray.flat();
				for (const element of flattenedArray) {
					element?.addEventListener(handler, func);
					delete element.dataset.hash;
				}
			}
		}
	}
}