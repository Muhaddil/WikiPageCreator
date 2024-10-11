<script setup lang="ts">
import { useId } from '@/helpers/id';
import InputTableItem from '../../InputTableItem.vue';
import SelectDropdown from '../SelectDropdown.vue';
import { mappedAppearOnReload } from '@/variables/sandworm/appearonreload';

defineProps<{ resetEvent?: string }>();

const model = defineModel<string>({ required: true });

const id = useId('stomachcontentinput');
</script>

<template>
  <InputTableItem>
    <template #label>
      <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
        <label :id>¿Este gusano aparece al recargar el juego?</label>
      </div>
    </template>

    <template #input>
      <SelectDropdown
        v-model="model"
        :aria-labelledby="id"
        :options="mappedAppearOnReload"
        :reset-event
      />
    </template>
  </InputTableItem>
</template>
