<script setup lang="ts">
import Panel from 'primevue/panel';
import type { SelectOption } from '@/types/selectInputOptions';
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { computed, ref, watchEffect } from 'vue';
import InputTableItem from '@/components/InputTableItem.vue';
import SelectDropdown from '@/components/inputs/SelectDropdown.vue';

const pageData = usePageDataStore();
const { name } = storeToRefs(pageData);

const isCollapsed = ref(false);
const primaryColor = ref('');
const secondaryColor = ref('');
const miscParts = ref('');

const primaryColorMapping: { [key: string]: string } = {
  Nada: '',
  Azul: 'blue',
  Cromado: 'chrome',
  Crema: 'cream',
  Verde: 'green',
  Gris: 'grey',
  Naranja: 'orange',
  Rosa: 'pink',
  Morado: 'purple',
  Rojo: 'red',
  Bronceado: 'tan',
  'Verde azulado': 'teal',
  Blanco: 'white',
  Amarillo: 'yellow',
};

const mappedprimaryColorMapping: SelectOption[] = Object.entries(primaryColorMapping).map(([label, value]) => ({
  label,
  value,
}));

const description = computed(() => {
  let desc = `${name.value} is a ${primaryColor.value} organic frigate.`;
  if (secondaryColor.value) {
    desc = `${name.value} is a ${primaryColor.value} organic frigate with ${secondaryColor.value} accents.`;
  }
  if (!primaryColor.value) {
    desc = ``;
  }
  const features = [];
  if (miscParts.value) features.push(miscParts.value);
  if (features.length > 0) {
    if (features.length === 1 && secondaryColor.value) {
      desc = `${name.value} is a ${primaryColor.value} organic frigate with ${secondaryColor.value} accents with ${features}.`;
    }
  }
  return desc;
});

watchEffect(() => {
  pageData.appearance = description.value;
});

const tentacleTypeMapping: { [key: string]: string } = {
  Nada: '',
  Leviatán: 'leviathan tentacles',
  'Mono-Leviatán': 'a mono-leviathan tentacle',
  Pulpo: 'squid tentacles',
  'Calamar Central Grande': 'a large central squid tentacle',
  Blindado: 'shielded tentacles',
  Achaparrado: 'stubby tentacles',
  Etéreo: 'ethereal tentacles',
  'Tentáculos Duales': 'dual tentacles',
};

const mappedTentacleTypeMapping: SelectOption[] = Object.entries(tentacleTypeMapping).map(([label, value]) => ({
  label,
  value,
}));
</script>

<template>
  <Panel
    v-model:collapsed="isCollapsed"
    class="my-4"
    header="Esta sección crea una frase de apariencia predefinida, no es obligatoria."
    toggleable
  >
    <template #toggleicon>
      <span :class="`pi pi-chevron-${isCollapsed ? 'down' : 'up'}`"></span>
    </template>

    <InputTableItem>
      <template #label>
        <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
          <label>Color principal:</label>
        </div>
      </template>

      <template #input>
        <SelectDropdown
          v-model="primaryColor"
          :aria-labelledby="primaryColor"
          :options="mappedprimaryColorMapping"
        />
      </template>
    </InputTableItem>

    <InputTableItem>
      <template #label>
        <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
          <label>Color secundario:</label>
        </div>
      </template>

      <template #input>
        <SelectDropdown
          v-model="secondaryColor"
          :aria-labelledby="secondaryColor"
          :options="mappedprimaryColorMapping"
        />
      </template>
    </InputTableItem>

    <InputTableItem>
      <template #label>
        <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
          <label>Tipo de tentáculo:</label>
        </div>
      </template>

      <template #input>
        <SelectDropdown
          v-model="miscParts"
          :aria-labelledby="miscParts"
          :options="mappedTentacleTypeMapping"
        />
      </template>
    </InputTableItem>
  </Panel>
</template>

<style scoped>
.census-row :deep(.column) {
  padding-block-end: 0;
}
</style>
