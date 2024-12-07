import type { SelectOption } from '@/types/selectInputOptions';

const InEnglish = ['Lush', 'Barren', 'Dead', 'Exotic', 'Mega Exotic', 'Scorched', 'Frozen', 'Toxic', 'Irradiated', 'Marsh', 'Volcanic'] as const;
const InSpanish = ['Rico', 'Estéril', 'Muerto', 'Exótico', 'Mega Exótico', 'Quemado', 'Congelado', 'Tóxico', 'Irradiado', 'Cenagal', 'Volcánico'] as const;

export const mappedFloraBiome: SelectOption[] = InSpanish.map((mode, index) => ({
  label: mode,
  value: InEnglish[index],
}));

