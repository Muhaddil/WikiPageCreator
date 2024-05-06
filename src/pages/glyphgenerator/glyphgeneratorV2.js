 const regions = {
  'F7EC0D24': 'Bajíos de Uekenbe',
	'032FE9B0': 'Bajíos de Uklots',
	'FEA34C10': 'Frontera de Eighba',
	'F7EC0D25': 'Xecroften',
	'F8EBDD24': 'Areyas',
	'0EEC7D10': 'Mar de Ticrops',
  'FBF21696': 'Vacío de Uhcheimri',
	'F7EC1D24': 'Sector Becheeth',
	'F9F846D8': 'Nebulosa de Emcalh',
	'F6EC0D23': 'Cúmulo de Juhalbe',
  '0AAEBB96': 'Límite de Larinar',
  '0266CF95': 'Skitco',
  'F7EBFD24': 'Bajíos de Udrupi',
  'F7EBFD25': 'Bajíos de Jiessl',
};

// Make 'regions' read-only
Object.freeze(regions);

/**
 * An object representing discovery regions and their galaxy names.
 */
 const galaxies = {
  'F7EC0D24': 'Euclides',
  '032FE9B0': 'Euclides',
  'FEA34C10': 'Euclides',
  'F7EC0D25': 'Euclides',
  'F8EBDD24': 'Euclides',
  '0EEC7D10': 'Euclides',
  'FBF21696': 'Eissentam',
  'F7EC1D24': 'Euclides',
  'F9F846D8': 'Euclides',
  'F6EC0D23': 'Euclides',
  '0AAEBB96': 'Euclides',
  '0266CF95': 'Dimensión de Hilbert',
  'F7EBFD24': 'Euclides',
  'F7EBFD25': 'Euclides',
};

// Llena el menú desplegable con las regiones
export function fillRegionSelect() {
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
export function randomGlyph() {
  const glyphs = '0123456789ABCDEF'; // Asume que estos son tus glifos
  return glyphs[Math.floor(Math.random() * glyphs.length)];
}

// Función para generar glifos aleatorios
export function generateGlyphs(selectedRegion) {
  let glyphs = '0'; // Comienza siempre con 0

  // Genera los glifos del 2 al 4
  for (let i = 0; i < 3; i++) {
      glyphs += randomGlyph();
  }

  // Usa la región seleccionada
  glyphs += selectedRegion;

  return glyphs;
}

export function displayRandomGlyphs() {
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
window.displayRandomGlyphs = displayRandomGlyphs;
