import type { SelectOption } from '@/types/selectInputOptions';

const InEnglish = ['', 'North', 'South'] as const;
const InSpanish = ['', 'Norte', 'Sur'] as const;

export const mappedModeOptions: SelectOption[] = InSpanish.map((mode, index) => ({
  label: mode,
  value: InEnglish[index],
}));
