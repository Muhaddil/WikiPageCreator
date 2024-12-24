<script setup lang="ts">
import PageCreator from '@/views/PageCreator.vue';
import MTOutput from '@/pageSections/multitool/MTOutput.vue';
import MTInput from '@/pageSections/multitool/MTInput.vue';
</script>

<template>
  <PageCreator>
    <template #input>
      <MTInput />
    </template>

    <template #output>
      <MTOutput />
    </template>
  </PageCreator>
</template>
