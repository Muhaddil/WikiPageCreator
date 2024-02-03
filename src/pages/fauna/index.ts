import { addInfoBullet, addStaticPageData, datalists, datalists2, datalists3, datalists4, hideOrgName } from "../../common";
import { assignElementFunctions } from "../../commonElements/elementBackend/elementFunctions";
import { updateGlobalElements } from "../../commonElements/elementBackend/elementStore";
import creatureDatalists from "../../datalists/creatureDatalists";
import creatureNotesDatalist from "../../datalists/creatureDatalists2";
import creatureBehavioursDatalist from "../../datalists/creatureDatalists3";
import creatureDietDatalist from "../../datalists/creatureDietDatalists";
import { toggleRedirect } from "../../modules/actions";
import { albumFunctions } from "../../modules/albumactions";
import creatureElementFunctions from "./elementFunctions";
import creatureElements from "./elementStore";
import { albumOtherExternal, addInfo, albumDropdown, bundlePropFunctions, genusDropdown, genusProduces, hideAlbumEntry, hideCreaturePrio, hideSecGenderProps, noLineBreak, pageName, specialNotes, specialNotesTextFunc, generateGalleryArray, resetExternal } from "./fauna";
import { genderDropdown } from '@/pages/fauna/fauna2';
import { globalFunctions } from "../../variables/objects";
import { planetMoonSentence } from "../../miscLogic/locationLogic";
import { setTemperamentSentenceDatalist, setBiomeSentenceDatalist, setDietSentenceDatalist } from "./discoveryMenuDatalists";
import '../../startup';

globalFunctions.albumOtherExternal = () => albumOtherExternal();
globalFunctions.generateGalleryArray = () => generateGalleryArray();
globalFunctions.resetExternal = () => resetExternal();

addStaticPageData('galleryExplanationExternal', `
Hay un orden preferido de imágenes:
<div class='dialog-center'>
	<ol class='dialog-list'>
    <li>Escaneo de la criatura</li>
		<li>Menu de descubrimiento</li>
		<li>Página del planeta</li>
		<li>Página del sistema</li>
		<li>Mapa galáctico</li>
	</ol>
</div>`)

datalists(creatureDatalists);
datalists2(creatureNotesDatalist);
datalists3(creatureBehavioursDatalist);
datalists4(creatureDietDatalist);

updateGlobalElements(creatureElements);
assignElementFunctions(creatureElementFunctions);

planetMoonSentence(undefined, undefined, true);
genusDropdown();
genderDropdown();
albumDropdown();
hideOrgName();
pageName();
specialNotes();
specialNotesTextFunc();
genusProduces();
addInfo();
addInfoBullet();
hideSecGenderProps();
hideCreaturePrio();
bundlePropFunctions();
hideAlbumEntry();
noLineBreak();
albumFunctions();
toggleRedirect();
setBiomeSentenceDatalist();
setTemperamentSentenceDatalist();
setDietSentenceDatalist();