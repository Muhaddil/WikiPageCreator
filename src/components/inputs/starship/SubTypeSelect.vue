<script setup lang="ts">
import { useId } from '@/helpers/id';
import InputTableItem from '../../InputTableItem.vue';
import SelectDropdown from '../SelectDropdown.vue';
import { mappedClassOptions } from '@/variables/starship/SubSTypes';

defineProps<{ resetEvent?: string }>();

const model = defineModel<string>({ required: true });

const id = useId('type-');
</script>

<template>
  <InputTableItem>
    <template #label>
      <label :id>Tipo de Nave:</label>
    </template>

    <template #input>
      <SelectDropdown
        v-model="model"
        :aria-labelledby="id"
        :options="mappedClassOptions"
        :reset-event
      />
    </template>
  </InputTableItem>
</template>
