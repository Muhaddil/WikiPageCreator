<script setup lang="ts">
import InputRow from '../structure/InputRow.vue';
import creatureBehaviourDatalist from '@/datalists/creatureDatalists3';
import Explanation from '../structure/Explanation.vue';
import { usePageDataStore } from '../../stores/pageData';
import { storeToRefs } from 'pinia';
import { watchDebounced } from '@vueuse/core';
import { forceDatalistComponent } from '@/common';
import { ref } from 'vue';
import ErrorMessage from './ErrorMessage.vue';

const pageData = usePageDataStore();
const { behaviour } = storeToRefs(pageData);
const isBehaviourInvalid = ref('');

watchDebounced(
  behaviour,
  () => (isBehaviourInvalid.value = forceDatalistComponent(behaviour.value, Object.keys(creatureBehaviourDatalist))),
  {
    debounce: 500,
  }
);

defineProps<{
  error?: string;}>();
</script>

<template>
    <InputRow>
        <template #label>
          <div class="label-combo">
          <label>Comportamiento:</label>
          </div>
          <Explanation img="creature/creatureBehaviour">
            Encontrado en el escaneo de criaturas.
            <template #heading>Comportamiento</template>
            <template #content>
              Encontrado en el escaneo de criaturas.
            </template>
          </Explanation>
        </template>
        <template #input>
      <input list="creatureBehaviourDatalist" v-model="behaviour" type="text">
      <datalist id="creatureBehaviourDatalist">
        <option v-for="(escreatureBehaviourDatalist, encreatureBehaviourDatalist) in creatureBehaviourDatalist" :value="encreatureBehaviourDatalist">
          {{ escreatureBehaviourDatalist }}
        </option>
      </datalist>
      <ErrorMessage
        v-if="error"
        v-html="error"
      ></ErrorMessage>
    </template>
      </InputRow>
</template>
