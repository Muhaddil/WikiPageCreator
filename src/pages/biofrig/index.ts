import { assignElementFunctions } from "../../commonElements/elementBackend/elementFunctions";
import { albumFunctions } from "../../modules/albumactions";
import { globalFunctions } from "../../variables/objects";
import { addInfo, albumItemTypeExternal, albumOtherExternal, generateCatalogue, locRegNr } from './biofrig';
import frigateElementFunctions from "./elementFunctions";
import { addStaticPageData } from "../../common";
import '../../startup';

globalFunctions.albumOtherExternal = () => albumOtherExternal();
globalFunctions.albumItemTypeExternal = () => albumItemTypeExternal();

addStaticPageData('galleryExplanationExternal', `
Hay un orden preferido de imágenes de la galería:
	<div class='dialog-center'>
		<ol class='dialog-list'>
			<li>Vista trasera de la fragata</li>
			<li>Pantalla de interacción</li>
			<li>Página del sistema</li>
		</ol>
 	</div>`)

// Mapeo de nombres en inglés a español
const biofrigMap = {
	'Rear view of frigate': 'Vista trasera de la fragata',
	'Interaction screen': 'Pantalla de interacción',
	'System Page': 'Página del Sistema'
};

addStaticPageData('galleryArray', [
	'',
	biofrigMap['Rear view of frigate'],
	biofrigMap['Interaction screen'],
	biofrigMap['System Page']
]);


assignElementFunctions(frigateElementFunctions);

// startupFunctions
locRegNr();
generateCatalogue();
addInfo();
albumFunctions();