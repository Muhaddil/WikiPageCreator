import { regions, galaxies } from "../src/variables/regions"

// Función para generar un glifo aleatorio
export function randomGlyph() {
  const glyphs = '0123456789ABCDEF'; // Asume que estos son tus glifos
  return glyphs[Math.floor(Math.random() * glyphs.length)];
}

// Función para generar glifos aleatorios
export function generateGlyphs() {
  let glyphs = '0'; // Comienza siempre con 0

  // Genera los glifos del 2 al 4
  for (let i = 0; i < 3; i++) {
    glyphs += randomGlyph();
  }

  // Selecciona un glifo aleatorio de las regiones proporcionadas
  const regionKeys = Object.keys(regions);
  const randomRegion = regionKeys[Math.floor(Math.random() * regionKeys.length)];
  glyphs += randomRegion;

  return glyphs;
}

export function displayRandomGlyphs() {
  const glyphOutput = document.getElementById('glyphOutput');
  const regionOutput = document.getElementById('regionOutput');
  const galaxyOutput = document.getElementById('galaxyOutput');
  const glyphs = generateGlyphs();
  const region = regions[glyphs.slice(4, 12)];
  const galaxy = galaxies[glyphs.slice(4, 12)];
  glyphOutput.textContent = glyphs;
  regionOutput.textContent = 'Región: ' + region;
  galaxyOutput.textContent = 'Galaxia: ' + galaxy;
}
window.displayRandomGlyphs = displayRandomGlyphs;


