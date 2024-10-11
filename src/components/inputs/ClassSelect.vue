<script setup lang="ts">
import { useId } from '@/helpers/id';
import InputTableItem from '../InputTableItem.vue';
import SelectDropdown from './SelectDropdown.vue';
import { mappedClassOptions } from '@/variables/classes';

defineProps<{ resetEvent?: string }>();

const model = defineModel<string>({ required: true });

const id = useId('platform-');
</script>

<template>
  <InputTableItem>
    <template #label>
      <label :id>Clase:</label>
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
