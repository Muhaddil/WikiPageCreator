<script setup lang="ts">
import PageCreator from '@/views/PageCreator.vue';
import SettlementOutput from '@/pageSections/settlement/SettlementOutput.vue';
import SettlementInput from '@/pageSections/settlement/SettlementInput.vue';
</script>

<template>
  <PageCreator>
    <template #input>
      <SettlementInput />
    </template>

    <template #output>
      <SettlementOutput />
    </template>
  </PageCreator>
</template>
