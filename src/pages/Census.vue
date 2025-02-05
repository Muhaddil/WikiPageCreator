<script setup lang="ts">
import PageCreator from '@/views/PageCreator.vue';
import CensusOutput from '@/pageSections/census/CensusOutput.vue';
import CensusInput from '@/pageSections/census/CensusInput.vue';
</script>

<template>
  <PageCreator>
    <template #input>
      <CensusInput />
    </template>

    <template #output>
      <CensusOutput />
    </template>
  </PageCreator>
</template>
