import { addStaticPageData } from "../../common";
import '../../startup/planetMoon';

addStaticPageData('galleryExplanationExternal', `
Hay un orden preferido de imágenes:
	<div class='dialog-center'>
		<ol class='dialog-list'>
			<li>Paisaje</li>
			<li>Vista nocturna</li>
			<li>Sistema de cuevas</li>
			<li>Visor de analisis</li>
			<li>Guía de exploración de la luna</li>
			<li>Página de la luna</li>
			<li>Página del planeta</li>
			<li>Página del sistema</li>
			<li>Mapa galáctico</li>
		</ol>
	</div>`)


// Tus nombres en español e inglés
const spanishCaptions = ['', 'Paisaje', 'Vista Nocturna', 'Sistema de Cuevas', 'Visor de Análisis', 'Guía de Exploración Lunar', 'Página de la Luna', 'Página del Planeta', 'Página del Sistema', 'Mapa galáctico'];
const englishCaptions = ['', 'Landscape', 'Night View', 'Cave System', 'Analysis Visor', 'Moon Exploration Guide', 'Moon Page', 'Planet Page', 'System Page', 'Galaxy Map'];

// Crear un objeto de mapeo entre los nombres en español e inglés
export const moonmap: { [key: string]: string } = spanishCaptions.reduce((obj: { [key: string]: string }, caption, index) => {
  obj[caption] = englishCaptions[index];
  return obj;
}, {});

addStaticPageData('galleryArray', spanishCaptions);

