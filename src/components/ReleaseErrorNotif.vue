<script setup lang="ts">
import { usePageDataStore } from '@/stores/pageData';
import Button from 'primevue/button';

const pageData = usePageDataStore();
</script>

<template>
  <div class="is-flex is-gap-1 is-align-items-center">
    <div>{{ '¡No se pudo obtener la versión!' }}</div>
    <Button
      label="Reintentar"
      severity="danger"
      size="small"
      raised
      @click="pageData.getRelease"
    />
  </div>
</template>
