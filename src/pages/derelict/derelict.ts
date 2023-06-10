/**
 * @fileoverview Provides functions which can be used by the Derelict Freighter page creator.
 */

import { wikiCode } from "../../common";
import { glyphs2Coords } from "../../modules/portalglyphs";
import { StdObj } from "../../types/objects";
import { dataIntegrityObj, globalElements, pageData } from "../../variables/objects";

export const galaxyTableEntry = `| [[File: <output name="image"></output>|150px]] || [[<output name="name"></output>]] || <output name="rooms"></output> || <output name="enemies"></output> || {{gl/Small|0000<output name="portalglyphs"></output>}} || <output name="discoverer"></output><br>
|-`;

export function updateGalaxyTableEntry() {
	const tables = ['euclid', 'calypso', 'eissentam'];
	const galaxy = (pageData.galaxy as string).toLowerCase();
	const unusedGalaxies = tables.filter(table => table != galaxy);
	const galaxyTable = globalElements.output[galaxy] as HTMLDivElement;

	galaxyTable.style.display = '';

	for (const table of unusedGalaxies) {
		(globalElements.output[table] as HTMLDivElement).style.display = 'none';
	}
}

export function enemyCheckboxes() {
	const checkboxes = document.getElementsByName('enemiesInput') as NodeListOf<HTMLInputElement>;
	const enemies: Array<string> = [];
	for (const checkbox of Array.from(checkboxes)) {
		if (checkbox.checked) enemies.push(checkbox.value);
	}
	wikiCode(enemies.join(', '), 'enemies');
}

export function setGalaxy(civShort: string) {
	const galaxies: StdObj = {
		GHub: 'Euclid',
		CalHub: 'Calypso',
		EisHub: 'Eissentam',
	}

	const hubs: StdObj = {
		GHub: 'Galactic Hub Project',
		CalHub: 'Galactic Hub Calypso',
		EisHub: 'Galactic Hub Eissentam',
	}
	pageData.civShort = civShort;
	pageData.civilized = hubs[civShort];
	pageData.galaxy = galaxies[civShort];
}

export function albumLinkGen() {
	const type = dataIntegrityObj.link;
	const galaxy = pageData.galaxy as string;
	if (type == 'album') return `${pageData.name}#${galaxy}`;
	return 'GHSH Derelict Freighter Catalog';
}

export function processGlyphs(element: HTMLInputElement) {
	const glyphs = element.value;
	const regionGlyphs = glyphs.substring(4);	// NoSonar this is the beginning of the region in the glyph sequence
	const dest = element.dataset.destNoauto as string;

	const regioncoords = glyphs2Coords(glyphs).slice(0, -5);	// NoSonar this is the system index in the coord string

	wikiCode(regionGlyphs, dest);
	wikiCode(regioncoords, 'coordinates');
}
