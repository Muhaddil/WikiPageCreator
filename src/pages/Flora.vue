<script setup lang="ts">
import PageCreator from '@/views/PageCreator.vue';
import FloraOutput from '@/pageSections/flora/FloraOutput.vue';
import FloraInput from '@/pageSections/flora/FloraInput.vue';
</script>

<template>
  <PageCreator>
    <template #input>
      <FloraInput />
    </template>

    <template #output>
      <FloraOutput />
    </template>
  </PageCreator>
</template>
