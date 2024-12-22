<script setup lang="ts">
import GlyphInput from '@/components/inputs/GlyphInput.vue';
import SanitisedTextInput from '@/components/inputs/SanitisedTextInput.vue';
import SingleFileUpload from '@/components/inputs/SingleFileUpload.vue';
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { computed, ref, watch } from 'vue';
import BiofrigAppearance from '@/components/inputs/biofrig/BiofrigAppearance.vue';
import ClassSelect from '@/components/inputs/ClassSelect.vue';
import GalleryInput from '@/components/inputs/gallery/GalleryInput.vue';
import FileUploadNotice from '@/components/FileUploadNotice.vue';
import type { SelectOption } from '@/types/selectInputOptions';

const pageData = usePageDataStore();
const {
  name,
  discovered,
  discoveredlink,
  image,
  glyphs,
  royalclass,
  system,
  appearance,
  docBy,
  type,
  cost,
  researchteam2,
  statsClass,
  combat,
  exploration,
  industrial,
  fuel,
  trade,
} = storeToRefs(pageData);


const statsClassData: {
  [key: string]: SelectOption[];
} = {
  Fighter: [{ value: 'FighterShipStats', label: 'Fighter Stats' }],
  Explorer: [{ value: 'ExplorerShipStats', label: 'Explorer Stats' }],
  Hauler: [{ value: 'HaulerShipStats', label: 'Hauler Stats' }],
  Shuttle: [{ value: 'ShuttleShipStats', label: 'Shuttle Stats' }],
  Solar: [{ value: 'SolarShipStats', label: 'Solar Stats' }],
  Exotic: [{ value: 'ExoticShipStats', label: 'Exotic Stats' }],
  Interceptor: [{ value: 'InterceptorShipStats', label: 'Interceptor Stats' }],
  'Living Ship': [{ value: 'LivingShipStats', label: 'Living Ship Stats' }],
  Freighter: [{ value: 'FreighterShipStats', label: 'Freighter Stats' }],
};

const statsClassOptions = ref<SelectOption[]>([]);

const updateSubtypeOptions = (selectedType: string) => {
  statsClassOptions.value = statsClassData[selectedType] || [];
};

watch(type, (newType) => {
  updateSubtypeOptions(newType);

  const newStatsClass = statsClassData[newType]?.[0]?.value || '';
  statsClass.value = newStatsClass;
});

updateSubtypeOptions(type.value);
statsClass.value = statsClassData[type.value]?.[0]?.value || '';

const originalCost = ref('');

const formatNumberWithCommas = (value: string) => {
  const cleanedValue = value.replace(/[^0-9.]/g, '');

  if (!cleanedValue) return '';

  const [integerPart, decimalPart] = cleanedValue.split('.');

  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
};

const isCostValid = computed(() => /^\d*$/.test(originalCost.value));

watch(originalCost, (newValue) => {
  cost.value = formatNumberWithCommas(newValue);
});

const isCombatValid = computed(() => /^\d*$/.test(combat.value));
const isExplorationValid = computed(() => /^\d*$/.test(exploration.value));
const isInsdustrialValid = computed(() => /^\d*$/.test(industrial.value));
const isTradeValid = computed(() => /^\d*$/.test(trade.value));
const isFuelValid = computed(() => /^\d*$/.test(fuel.value));

</script>

<template>
  <SanitisedTextInput
    v-model="name"
    help-img="settlement/settlementName"
    help-title="Nombre del Asentamiento"
    label="Nombre"
    tooltip="Escribe exactamente como se ve en el juego. Cuidado con 0 (cero) y O (o)."
  >
    Escribe exactamente como se ve en el juego. Cuidado con 0 (cero) y O (o).
  </SanitisedTextInput>
  <SingleFileUpload
    v-model="image"
    label="Imagen principal"
    help-title="Subida de Archivo"
    tooltip="La imagen no se subirá a la wiki. Esto es solo para completar automáticamente el nombre de la imagen."
  >
    <FileUploadNotice />
  </SingleFileUpload>
  <SanitisedTextInput
    v-model="system"
    label="Nombre del Sistema"
  />

  <GlyphInput v-model="glyphs" />
  <ClassSelect v-model="royalclass" />

  <SanitisedTextInput v-model="originalCost" label="Coste:" :invalid="!isCostValid" error-message="Solo debe contener números" ></SanitisedTextInput>

  <SanitisedTextInput v-model="combat" label="Combate:" :invalid="!isCombatValid" error-message="Solo debe contener números" maxlength="2"></SanitisedTextInput>
  <SanitisedTextInput v-model="exploration" label="Exploración:" :invalid="!isExplorationValid" error-message="Solo debe contener números" maxlength="2"></SanitisedTextInput>
  <SanitisedTextInput v-model="industrial" label="Industrial:" :invalid="!isInsdustrialValid" error-message="Solo debe contener números" maxlength="2"></SanitisedTextInput>
  <SanitisedTextInput v-model="trade" label="Comercio:" :invalid="!isTradeValid" error-message="Solo debe contener números" maxlength="2"></SanitisedTextInput>
  <SanitisedTextInput v-model="fuel" label="Combustible:" :invalid="!isFuelValid" error-message="Solo debe contener números" maxlength="2"></SanitisedTextInput>

  <SanitisedTextInput
    v-model="discoveredlink"
    label="Nombre en la wiki del descubridor:"
  />
  <SanitisedTextInput
    v-model="discovered"
    label="Alias del descubridor si no tiene wiki:"
  />
  <SanitisedTextInput
    v-model="docBy"
    label="Alias del documentador si no es el descubridor:"
  />

  <SanitisedTextInput
    v-model="researchteam2"
    label="Departamento: (Opcional)"
  />

  <BiofrigAppearance v-model="appearance"></BiofrigAppearance>

  <GalleryInput />
</template>
