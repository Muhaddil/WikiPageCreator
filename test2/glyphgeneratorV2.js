import { regions, galaxies } from "../src/variables/regions"

// Llena el menú desplegable con las regiones
function fillRegionSelect() {
  const regionSelect = document.getElementById('regionSelect');
  for (let region in regions) {
      let option = document.createElement('option');
      option.value = region;
      option.text = regions[region];
      regionSelect.appendChild(option);
  }
}

// Llama a fillRegionSelect después de que el documento esté cargado
window.onload = fillRegionSelect;

// Función para generar un glifo aleatorio
function randomGlyph() {
  const glyphs = '0123456789ABCDEF'; // Asume que estos son tus glifos
  return glyphs[Math.floor(Math.random() * glyphs.length)];
}

// Función para generar glifos aleatorios
function generateGlyphs(selectedRegion) {
  let glyphs = '0'; // Comienza siempre con 0

  // Genera los glifos del 2 al 4
  for (let i = 0; i < 3; i++) {
      glyphs += randomGlyph();
  }

  // Usa la región seleccionada
  glyphs += selectedRegion;

  return glyphs;
}

function displayRandomGlyphs() {
  const glyphOutput = document.getElementById('glyphOutput');
  const regionOutput = document.getElementById('regionOutput');
  const galaxyOutput = document.getElementById('galaxyOutput');
  const selectedRegion = document.getElementById('regionSelect').value;
  const glyphs = generateGlyphs(selectedRegion);
  const region = regions[glyphs.slice(4, 12)];
  const galaxy = galaxies[glyphs.slice(4, 12)];
  glyphOutput.textContent = glyphs;
  regionOutput.textContent = 'Región: ' + region;
  galaxyOutput.textContent = 'Galaxia: ' + galaxy;
}
