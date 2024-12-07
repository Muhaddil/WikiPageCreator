import { getRouteComponent } from '@/helpers/router';
import { getCurrentRoute } from '@/helpers/router';

// build a custom "fake router" instead of using client-side routing to avoid 404 pages on direct navigation
export const router: Record<string, string> = {
  flora: 'Flora',
  mineral: 'Mineral',
  home: 'Home',
  base: 'Base',
  basenocensus: 'NormalBase',
  fauna: 'Fauna',
  racetrack: 'Racetrack',
  system: 'System',
  settlement: 'Settlement',
  sandworm: 'Sandworm',
  starship: 'Starship',
  multitool: 'Multitool',
};

export const route = getCurrentRoute();
export const componentName = getRouteComponent();

let exportName;

switch (route) {
  case 'base':
    exportName = 'Bases';
    break;
  case 'flora':
    exportName = 'Flora';
    break;
  case 'mineral':
    exportName = 'Minerales';
    break;
  case 'fauna':
    exportName = 'Fauna';
    break;
  case 'basenocensus':
    exportName = 'Bases Normales';
    break;
  case 'racetrack':
    exportName = 'Circuitos';
    break;
  case 'system':
    exportName = 'Sistemas';
    break;
  case 'settlement':
    exportName = 'Asentamientos';
    break;
  case 'sandworm':
    exportName = 'Gusano de arena';
    break;
  case 'starship':
    exportName = 'Naves';
    break;
  case 'multitool':
    exportName = 'Multiherramientas';
    break;
  case '':
    exportName = 'Home';
    break;
  default:
    exportName = 'Desconocido';
    break;
}

export const pageformattedName = exportName;
