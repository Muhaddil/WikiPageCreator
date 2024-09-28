<script setup lang="ts">
import InputRow from '../structure/InputRow.vue';
import creatureDietDatalist from '@/datalists/creatureDietDatalists';
import Explanation from '../structure/Explanation.vue';
import { usePageDataStore } from '../../stores/pageData';
import { storeToRefs } from 'pinia';
import { watchDebounced } from '@vueuse/core';
import { forceDatalistComponent } from '@/common';
import { ref } from 'vue';

const pageData = usePageDataStore();
const { diet } = storeToRefs(pageData);
const isDietInvalid = ref('');

watchDebounced(
  diet,
  () => (isDietInvalid.value = forceDatalistComponent(diet.value, Object.keys(creatureDietDatalist))),
  {
    debounce: 500,
  }
);
</script>

<template>
    <InputRow>
        <template #label>
          <div class="label-combo">
          <label>Dieta:</label>
          </div>
          <Explanation img="creature/creatureDiet">
            Encontrado en el escaneo de criaturas.
            <template #heading>Dieta</template>
            <template #content>
              Encontrado en el escaneo de criaturas.
            </template>
          </Explanation>
        </template>
        <template #input>
      <input list="creatureDietDatalist" v-model="diet" type="text" :error="isDietInvalid">
      <datalist id="creatureDietDatalist">
        <option v-for="(escreatureDietDatalist, encreatureDietDatalist) in creatureDietDatalist" :value="encreatureDietDatalist">
          {{ escreatureDietDatalist }}
        </option>
      </datalist>
    </template>
      </InputRow>
</template>
