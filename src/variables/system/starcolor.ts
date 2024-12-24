import type { SelectOption } from '@/types/selectInputOptions';

const InEnglish = ['Yellow', 'Red', 'Green', 'Blue', 'Black Hole'] as const;
const InSpanish = ['Amarillo', 'Rojo', 'Verde', 'Azul', 'Agujero Negro'] as const;

export const mappedSystemStarcolor: SelectOption[] = InSpanish.map((mode, index) => ({
  label: mode,
  value: InEnglish[index],
}));

