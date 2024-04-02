export interface Regions {
    [key: string]: string;
}
export interface Galaxies {
    [key: string]: string;
}

/**
 * An object representing discovery regions and their associated names.
 */
export const regions: Regions = {
    'F7EC0D24': 'Bajíos de Uekenbe',
    '032FE9B0': 'Uklots Shallows',
    'FEA34C10': 'Eighba Fringe',
    'F7EC0D25': 'Xecroften',
    'F8EBDD24': 'Areyas',
    '0EEC7D10': 'Sea of Ticrops',
    'FBF21696': 'Uhcheimri Void',
    'F7EC1D24': 'Becheeth Sector',
    'F9F846D8': 'Emcalh Nebula',
    'F6EC0D23': 'Juhalbe Cluster',
    '0AAEBB96': 'Larinar Boundary',
    '0266CF95': 'Skitco',
    'F7EBFD24': 'Udrupi Shallows',
    'F7EBFD25': 'Jiessl Shallows',
};

// Make 'regions' read-only
Object.freeze(regions);

/**
 * An object representing discovery regions and their galaxy names.
 */
export const galaxies: Galaxies = {
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
    '0266CF95': 'Hilbert Dimension',
    'F7EBFD24': 'Euclides',
    'F7EBFD25': 'Euclides',
};
// Make 'galaxies' read-only
Object.freeze(galaxies);
