<script setup lang="ts">
import InputRow from '../structure/InputRow.vue';
import creatureNotesDatalist from '@/datalists/creatureDatalists2';
import Explanation from '../structure/Explanation.vue';
import { usePageDataStore } from '../../stores/pageData';
import { storeToRefs } from 'pinia';
import { watchDebounced } from '@vueuse/core';
import { forceDatalistComponent } from '@/common';
import { ref } from 'vue';

const pageData = usePageDataStore();
const { notes } = storeToRefs(pageData);

const isNotesInvalid = ref('');

watchDebounced(
  notes,
  () => (isNotesInvalid.value = forceDatalistComponent(notes.value, Object.keys(creatureNotesDatalist))),
  {
    debounce: 500,
  }
);
</script>

<template>
    <InputRow>
        <template #label>
          <div class="label-combo">
          <label>Notas:</label>
          </div>
          <Explanation img="creature/creatureNotes">
            Encontrado en el escaneo de criaturas.
            <template #heading>Notas</template>
            <template #content>
              Encontrado en el escaneo de criaturas. Puede diferir del menú de descubrimiento.
            </template>
          </Explanation>
        </template>
        <template #input>
      <input list="creatureNotesDatalist" v-model="notes" type="text" :error="isNotesInvalid">
      <datalist id="creatureNotesDatalist">
        <option v-for="(escreatureNotesDatalist, encreatureNotesDatalist) in creatureNotesDatalist"
        :value="encreatureNotesDatalist">
          {{ escreatureNotesDatalist }}
        </option>
      </datalist>
    </template>
      </InputRow>
</template>
