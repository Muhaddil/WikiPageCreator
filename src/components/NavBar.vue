<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Button from 'primevue/button';

const sandwormLink = ref('');

onMounted(() => {
  const currentUrl = window.location.pathname;
  if (currentUrl.includes('fauna.html')) {
    sandwormLink.value = 'sandworm.html';
  }
});
</script>

<template>
  <Button :href="'/'" as="a" icon="pi pi-arrow-left" label="Ver otras páginas" link />

  <Button v-if="sandwormLink" :href="sandwormLink" as="a" icon="pi pi-arrow-right" label="Ir a Sandworm" link />
</template>
