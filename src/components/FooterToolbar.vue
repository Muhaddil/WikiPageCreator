<script setup lang="ts">
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import { usePageDataStore } from '@/stores/pageData';
import { useToast, POSITION } from 'vue-toastification';

const pageData = usePageDataStore();

const toast = useToast();
const copyContent = ''

async function copyPage() {
  try {
    await navigator.clipboard.writeText(copyContent);
    toast.success('¡Copiado!', {
      position: POSITION.BOTTOM_RIGHT,
    });
  } catch (error) {
    toast.error('¡El botón aún no funciona!');
  }
}

function createPage() {
  const randomBool = Math.random() > 0.5;
  if (randomBool) {
    toast.error('¡El botón aún no funciona!');
  } else {
    toast.success('¡Creada!', {
      position: POSITION.BOTTOM_RIGHT,
    });
  }
}
</script>

<template>
  <Toolbar class="is-borderless is-radiusless">
    <template #center>
      <div class="is-gap-1 is-flex is-justify-content-center footer-toolbar">
        <Button
          label="Copiar"
          @click="copyPage"
        />
        <Button
          as="a"
          label="Crear"
          @click="createPage"
        />
        <Button
          label="Restablecer"
          severity="warn"
          @click="pageData.resetStore"
        />
      </div>
    </template>
  </Toolbar>
</template>

<style scoped>
.footer-toolbar {
  padding-inline-end: var(--p-scrollbar-width);
}
</style>
