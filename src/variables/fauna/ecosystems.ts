import type { SelectOption } from '@/types/selectInputOptions';

const InEnglish = ['Ground', 'Flying', 'Underwater', 'Underground'] as const;
const InSpanish = ['Terrestre', 'Voladora', 'Submarina', 'Subterránea'] as const;

export const mappedModeOptions: SelectOption[] = InSpanish.map((mode, index) => ({
  label: mode,
  value: InEnglish[index],
}));
