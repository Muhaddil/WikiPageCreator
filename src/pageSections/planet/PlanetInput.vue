<script setup lang="ts">
import GlyphInput from '@/components/inputs/GlyphInput.vue';
import SanitisedTextInput from '@/components/inputs/SanitisedTextInput.vue';
import SingleFileUpload from '@/components/inputs/SingleFileUpload.vue';
import TextareaInput from '@/components/inputs/TextareaInput.vue';
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import GameModeSelect from '@/components/inputs/GameModeSelect.vue';
import DateSelect from '@/components/inputs/DateSelect.vue';
import GalleryInput from '@/components/inputs/gallery/GalleryInput.vue';
import FileUploadNotice from '@/components/FileUploadNotice.vue';
import PlanetDescriptors from '@/components/inputs/planet/PlanetDescriptors.vue';
import BiomeInput from '@/components/inputs/planet/BiomeInput.vue';
// import InputTableItem from '../../components/InputTableItem.vue';
// import Checkbox from 'primevue/checkbox';
// import Explainer from '@/components/Explainer.vue';
import SystemRace from '@/components/inputs/system/SystemRace.vue';
import SystemEconomy from '@/components/inputs/system/SystemEconomy.vue';
import SystemConflict from '@/components/inputs/system/SystemConflict.vue';
import WealthSelect from '@/components/WealthSelect.vue';
import PlatformSelect from '@/components/inputs/PlatformSelect.vue';
import PlanetResourceInputs from '@/components/inputs/planet/PlanetResourceInputs.vue';
import PlanetSentinels from '@/components/inputs/planet/PlanetSentinels.vue';
import MoonInputs from '@/components/inputs/planet/MoonInputs.vue';
import PlanetWeather from '@/components/inputs/planet/PlanetWeather.vue';
import PlanetFauna from '@/components/inputs/planet/PlanetFauna.vue';
import PlanetFlora from '@/components/inputs/planet/PlanetFlora.vue';

const pageData = usePageDataStore();
const {
  name,
  discovered,
  discoveredlink,
  image,
  glyphs,
  atmosphere,
  mode,
  orgName,
  additionalInfo,
  discDate,
  Planetdescriptors,
  faction,
  docBy,
  economy,
  biome,
  wealth,
  sentinels,
  weather,
  conflict,
  platform,
  docDate,
  navImage,
  system,
  fauna,
  flora,
} = storeToRefs(pageData);

const systemplanets = ref([]);
</script>

<template>
  <SanitisedTextInput v-model="name" help-img="planet/planetName" help-title="Nombre del Planeta"
    label="Nombre del Planeta:"
    tooltip="Introduce exactamente como se ve en el juego. Cuidado con el 0 (cero) y la O (o).">
    Introduce exactamente como se ve en el juego. Cuidado con el 0 (cero) y la O (o).
  </SanitisedTextInput>
  <SanitisedTextInput v-model="orgName" label="Nombre original antes de registrar (si está disponible):" />

  <SingleFileUpload v-model="image" label="Imagen principa:l" help-title="Subida de Archivo"
    tooltip="La imagen no se subirá a la wiki. Esto es solo para autocompletar el nombre de la imagen.">
    <FileUploadNotice />
  </SingleFileUpload>

  <SingleFileUpload v-model="navImage" label="Nombre de la imagen principal:" help-title="Subida de Archivo"
    tooltip="La imagen no se subirá a la wiki. Esto es solo para autocompletar el nombre de la imagen.">
    <FileUploadNotice />
  </SingleFileUpload>

  <SanitisedTextInput v-model="system" help-img="planet/planetName" help-title="Nombre del Sistema"
    label="Nombre del Sistema:"
    tooltip="Introduce exactamente como se ve en el juego. Cuidado con el 0 (cero) y la O (o).">
    Introduce exactamente como se ve en el juego. Cuidado con el 0 (cero) y la O (o).
  </SanitisedTextInput>

  <GlyphInput v-model="glyphs" />

  <BiomeInput v-model="biome" />

  <MoonInputs v-model="systemplanets" />

  <PlanetDescriptors v-model="Planetdescriptors" />
  <SanitisedTextInput v-model="atmosphere" label="Atmósfera del planeta:"tooltip="Se puede encontrar en la guía de exploración." help-img="planet/atmosphere" help-title="Atmósfera del planeta">Se puede encontrar en la guía de exploración.</SanitisedTextInput>

  <PlanetWeather v-model="weather" />
  <PlanetResourceInputs />
  <PlanetSentinels v-model="sentinels" />

  <PlanetFlora v-model="flora" />
  <PlanetFauna v-model="fauna" />

  <SystemRace v-model="faction" />
  <SystemEconomy v-model="economy" />

  <WealthSelect v-model="wealth" />
  <SystemConflict v-model="conflict" />

  <DateSelect v-model="discDate" label="¿Cuándo se descubrió este sistema?" />
  <DateSelect v-model="docDate" label="¿Cuándo se documentó este sistema?" />
  <GameModeSelect v-model="mode" />
  <PlatformSelect v-model="platform" />
  <SanitisedTextInput v-model="discoveredlink" label="Nombre del Descubridor en la wiki:" />
  <SanitisedTextInput v-model="discovered" label="Alias del Descubridor si no tiene wiki:" v-if="!discoveredlink" />
  <SanitisedTextInput v-model="docBy" label="Nombre del documentador si no es el descubridor:" />

  <TradeableInput />

  <TextareaInput v-model="additionalInfo" label="Información Adicional:" />

  <GalleryInput />
</template>
