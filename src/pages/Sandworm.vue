<script setup lang="ts">
import PageCreator from '@/views/PageCreator.vue';
import SandwormOutput from '@/pageSections/sandworm/SandwormOutput.vue';
import SandwormInput from '@/pageSections/sandworm/SandwormInput.vue';
</script>

<template>
  <PageCreator>
    <template #input>
      <SandwormInput />
    </template>

    <template #output>
      <SandwormOutput />
    </template>
  </PageCreator>
</template>
