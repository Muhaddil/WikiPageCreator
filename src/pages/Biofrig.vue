<script setup lang="ts">
import PageCreator from '@/views/PageCreator.vue';
import BioFrigOutput from '@/pageSections/biofrig/BioFrigOutput.vue';
import BioFrigInput from '@/pageSections/biofrig/BioFrigInput.vue';
</script>

<template>
  <PageCreator>
    <template #input>
      <BioFrigInput />
    </template>

    <template #output>
      <BioFrigOutput />
    </template>
  </PageCreator>
</template>
