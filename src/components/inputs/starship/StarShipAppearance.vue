<script setup lang="ts">
import Panel from 'primevue/panel';
import type { SelectOption } from '@/types/selectInputOptions';
import { usePageDataStore } from '@/stores/pageData';
import { storeToRefs } from 'pinia';
import { computed, ref, watchEffect } from 'vue';
import InputTableItem from '@/components/InputTableItem.vue';
import SelectDropdown from '@/components/inputs/SelectDropdown.vue';
import { shipData } from '@/variables/starship/shipData';
import Explainer from '@/components/Explainer.vue';

const pageData = usePageDataStore();
const { name, type, subtype } = storeToRefs(pageData);

const isCollapsed = ref(false);
const primaryColor = ref('');
const secondaryColor = ref('');
const secParts = ref('');
const accesories = ref('');
const miscParts = ref('');

const primaryColorMapping: { [key: string]: string } = {
  Nada: '',
  Azul: 'blue',
  Cromado: 'chrome',
  Crema: 'cream',
  Verde: 'green',
  Gris: 'grey',
  Naranja: 'orange',
  Rosa: 'pink',
  Morado: 'purple',
  Rojo: 'red',
  Bronceado: 'tan',
  'Verde azulado': 'teal',
  Blanco: 'white',
  Amarillo: 'yellow',
};

const mappedprimaryColorMapping: SelectOption[] = Object.entries(primaryColorMapping).map(([label, value]) => ({
  label,
  value,
}));

const description = computed(() => {
  let desc = `${name.value} is a ${primaryColor.value} ${type.value} of the ${subtype.value} subtype.`;
  if (secondaryColor.value) {
    desc = `${name.value} is a ${primaryColor.value} ${type.value} of the ${subtype.value} subtype with ${secondaryColor.value} accents.`;
  }
  if (!primaryColor.value) {
    desc = ``;
  }
  const features = [];
  if (secParts.value) features.push(secParts.value);
  if (accesories.value) features.push(accesories.value);
  if (miscParts.value) features.push(miscParts.value);
  if (features.length > 0) {
    if (features.length === 1) {
      desc += ` It features ${features[0]}.`;
    } else {
      const lastFeature = features.pop();
      desc += ` It features ${features.join(', ')} and ${lastFeature}.`;
    }
  }
  return desc;
});

watchEffect(() => {
  pageData.appearance = description.value;
});

const typeSpecificValues = computed(() => {
  return (
    shipData[type.value] || {
      subtypes: [],
      secParts: [],
      accessories: [],
      miscParts: [],
      sections: {
        inventoryInput: [],
      },
    }
  );
});
</script>

<template>
  <Panel
    v-model:collapsed="isCollapsed"
    class="my-4"
    header="Esta sección crea una frase de apariencia predefinida, no es obligatoria."
    toggleable
  >
    <template #toggleicon>
      <span :class="`pi pi-chevron-${isCollapsed ? 'down' : 'up'}`"></span>
    </template>

    <InputTableItem>
      <template #label>
        <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
          <label>Color principal:</label>
        </div>
      </template>

      <template #input>
        <SelectDropdown
          v-model="primaryColor"
          :aria-labelledby="primaryColor"
          :options="mappedprimaryColorMapping"
        />
      </template>
    </InputTableItem>

    <InputTableItem>
      <template #label>
        <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
          <label>Color secundario:</label>
        </div>
      </template>

      <template #input>
        <SelectDropdown
          v-model="secondaryColor"
          :aria-labelledby="secondaryColor"
          :options="mappedprimaryColorMapping"
        />
      </template>
    </InputTableItem>

    <InputTableItem>
      <template #label>
        <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
          <label>Partes secundarias:</label>
          <Explainer
            tooltip="Las partes secundarias de la nave son piezas mas pequeñas que las principales."
            help-title="Piezas secundarias"
          >
            Las partes secundarias de la nave son piezas mas pequeñas que las principales.<br />Consulta las
            convenciones de nomenclatura específicas para tu tipo de nave:
            <div class="dialog-center">
              <ul class="dialog-list">
                <li>
                  <a
                    href="https://static.wikia.nocookie.net/nomanssky_gamepedia/images/c/c7/NmsStarship_FighterParts2.jpg"
                    >Combatiente</a
                  >
                </li>
                <li>
                  <a href="https://static.wikia.nocookie.net/nomanssky_gamepedia/images/2/2c/Explorer-parts-names.png"
                    >Exploradora</a
                  >
                </li>
                <li>
                  <a
                    href="https://static.wikia.nocookie.net/nomanssky_gamepedia/images/c/c1/NmsStarship_HaulerCockpits.png"
                    >Transportista</a
                  >
                </li>
                <li>
                  <a href="https://static.wikia.nocookie.net/nomanssky_gamepedia/images/e/e4/Shuttle_Big_parts.png"
                    >Transbordadora</a
                  >
                </li>
                <li>
                  <a href="https://static.wikia.nocookie.net/nomanssky_gamepedia/images/6/6e/SolarWings.png">Solar</a>
                </li>
                <li><a href="https://i.redd.it/8iwt7rmcg3d61.png">Living Ship</a></li>
                <li>
                  <a
                    href="https://static.wikia.nocookie.net/nomanssky_gamepedia/images/4/40/Freighter_Bridges.png"
                    data-wiki
                    >Carguero</a
                  >
                </li>
              </ul>
            </div>
          </Explainer>
        </div>
      </template>

      <template #input>
        <SelectDropdown
          v-model="secParts"
          :aria-labelledby="secParts"
          :options="typeSpecificValues.secParts"
        />
      </template>
    </InputTableItem>

    <InputTableItem>
      <template #label>
        <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
          <label>Accesorios:</label>
          <Explainer
            tooltip="Accesorios de la nave."
            help-title="Accesorios de la nave"
          >
            Accesorios de la nave.<br />Consulta las convenciones de nomenclatura específicas para tu tipo de nave:
            <div class="dialog-center">
              <ul class="dialog-list">
                <li>
                  <a
                    href="https://static.wikia.nocookie.net/nomanssky_gamepedia/images/5/50/Fighter_naming_conventions.jpg"
                    >Combatiente</a
                  >
                </li>
                <li>
                  <a href="https://static.wikia.nocookie.net/nomanssky_gamepedia/images/2/2c/Explorer-parts-names.png"
                    >Exploradora</a
                  >
                </li>
                <li>
                  <a
                    href="https://static.wikia.nocookie.net/nomanssky_gamepedia/images/d/da/NmsStarship_HaulerTails.png"
                    >Transportista</a
                  >
                </li>
                <li>
                  <a href="https://static.wikia.nocookie.net/nomanssky_gamepedia/images/2/20/Shuttle_Attachments.png"
                    >Transbordadora</a
                  >
                </li>
                <li>
                  <a href="https://static.wikia.nocookie.net/nomanssky_gamepedia/images/d/d6/SolarSails.png">Solar</a>
                </li>
                <li><a href="https://i.redd.it/8iwt7rmcg3d61.png">Living Ship</a></li>
                <li>
                  <a
                    href="https://static.wikia.nocookie.net/nomanssky_gamepedia/images/5/50/Freighter_Accessories.png"
                    data-wiki
                    >Carguero</a
                  >
                </li>
              </ul>
            </div>
          </Explainer>
        </div>
      </template>

      <template #input>
        <SelectDropdown
          v-model="accesories"
          :aria-labelledby="accesories"
          :options="typeSpecificValues.accessories"
        />
      </template>
    </InputTableItem>

    <InputTableItem>
      <template #label>
        <div class="is-flex is-justify-content-space-between is-align-items-center full-width">
          <label>Parte miscelánea:</label>
        </div>
      </template>

      <template #input>
        <SelectDropdown
          v-model="miscParts"
          :aria-labelledby="miscParts"
          :options="typeSpecificValues.miscParts"
        />
      </template>
    </InputTableItem>
  </Panel>
</template>

<style scoped>
.census-row :deep(.column) {
  padding-block-end: 0;
}
</style>
