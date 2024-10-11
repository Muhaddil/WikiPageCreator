<script setup lang="ts">
import { useId } from '@/helpers/id';
import InputTableItem from '../../InputTableItem.vue';
import SelectDropdown from '../SelectDropdown.vue';
import { mappedStomachContent } from '@/variables/sandworm/stomachcontent';

defineProps<{ resetEvent?: string }>();

const model = defineModel<string>({ required: true });

const id = useId('stomachcontentinput');
</script>

<template>
  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label :id>Contenido del estómago:</label>
      </div>
    </template>

    <template #input>
      <SelectDropdown
        v-model="model"
        :aria-labelledby="id"
        :options="mappedStomachContent"
        :reset-event
      />
    </template>
  </InputTableItem>
</template>
