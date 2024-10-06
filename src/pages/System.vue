<script setup lang="ts">
import PageCreator from '@/views/PageCreator.vue';
import SystemOutput from '@/pageSections/system/SystemOutput.vue';
import SystemInput from '@/pageSections/system/SystemInput.vue';
</script>

<template>
  <PageCreator>
    <template #input>
      <SystemInput />
    </template>

    <template #output>
      <SystemOutput />
    </template>
  </PageCreator>
</template>
