<script setup lang="ts">
import GlyphInput from '@/components/inputs/GlyphInput.vue';
import PlatformSelect from '@/components/inputs/PlatformSelect.vue';
import SanitisedTextInput from '@/components/inputs/SanitisedTextInput.vue';
import SingleFileUpload from '@/components/inputs/SingleFileUpload.vue';
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { computed, ref, watch } from 'vue';
import InputTableItem from '@/components/InputTableItem.vue';
import SelectDropdown from '@/components/inputs/SelectDropdown.vue';
import GameModeSelect from '@/components/inputs/GameModeSelect.vue';
import WealthSelect from '@/components/WealthSelect.vue';
import TypeSelect from '@/components/inputs/starship/TypeSelect.vue';
import GalleryInput from '@/components/inputs/gallery/GalleryInput.vue';
import FileUploadNotice from '@/components/FileUploadNotice.vue';
import TextareaInput from '@/components/inputs/TextareaInput.vue';
import { shipData } from '@/variables/starship/shipData';
import { mapOptions } from '@/helpers/selectMapping';
import type { SelectOption } from '@/types/selectInputOptions';

const pageData = usePageDataStore();
const {
  name,
  discovered,
  discoveredlink,
  image,
  glyphs,
  wealth,
  system,
  platform,
  mode,
  docBy,
  type,
  inventory,
  subtype,
  researchteam2,
  additionalInfo,
  statsClass,
} = storeToRefs(pageData);

const typeSpecificValues = computed(() => {
  return (
    shipData[type.value] || {
      subtypes: [],
      secParts: [],
      accessories: [],
      miscParts: [],
      sections: {
        inventoryInput: []
      },
    }
  );
});

const sizeMapping = {
  'Pequeño': 'Small',
  'Mediano': 'Medium',
  'Grande': 'Large'
};

const mappedsizeMapping: SelectOption[] = mapOptions(sizeMapping);

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
  <TypeSelect v-model="type" />
  <SanitisedTextInput
    v-model="system"
    label="Nombre del Sistema"
  />
  <WealthSelect v-model="wealth" />
  <GlyphInput v-model="glyphs" />

  <InputTableItem>
    <template #label>
      <label>SubTipo de Nave:</label>
    </template>

    <template #input>
      <SelectDropdown
        v-model="subtype"
        :aria-labelledby="subtype"
        :options="typeSpecificValues.subtypes"
      />
    </template>
  </InputTableItem>

  <InputTableItem>
    <template #label>
      <label>Inventario:</label>
    </template>

    <template #input>
      <SelectDropdown
        v-model="inventory"
        :aria-labelledby="inventory"
        :options="mappedsizeMapping"
      />
    </template>
  </InputTableItem>

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

  <GameModeSelect v-model="mode" />
  <PlatformSelect v-model="platform" />

  <TextareaInput
    v-model="additionalInfo"
    label="Información Adicional"
  />
  <GalleryInput />
</template>
