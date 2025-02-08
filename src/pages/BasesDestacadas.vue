<script setup lang="ts">
import { ref } from 'vue';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';
import Panel from 'primevue/panel';
import Dialog from 'primevue/dialog';

const bases = ref([
  {
    name: 'Mamadisimo City',
    image: 'assets/images/basesdestacadas/Mamadisimocity.webp',
    location: 'Galaxia Euclides - Sistema Sentinel Prime',
    author: 'Lider Mamadisimo',
    description: 'Capital intergaláctica de la Royal Space Society con instalaciones de investigación avanzada y centro de comercio interestelar.',
    features: ['Tecnología', 'Comercio', 'Investigación']
  },
  {
    name: 'RSS UfoPrime',
    image: 'assets/images/basesdestacadas/Ufoprime.webp',
    location: 'Galaxia Euclides - Sistema Sentinel Prime',
    author: 'Olivello',
    description: 'Nave principal de la Royal Space Society, donde se coordinan todos los movimientos estratégicos.',
    features: ['Artística', 'Tecnológica']
  },
]);

const isModalOpen = ref(false);
const modalImage = ref('');

const openModal = (image: string) => {
  modalImage.value = image;
  isModalOpen.value = true;
};
</script>

<template>
  <Card class="p-0 galactic-card">
    <template #content>
      <div class="space-page-container">
        <div class="text-center mb-8">
          <h1 class="text-5xl font-bold mb-3 galactic-title">BASES ESTELARES DESTACADAS</h1>
          <p class="text-stellar-gray mb-6">
            Catálogo de las instalaciones más impresionantes del universo conocido
          </p>
        </div>

        <Carousel :value="bases" :numVisible="1" :numScroll="1" circular :autoplayInterval="6000"
          class="galactic-carousel">
          <template #item="slotProps">
            <div class="base-card relative">
              <div class="image-container">
                <img :src="slotProps.data.image" :alt="slotProps.data.name"
                  class="galactic-image object-cover w-full h-full" @click="openModal(slotProps.data.image)" />
              </div>
              <div class="base-info">
                <div class="info-content">
                  <h2 class="text-4xl font-bold mb-2">{{ slotProps.data.name }}</h2>
                  <div class="location-tag">
                    <i class="pi pi-map-marker mr-2"></i>
                    <span>{{ slotProps.data.location }}</span>
                  </div>
                  <div class="autor-tag">
                    <i class="pi pi-user mr-2"></i>
                    <span>{{ slotProps.data.author }}</span>
                  </div>
                  <div class="flex flex-wrap gap-3 my-4">
                    <Tag v-for="(feature, index) in slotProps.data.features" :key="index" :value="feature"
                      icon="pi pi-caret-right" class="feature-tag" />
                  </div>
                  <p class="description-text">{{ slotProps.data.description }}</p>
                </div>
              </div>
            </div>
          </template>
        </Carousel>

        <Panel header="Registro Galáctico" class="galactic-panel mt-6">
          <p class="m-0 text-stellar-gray">
            Las bases aquí mostradas han sido certificadas por la Royal Space Society según los criterios de:
            <span class="text-cyan-300 font-semibold">
              Innovación tecnológica, Valor científico y Diseño arquitectónico
            </span>.
            <br />
            Actualización estelar: 18/7/2567 (Ciclo Korvax)
          </p>
        </Panel>
      </div>
    </template>
  </Card>

  <Dialog v-model:visible="isModalOpen" modal :closable="false" class="custom-modal" style="width: 90vw; height: 90vh;">
    <template #header>
      <button type="button" class="close-modal" @click="isModalOpen = false">X</button>
    </template>
    <a :href="modalImage" target="_blank">
    <div class="modal-content">
      <img :src="modalImage" alt="Imagen ampliada" class="modal-image"/>
    </img>
    </div>
  </a>
  </Dialog>


</template>
<style scoped>
/* .space-page-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1rem;
} */

.galactic-card {
  background: linear-gradient(45deg, #0a0e1a 0%, #1a1f2d 100%);
  border: 1px solid rgba(103, 232, 249, 0.2);
}

.galactic-title {
  background: linear-gradient(45deg, #67e8f9 0%, #4f46e5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(103, 232, 249, 0.3);
}

.space-page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.custom-modal {
  width: 90vw !important;
  height: 90vh !important;
}

.custom-modal .p-dialog-content {
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 100%;
}

.modal-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.modal-image {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: contain;
}

.custom-carousel :deep(.p-carousel-indicators) {
  padding: 1.5rem 0;
}

.custom-carousel :deep(.p-carousel-indicator button) {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: rgba(103, 232, 249, 0.4);
  transition: all 0.3s ease;
}

.custom-carousel :deep(.p-carousel-indicator.p-highlight button) {
  background-color: #67e8f9;
  transform: scale(1.3);
}

.close-modal {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
}

.custom-carousel :deep(.p-carousel-indicators) {
  padding: 1rem 0;
}

.custom-carousel :deep(.p-carousel-indicator button) {
  background-color: #67e8f9;
}

.custom-tag {
  background-color: rgba(103, 232, 249, 0.1) !important;
  border: 1px solid #67e8f9 !important;
}

.base-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(103, 232, 249, 0.3);
}

.base-info {
  backdrop-filter: blur(5px);
  padding: 2rem;
  background: linear-gradient(0deg, rgba(10, 14, 26, 0.95) 30%, transparent 100%);
}

.image-container {
  height: auto;
  width: 100%;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(103, 232, 249, 0.2);
}

.galactic-image {
  transition: transform 0.5s ease;
  min-width: 100%;
}

.base-card:hover .galactic-image {
  transform: scale(1.03);
}

.info-content {
  max-width: 1200px;
  margin: 0 auto;
}

.location-tag {
  @apply text-blue-300 font-mono text-sm mb-3 flex items-center;
}

.feature-tag {
  @apply bg-transparent border border-cyan-400 text-cyan-300 rounded-full;
  transition: all 0.3s ease;
  margin-right: 1%;
}

.feature-tag:hover {
  @apply bg-cyan-900 border-cyan-300;
}

.description-text {
  @apply text-gray-200 text-lg max-w-2xl leading-relaxed;
}

.galactic-carousel :deep(.p-carousel-indicators) {
  padding: 1.5rem 0;
}

.galactic-carousel :deep(.p-carousel-indicator button) {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: rgba(103, 232, 249, 0.4);
  transition: all 0.3s ease;
}

.galactic-carousel :deep(.p-carousel-indicator.p-highlight button) {
  background-color: #67e8f9;
  transform: scale(1.3);
}

.galactic-panel {
  background: rgba(16, 23, 42, 0.8) !important;
  border: 1px solid rgba(103, 232, 249, 0.15) !important;
  backdrop-filter: blur(10px);
}

.text-stellar-gray {
  color: #a0aec0;
}
</style>
