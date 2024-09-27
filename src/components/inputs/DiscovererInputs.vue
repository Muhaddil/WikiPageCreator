<script setup lang="ts">
import InputRow from '../structure/InputRow.vue';
import { usePageDataStore } from '../../stores/pageData';
import { storeToRefs } from 'pinia';

const pageData = usePageDataStore();
const { discovered, discoveredlink, mode } = storeToRefs(pageData);

interface Props {
  type?: string;
}

withDefaults(defineProps<Props>(), {
  type: 'Descubridor',
});
</script>

<template>
  <InputRow>
    <template #label>
      <label for="mode">Modo de juego:</label>
      <Explanation img="creature/creatureEcosystem">
        Seleccione un ecosistema para filtrar los géneros de criaturas.
        <template #heading>Ecosistema</template>
        <template #content> Seleccione un ecosistema para filtrar los géneros. </template>
      </Explanation>
    </template>
    <template #input>
      <select
        v-model="mode"
        id="mode"
      >
        <option value="Normal">Normal</option>
        <option value="Relaxed">Relajado</option>
        <option value="Survival">Survival</option>
        <option value="Permadeath">Muerte permanente</option>
        <option value="Creative">Creativo</option>
        <option value="Custom">Personalizada</option>
      </select>
    </template>
  </InputRow>

  <InputRow v-if="!discovered">
    <template #label>
      <label for="discoveredlinkInput">Nombre del {{ type }} en la wiki:</label>
    </template>
    <template #input>
      <input
        v-model="discoveredlink"
        type="text"
        id="discoveredlinkInput"
      />
    </template>
  </InputRow>

  <InputRow v-if="!discoveredlink">
    <template #label>
      <label for="discoveredInput">Alias del {{ type }} si no tiene wiki:</label>
    </template>
    <template #input>
      <input
        v-model="discovered"
        type="text"
        id="discoveredInput"
      />
    </template>
  </InputRow>
</template>
