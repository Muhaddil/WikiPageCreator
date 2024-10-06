import type { SelectOption } from '@/types/selectInputOptions';

const InEnglishWealthCategories = ['High', 'Medium', 'Low', 'Outlaw'] as const;
const InSpanishWealthCategories = ['Alta', 'Media', 'Baja', 'Fuera de la ley'] as const;

const wealthInEnglish = {
  High: ['Advanced', 'Affluent', 'Booming', 'Flourishing', 'High Supply', 'Opulent', 'Prosperous', 'Wealthy'],
  Medium: [
    'Adequate',
    'Balanced',
    'Comfortable',
    'Developing',
    'Medium Supply',
    'Promising',
    'Satisfactory',
    'Sustainable',
  ],
  Low: ['Declining', 'Destitute', 'Failing', 'Fledgling', 'Low Supply', 'Struggling', 'Unsuccessful', 'Unpromising'],
  Outlaw: ['Black Market'],
} as const;

const wealthInSpanish = {
  Alta: ['Avanzado', 'Acaudalado', 'Próspero', 'Floreciente', 'Alta Suministro', 'Opulento', 'Rico', 'Adinerado'],
  Media: [
    'Adecuado',
    'Equilibrado',
    'Cómodo',
    'Desarrollándose',
    'Suministro Medio',
    'Prometedor',
    'Satisfactorio',
    'Sostenible',
  ],
  Baja: ['Declinante', 'Indigente', 'Fracasado', 'Principiante', 'Bajo Suministro', 'Luchador', 'Desafortunado', 'Desalentador'],
  'Fuera de la ley': ['Mercado Negro'],
} as const;

export const mappedWealthOptions: SelectOption[] = InSpanishWealthCategories.flatMap((category, index) => {
  const englishCategory = InEnglishWealthCategories[index];
  const spanishOptions = wealthInSpanish[category];
  const englishOptions = wealthInEnglish[englishCategory];

  return spanishOptions.map((option, optIndex) => ({
    label: option,
    value: englishOptions[optIndex], // El valor sigue siendo el término en inglés
  }));
});
