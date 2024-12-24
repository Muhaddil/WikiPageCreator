import type { SelectOption } from '@/types/selectInputOptions';

const InEnglish = ['Always Active', 'Diurnal', 'Nocturnal', 'Mostly Diurnal', 'Mostly Nocturnal'] as const;
const InSpanish = ['Siempre activa', 'Diurna', 'Nocturna', 'Generalmente Diurna', 'Generalmente Nocturna'] as const;

export const mappedModeOptions: SelectOption[] = InSpanish.map((mode, index) => ({
  label: mode,
  value: InEnglish[index],
}));
