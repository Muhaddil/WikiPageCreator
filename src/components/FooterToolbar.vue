<script setup lang="ts">
// import { ref } from 'vue';
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import ConfirmDialog from 'primevue/confirmdialog';
import { usePageDataStore } from '@/stores/pageData';
import { useToast, POSITION } from 'vue-toastification';
import { useConfirm } from 'primevue/useconfirm';

const pageData = usePageDataStore();
const toast = useToast();
const confirm = useConfirm();

function showError(message: string) {
  toast.error(message, {
    position: POSITION.BOTTOM_RIGHT,
  });
}

const currentUrl = window.location.pathname;

function isBaseRenewalPage() {
  return currentUrl.includes('baserenewal.html');
}

function isFAQPage() {
  return currentUrl.includes('faq.html');
}

async function copyPage() {
  let requiredFields;

  if (!isBaseRenewalPage()) {
    requiredFields = [
      { field: pageData.outputContent, message: 'ERROR 404' },
      { field: pageData.name, message: '¡Falta el nombre!' },
      { field: pageData.glyphs, message: '¡Faltan los Glifos!' },
      { field: pageData.regionData.region, message: '¡Glifos Incorrectos!' }
    ];
  } else {
    requiredFields = [
      { field: pageData.name, message: '¡Falta el nombre!' },
      { field: pageData.censusrenewal, message: '¿Que quieres copiar? Rellena los datos' }
    ];
  }

  for (const { field, message } of requiredFields) {
    if (!field) {
      showError(message);
      return;
    }
  }

  const processedContent = pageData.outputContent
    .replace(/<br\s*\/?>/g, '\n')
    .replace(/\n{2,}/g, '\n\n');

  try {
    await navigator.clipboard.writeText(processedContent);
    toast.success('¡Copiado con éxito!', {
      position: POSITION.BOTTOM_RIGHT,
    });
  } catch (error) {
    showError('Error al copiar el contenido.');
  }
}

function createPage() {
  if (!isBaseRenewalPage()) {
    const requiredFields = [
      { field: pageData.name, message: '¡Falta el nombre!' },
      { field: pageData.glyphs, message: '¡Faltan los Glifos!' },
      { field: pageData.regionData.region, message: '¡Glifos Incorrectos!' }
    ];

    for (const { field, message } of requiredFields) {
      if (!field) {
        showError(message);
        return;
      }
    }
  }

  toast.success('¡Creada!', {
    position: POSITION.BOTTOM_RIGHT,
  });

  window.open(`https://nomanssky.fandom.com/wiki/${pageData.name}?action=edit`, '_blank');
}

function downloadCode() {
  if (!isBaseRenewalPage()) {
    const requiredFields = [
      { field: pageData.outputContent, message: 'ERROR 404' },
      { field: pageData.name, message: '¡Falta el nombre!' },
      { field: pageData.glyphs, message: '¡Faltan los Glifos!' },
      { field: pageData.regionData.region, message: '¡Glifos Incorrectos!' }
    ];

    for (const { field, message } of requiredFields) {
      if (!field) {
        showError(message);
        return;
      }
    }
  }

  const blob = new Blob([pageData.outputContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${pageData.name}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  toast.success('¡Descargado con éxito!', {
    position: POSITION.BOTTOM_RIGHT,
  });
}

function uploadFiles() {
  if (!isBaseRenewalPage()) {
    const requiredFields = [
      { field: pageData.image, message: '¿Que quieres subir sin foto principal?' },
      // { field: pageData.galleryFiles, message: '¿Que quieres subir sin fotos en la galería?' },
    ];

    for (const { field, message } of requiredFields) {
      if (!field) {
        showError(message);
        return;
      }
    }
  }

  toast.success('¡Vamos!', {
    position: POSITION.BOTTOM_RIGHT,
  });

  window.open(`https://nomanssky.fandom.com/wiki/Special:Upload?multiple=true`, '_blank');
}

function confirmReset() {
  pageData.resetStore();
  toast.success('¡Restablecido con éxito!', {
    position: POSITION.BOTTOM_RIGHT,
  });
}

function showConfirmDialog() {
  confirm.require({
    message: '¿Estás seguro de que quieres restablecer?',
    header: 'Confirmar Restablecer',
    icon: 'pi pi-exclamation-triangle',
    accept: confirmReset,
    acceptProps: {
      class: 'p-button-danger',
    },
    reject: () => {
      toast.info('Restablecimiento cancelado.', {
        position: POSITION.BOTTOM_RIGHT,
      });
    }
  });
}
</script>

<template>
  <Toolbar class="is-borderless is-radiusless" v-if="!isFAQPage()">
    <template #center>
      <div class="is-gap-1 is-flex is-justify-content-center footer-toolbar">
        <Button
          label="Copiar"
          @click="copyPage"
        />

        <Button
          v-if="!isBaseRenewalPage()"
          as="a"
          label="Crear"
          severity="warn"
          @click="createPage"
        />

        <Button
          v-if="!isBaseRenewalPage()"
          label="Descargar Código"
          @click="downloadCode"
        />
        <Button
          v-if="!isBaseRenewalPage()"
          label="Subir Archivos"
          @click="uploadFiles"
        />

        <Button
          label="Restablecer"
          severity="danger"
          @click="showConfirmDialog"
        />
      </div>
    </template>
  </Toolbar>

  <ConfirmDialog :draggable="true"/>
</template>


<style scoped>
.footer-toolbar {
  padding-inline-end: var(--p-scrollbar-width);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

/* .footer-toolbar > .p-button {
  flex: 1 1 20%;
  max-width: 30%;
  max-height: 10%;
} */
</style>
