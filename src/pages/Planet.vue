<script setup lang="ts">
import PageCreator from '@/views/PageCreator.vue';
import PlanetOutput from '@/pageSections/planet/PlanetOutput.vue';
import PlanetInput from '@/pageSections/planet/PlanetInput.vue';
</script>

<template>
  <PageCreator>
    <template #input>
      <PlanetInput />
    </template>

    <template #output>
      <PlanetOutput />
    </template>
  </PageCreator>
</template>
