import { mapOptions } from '@/helpers/selectMapping';
import type { SelectOption } from '@/types/selectInputOptions';

export const types = {
  Combatiente: 'Fighter',
  Exploradora: 'Explorer',
  Transportista: 'Hauler',
  Transbordadora: 'Shuttle',
  Solar: 'Solar',
  Exótica: 'Exotic',
  Interceptora: 'Interceptor',
  LivingShip: 'Living Ship',
  Carguero: 'Freighter',
} as const;

export const mappedClassOptions: SelectOption[] = mapOptions(types);
