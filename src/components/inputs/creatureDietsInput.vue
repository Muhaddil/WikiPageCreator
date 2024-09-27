<script setup lang="ts">
import InputRow from '../structure/InputRow.vue';
import creatureDietDatalist from '@/datalists/creatureDietDatalists';
import Explanation from '../structure/Explanation.vue';
import { usePageDataStore } from '../../stores/pageData';
import { storeToRefs } from 'pinia';

const pageData = usePageDataStore();
const { diet } = storeToRefs(pageData);
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
      <input list="floraNotesDatalist" v-model="diet" type="text">
      <datalist id="floraNotesDatalist">
        <option v-for="(escreatureDietDatalist, encreatureDietDatalist) in creatureDietDatalist" :value="encreatureDietDatalist">
          {{ escreatureDietDatalist }}
        </option>
      </datalist>
    </template>
      </InputRow>
</template>
