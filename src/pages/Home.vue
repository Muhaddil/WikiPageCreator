<script setup lang="ts">
import type { CivImageProps, PageLinkProps } from '@/types/homePageProps';
import { reactive, onMounted } from 'vue';
import CivImage from '@/components/CivImage.vue';
import PageLink from '@/components/PageLink.vue';

const links: PageLinkProps[] = [
  {
    text: '',
    url: './base.html',
    img: './assets/images/buttons/1_001.png',
    imgAlt: 'Bases Censo',
  },
  {
    text: '',
    url: './basenocensus.html',
    img: './assets/images/buttons/1_002.png',
    imgAlt: 'Bases Normales',
  },
  {
    text: '',
    url: './racetrack.html',
    img: './assets/images/buttons/1_003.png',
    imgAlt: 'Circuitos',
  },
  {
    text: '',
    url: './settlement.html',
    img: './assets/images/buttons/1_004.png',
    imgAlt: 'Asentamientos',
  },
  {
    text: '',
    url: './fauna.html',
    img: './assets/images/buttons/1_012_2.png',
    imgAlt: 'Fauna',
  },
  {
    text: '',
    url: './sandworm.html',
    img: './assets/images/buttons/1_015.png',
    imgAlt: 'Gusano de Arena',
  },
  {
    text: '',
    url: './flora.html',
    img: './assets/images/buttons/1_006.png',
    imgAlt: 'Flora',
  },
  {
    text: '',
    url: './starship.html',
    img: './assets/images/buttons/1_013.png',
    imgAlt: 'Naves',
  },
  {
    text: '',
    url: './multitool.html',
    img: './assets/images/buttons/1_007.png',
    imgAlt: 'Multiherramientas',
  },
  {
    text: '',
    url: './mineral.html',
    img: './assets/images/buttons/1_005.png',
    imgAlt: 'Mineral',
  },
  {
    text: '',
    url: './derelict.html',
    img: './assets/images/buttons/1_014.png',
    imgAlt: 'Carguero Abandonado',
  },
  {
    text: '',
    url: './biofrig.html',
    img: './assets/images/buttons/1_009.png',
    imgAlt: 'Fragatas Organicas',
  },
  // {
  //   text: 'Artifact',
  //   url: './artifact.html',
  // },
  {
    text: '',
    url: './system.html',
    img: './assets/images/buttons/1_008.png',
    imgAlt: 'Sistemas',
  },
  {
    text: '',
    url: './planet.html',
    img: './assets/images/buttons/1_010.png',
    imgAlt: 'Planetas',
  },
  {
    text: '',
    url: './moon.html',
    img: './assets/images/buttons/1_011.png',
    imgAlt: 'Lunas',
  },
];

function getCssVarValue(varName: string) {
  // Get the value of the CSS variable, which will be something like 'url("...")'
  let cssValue = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();

  // Remove 'url(' from the start and ')' from the end to get only the image URL
  if (cssValue.startsWith('url(') && cssValue.endsWith(')')) {
    let imageUrl = cssValue.slice(4, -1);

    // If the URL is between quotes, also remove them
    if (imageUrl.startsWith('"') && imageUrl.endsWith('"')) {
      imageUrl = imageUrl.slice(1, -1);
    }

    return imageUrl;
  }

  // If the value does not have the expected format, return the value as is
  return cssValue;
}

const images = reactive<CivImageProps[]>([]);

// Reactive variable to store the value of the CSS variable
const hubLogo = reactive({ value: '' });

onMounted(() => {
  // Update the value of hubLogo with the current value of the CSS variable
  hubLogo.value = getCssVarValue('--hublogo');

  images.push({
    link: 'https://nomanssky.fandom.com/es/wiki/Royal_Space_Society',
    imgAlt: 'Royal Space Society logo',
    img: hubLogo.value,
  });

  // Set up an interval to check if the value of the CSS variable has changed
  setInterval(() => {
    const newHubLogoValue = getCssVarValue('--hublogo');
    if (newHubLogoValue !== hubLogo.value) {
      hubLogo.value = newHubLogoValue;
      images[0].img = hubLogo.value;
    }
  }, 10);  // Determines how often it checks (ms)
});

</script>

<template>
  <p class="subtitle is-4 has-text-centered">Elige qué página quieres crear:</p>
  <!-- <div class="subtitle is-4">No hay soporte completo para la versión 5.00 de NMS<br>Elija qué tipo de página desea crear:</div> -->
  <div class="page-options">
    <PageLink v-for="link in links" :url="link.url" :text="link.text" :img="link.img" :imgAlt="link.imgAlt" :disabled="link.inactive" />
  </div>
  <div class="built-by is-4 has-text-centered">
    <div>Traído a usted por:</div>
  </div>
  <div class="images">
    <CivImage v-for="image in images" :img="image.img" :img-alt="image.imgAlt" :link="image.link" />
  </div>
  <div class="images"><b>Royal Space Society</b></div>
</template>

<style scoped lang="scss">
.built-by {
  margin: 2em;
  font-size: 1.25rem;
}

.images {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.5rem;
}

.page-options {
  max-width: 3400px;
  margin: 1em auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5em;
}

.boton {
  background: linear-gradient(135deg, #000000, #434343);
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(167, 166, 177, 0.5);
  transition: all 0.5s ease;
  margin-bottom: 20px;
  display: inline-block;
}

.boton:hover {
  background: linear-gradient(135deg, rgb(197, 0, 1), rgb(255, 0, 0));
  transform: scale(1.1);
}
</style>
