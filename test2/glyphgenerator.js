// Version 1
// import { regions, galaxies } from "./regions.ts"

// // Función para generar un glifo aleatorio
// export function randomGlyph() {
//   const glyphs = '0123456789ABCDEF'; // Asume que estos son tus glifos
//   return glyphs[Math.floor(Math.random() * glyphs.length)];
// }

// // Función para generar glifos aleatorios
// export function generateGlyphs() {
//   let glyphs = '0'; // Comienza siempre con 0

//   // Genera los glifos del 2 al 4
//   for (let i = 0; i < 3; i++) {
//     glyphs += randomGlyph();
//   }

//   // Selecciona un glifo aleatorio de las regiones proporcionadas
//   const regionKeys = Object.keys(regions);
//   const randomRegion = regionKeys[Math.floor(Math.random() * regionKeys.length)];
//   glyphs += randomRegion;

//   return glyphs;
// }

// export function displayRandomGlyphs() {
//   const glyphOutput = document.getElementById('glyphOutput');
//   const regionOutput = document.getElementById('regionOutput');
//   const galaxyOutput = document.getElementById('galaxyOutput');
//   const glyphs = generateGlyphs();
//   const region = regions[glyphs.slice(4, 12)];
//   const galaxy = galaxies[glyphs.slice(4, 12)];
//   glyphOutput.textContent = glyphs;
//   regionOutput.textContent = 'Región: ' + region;
//   galaxyOutput.textContent = 'Galaxia: ' + galaxy;
// }
// window.displayRandomGlyphs = displayRandomGlyphs;



// Version 2
// import { regions, galaxies } from "./regions.ts"

// // Función para generar un glifo aleatorio
// export const randomGlyph = () => '0123456789ABCDEF'[Math.floor(Math.random() * 16)];

// // Función para generar glifos aleatorios
// export const generateGlyphs = () => {
//   const glyphs = '0' + Array.from({length: 3}, randomGlyph).join('');
//   const randomRegion = Object.keys(regions)[Math.floor(Math.random() * Object.keys(regions).length)];
//   return glyphs + randomRegion;
// }

// export const displayRandomGlyphs = () => {
//   const glyphs = generateGlyphs();
//   const region = regions[glyphs.slice(4, 12)];
//   const galaxy = galaxies[glyphs.slice(4, 12)];
//   document.getElementById('glyphOutput').textContent = glyphs;
//   document.getElementById('regionOutput').textContent = 'Región: ' + region;
//   document.getElementById('galaxyOutput').textContent = 'Galaxia: ' + galaxy;
// }
// window.displayRandomGlyphs = displayRandomGlyphs;



// Final Version
// Import regions and galaxies from the regions module
import { regions, galaxies } from "./regions.ts"

// Function to generate a random glyph
export const randomGlyph = () => '0123456789ABCDEF'[Math.floor(Math.random() * 16)];

// Function to generate random glyphs
export const generateGlyphs = () => {
  // Generate a string of three random glyphs, prefixed with '0'
  const glyphs = '0' + Array.from({length: 3}, randomGlyph).join('');
  // Select a random region from the regions object
  const randomRegion = Object.keys(regions)[Math.floor(Math.random() * Object.keys(regions).length)];
  // Return the glyphs concatenated with the random region
  return glyphs + randomRegion;
}

export const displayRandomGlyphs = () => {
  // Get the output elements from the DOM
  const glyphOutput = document.getElementById('glyphOutput');
  const regionOutput = document.getElementById('regionOutput');
  const galaxyOutput = document.getElementById('galaxyOutput');
  
  // Generate the glyphs
  const glyphs = generateGlyphs();
  // Get the region and galaxy corresponding to the glyphs
  const region = regions[glyphs.slice(4, 12)];
  const galaxy = galaxies[glyphs.slice(4, 12)];
  
  // Display the glyphs, region, and galaxy in the output elements
  glyphOutput.textContent = glyphs;
  regionOutput.textContent = 'Región: ' + region;
  galaxyOutput.textContent = 'Galaxia: ' + galaxy;
}
// Make the displayRandomGlyphs function globally accessible
window.displayRandomGlyphs = displayRandomGlyphs;