import { mapOptions } from '@/helpers/selectMapping';
import type { SelectOption } from '@/types/selectInputOptions';

export const subtypes = {
  Carguero: 'Freighter',
  Combatiente: 'Fighter',
  Exploradora: 'Explorer',
  Transportista: 'Hauler',
  Transbordadora: 'Shuttle',
  Solar: 'Solar',
  Exótica: 'Exotic',
  Interceptora: 'Interceptor',
  LivingShip: 'Living Ship',
} as const;

export const mappedClassOptions: SelectOption[] = mapOptions(subtypes);
