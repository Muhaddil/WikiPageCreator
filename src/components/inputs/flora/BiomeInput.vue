<script setup lang="ts">
import { useId } from '@/helpers/id';
import InputTableItem from '../../InputTableItem.vue';
import SelectDropdown from '../SelectDropdown.vue';
import { mappedFloraBiome } from '@/variables/flora/biomes';

defineProps<{ resetEvent?: string }>();

const model = defineModel<string>({ required: true });

const id = useId('biomeinput');
</script>

<template>
  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label :id>¿En qué bioma se encuentra esta planta?</label>
      </div>
    </template>

    <template #input>
      <SelectDropdown
        v-model="model"
        :aria-labelledby="id"
        :options="mappedFloraBiome"
        :reset-event
      />
    </template>
  </InputTableItem>
</template>
