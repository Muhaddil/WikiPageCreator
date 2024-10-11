import { mapOptions } from '@/helpers/selectMapping';
import type { SelectOption } from '@/types/selectInputOptions';

export const platforms = {
  S: 'S',
  A: 'A',
  B: 'B',
  C: 'C',
  X: 'X',
} as const;

export const mappedClassOptions: SelectOption[] = mapOptions(platforms);
