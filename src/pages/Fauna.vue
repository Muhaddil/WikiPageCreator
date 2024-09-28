<script setup lang="ts">
/* THIS PAGE IS NOT WORKING CORRECTLY, IT'S A TEST, IT HAS ERRORS IT WILL BE FIXED SOON IF REQUIRED */
import { addStaticPageData, forceDatalistComponent } from '@/common';
import Actions from '@/components/actions/Actions.vue';
import FaunaInfobox from '@/components/infoboxes/FaunaInfobox.vue';
import DiscovererInputs from '@/components/inputs/DiscovererInputs.vue';
import GlyphInput from '@/components/inputs/GlyphInput.vue';
import InfoboxImageInput from '@/components/inputs/InfoboxImageInput.vue';
import ResearchteamInput from '@/components/inputs/ResearchteamInput.vue';
import SimpleInput from '@/components/inputs/SimpleInput.vue';
import creatureBehavioursInput from '@/components/inputs/creatureBehavioursInput.vue';
import creatureDietsInput from '@/components/inputs/creatureDietsInput.vue';
import creatureNotesInput from '@/components/inputs/creatureNotesInput.vue';
import creatureDietDatalist from '@/datalists/creatureDietDatalists';
import creatureNotesDatalist from '@/datalists/creatureDatalists2';
import Explanation from '@/components/structure/Explanation.vue';
import ExplanationError from '@/components/structure/ExplanationError.vue';
import InputColumn from '@/components/structure/InputColumn.vue';
import InputRow from '@/components/structure/InputRow.vue';
import OutputColumn from '@/components/structure/OutputColumn.vue';
import Subgrid from '@/components/structure/Subgrid.vue';
import WikiTemplate from '@/components/structure/WikiTemplate.vue';
import { useMarker } from '@/composables/useMarker';
import creatureBehaviourDatalist from '@/datalists/creatureDatalists3';
import { useDataValidationStore } from '@/stores/dataValidation';
import { usePageDataStore, useStaticPageDataStore } from '@/stores/pageData';
import { watchDebounced } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { onMounted, ref, watchEffect, watch, computed } from 'vue';
import creatureData from '@/miscLogic/creatureData';

const genera = ref<string[]>([]);
const selectedGenus = ref<string>('');
const produces = ref<string[]>([]);

function updateGeneraList() {
  const currentEcosystem = ecosystem.value;
  genera.value = Object.keys(creatureData.ecosystems[currentEcosystem] || {});
}

const staticPageData = useStaticPageDataStore();
const { fullArticleElement } = storeToRefs(staticPageData);

const dataValidationStore = useDataValidationStore();

const wikiText = ref<HTMLDivElement | null>(null);

onMounted(() => {
  fullArticleElement.value = wikiText.value;
  // TODO: gallery should be integrated natively, not as separate Vue app
  addStaticPageData('galleryArray', ['', 'Scanner view', 'Discovery Menu']);
  addStaticPageData(
    'galleryExplanationExternal',
    `
    Hay un orden preferido de imágenes de la galería:
	<div class='dialog-center'>
		<ol class='dialog-list'>
			<li>Vista de escáner</li>
			<li>Menú de descubrimiento</li>
		</ol>
 	</div>`
  );
  import('../startup/gallery');
});

const pageData = usePageDataStore();
const {
  release,
  name,
  galaxy,
  hub,
  orgName,
  image,
  weight,
  height,
  weight2,
  height2,
  discovered,
  discoveredlink,
  system,
  planet,
  moon,
  glyphs,
  hemisphere,
  activity,
  rarity,
  type,
  behaviour,
  age,
  gender,
  gender2,
  roots,
  region,
  nutrients,
  notes,
  elements,
  polymorphic,
  discDate,
  docBy,
  researchteam,
  appearance,
  genus,
  ecosystem,
  diet,
  sanitisedStrings,
  mode,
  // sanitisedName: creatureName,
  // discoveredName,
  // discoveredlinkName,
  // systemName,
  // planetName,
  // moonName,
  // originalName,
  docBySentence,
} = storeToRefs(pageData);

watch(ecosystem, updateGeneraList);

watch(selectedGenus, (newGenus) => {
  if (newGenus && ecosystem.value) {
    produces.value = creatureData.ecosystems[ecosystem.value][newGenus]?.produces || [];
  }
});

updateGeneraList();

const isBehaviourInvalid = ref('');
const isDietInvalid = ref('');
const isNotesInvalid = ref('');

watchDebounced(
  diet,
  () => (isDietInvalid.value = forceDatalistComponent(diet.value, Object.keys(creatureDietDatalist))),
  {
    debounce: 500,
  }
);

watchDebounced(
  behaviour,
  () => (isBehaviourInvalid.value = forceDatalistComponent(behaviour.value, Object.keys(creatureBehaviourDatalist))),
  {
    debounce: 500,
  }
);

watchDebounced(
  notes,
  () => (isNotesInvalid.value = forceDatalistComponent(notes.value, Object.keys(creatureNotesDatalist))),
  {
    debounce: 500,
  }
);

watchEffect(() => {
  if (elements.value[0] === elements.value[1]) elements.value[1] = '';
});

const errorMessage = ref('');
const openErrorModal = ref(false);

function markCopy() {
  const { isValidData, message } = useMarker();
  errorMessage.value = message.value;
  openErrorModal.value = !isValidData.value;
}

const isSecondGenderVisible = computed(() => {
  return gender2.value !== "- None" && gender2.value !== gender.value;
});

const combinedWeight = computed(() => {
  if (weight.value && weight2.value && weight.value !== weight2.value) {
    return `${weight.value} - ${weight2.value}`;
  }
  return weight.value || weight2.value || '';
});

const combinedHeight = computed(() => {
  if (height.value && height2.value && height.value !== height2.value) {
    return `${height.value} - ${height2.value}`;
  }
  return height.value || height2.value || '';
});
</script>

<template>
  <InputColumn>
    <form
      class="table"
      @submit.prevent
    >
      <!-- <ReleaseInput /> -->
      <SimpleInput
        label="Nombre de la criatura:"
        identifier="nameInput"
        v-model="name"
        img="creature/creatureName"
      >
        Introduzca exactamente como se ve en el juego. Cuidado con 0 (cero) y O (o).
        <template #heading>Nombre de la Planta</template>
        <template #content>Introduzca exactamente como se ve en el juego. Cuidado con 0 (cero) y O (o).</template>
      </SimpleInput>
      <!--  <SimpleInput label="Nombre del Hub:" identifier="hubInput" v-model="hub" />-->
      <SimpleInput
        label="Nombre original antes de registrar (si está disponible):"
        identifier="orgNameInput"
        v-model="orgName"
      />
      <!-- <SimpleInput
        label="Nombre de la Galaxia:"
        identifier="galaxyInput"
        v-model="galaxy"
      />
      <SimpleInput
        label="Nombre de la region:"
        identifier="regionInput"
        v-model="region"
      /> -->
      <InfoboxImageInput />
      <SimpleInput
        label="Nombre del sistema:"
        identifier="systemInput"
        v-model="system"
      />
      <SimpleInput
        label="Nombre del planeta:"
        identifier="planetInput"
        v-model="planet"
      >
        Nombre del planeta O el planeta rodeado por la luna donde se puede encontrar la planta.
      </SimpleInput>
      <SimpleInput
        label="Nombre de la luna (si la planta está en la luna):"
        identifier="moonInput"
        v-model="moon"
      >
        Si la planta está ubicada en una luna. Déjelo en blanco si la planta está en un planeta.
      </SimpleInput>
      <GlyphInput />
      <InputRow>
      <template #label>
        <label for="ecosystem">Ecosistema:</label>
        <Explanation img="creature/creatureEcosystem">
          Seleccione un ecosistema para filtrar los géneros de criaturas.
          <template #heading>Ecosistema</template>
          <template #content>
            Seleccione un ecosistema para filtrar los géneros.
          </template>
        </Explanation>
      </template>
      <template #input>
        <select v-model="ecosystem" id="ecosystem">
          <option value="Ground">Terrestre</option>
          <option value="Flying">Voladora</option>
          <option value="Underwater">Submarina</option>
          <option value="Underground">Subterránea</option>
        </select>
      </template>
    </InputRow>
    <InputRow>
        <p>La siguiente información se puede encontrar en el menú de descubrimiento de criaturas.</p>
      </InputRow>
      <InputRow>
        <template #label>
          <label for="hemisphere">Hemisferio:</label>
          <Explanation img="creature/creatureHemisphere">
            Encontrado en el menú de descubrimiento de criaturas.
            <template #heading>Hemisferio</template>
            <template #content>
              Encontrado en el menú de descubrimiento de criaturas.
              <br />
              Si no se proporciona ningún hemisferio, deje la entrada vacía.
            </template>
          </Explanation>
        </template>
        <template #input>
          <select
            v-model="hemisphere"
            id="hemisphere"
          >
            <option value=""></option>
            <option value="North">Norte</option>
            <option value="South">Sur</option>
          </select>
        </template>
      </InputRow>
      <InputRow>
        <template #label>
          <label for="rarity">Rareza:</label>
          <Explanation img="creature/creatureRarity">
            Encontrado en el menú de descubrimiento de criaturas.
            <template #heading>Hemisferio</template>
            <template #content>
              Encontrado en el menú de descubrimiento de criaturas.
              <br />
              Si no se proporciona ningún hemisferio, deje la entrada vacía.
            </template>
          </Explanation>
        </template>
        <template #input>
          <select
            v-model="rarity"
            id="rarity"
          >
            <option value="Common">Común</option>
            <option value="Uncommon">No común</option>
            <option value="Rare">Raro</option>
          </select>
        </template>
      </InputRow>
      <InputRow>
      <template #label>
        <label for="genus">Género:</label>
        <Explanation>
          Consulte la lista de géneros basada en el ecosistema seleccionado.
          <template #heading>Géneros</template>
          <template #content>
            Seleccione un género disponible basado en el ecosistema seleccionado.
          </template>
        </Explanation>
      </template>
      <template #input>
        <select v-model="selectedGenus" id="genusInput">
          <option v-for="genus in genera" :key="genus" :value="genus">{{ genus }}</option>
        </select>
      </template>
    </InputRow>
      <InputRow>
        <template #label>
          <label for="activity">Actividad:</label>
          <Explanation img="creature/creatureActivity">
            Encontrado en el menú de descubrimiento de criaturas.
            <template #heading>Actividad</template>
            <template #content> Encontrado en el menú de descubrimiento de criaturas. </template>
          </Explanation>
        </template>
        <template #input>
          <select
            v-model="activity"
            id="activity"
          >
            <option value="Always Active">Siempre activa</option>
            <option value="Diurnal">Diurna</option>
            <option value="Nocturnal">Nocturna</option>
            <option value="Mostly Diurnal">Generalmente Diurna</option>
            <option value="Mostly Nocturnal">Generalmente Nocturna</option>
          </select>
        </template>
      </InputRow>
      <div class="tableHeader text">
        <p>La siguiente información se puede encontrar en el escaneo de criaturas.</p>
      </div>
      <InputRow>
        <template #label>
          <label for="gender">Genero:</label>
          <Explanation img="creature/creatureGender">
            Encontrado en el menú de descubrimiento de criaturas.
            <template #heading>Género</template>
            <template #content> Encontrado en el menú de descubrimiento de criaturas. </template>
          </Explanation>
        </template>
        <template #input>
          <select
            v-model="gender"
            id="gender1"
          >
            <option value="Asynchronous">Asíncrono</option>
            <option value="Circular">Circular</option>
            <option value="Electronic">Electrónico</option>
            <option value="Mutable">Mutable</option>
            <option value="Non-boolean">No booleano</option>
            <option value="Non-Euclidean">No euclidiano</option>
            <option value="Uninitialised">No inicializado</option>
            <option value="Unmeasurable">Inmensurable</option>
            <option value="Virtual">Virtual</option>
            <option value="Alpha">Alfa</option>
            <option value="Asymmetric">Asimétrico</option>
            <option value="Asymptotic">Asintótico</option>
            <option value="Exotic">Exótico</option>
            <option value="Female">Hembra</option>
            <option value="Non-uniform">No uniforme</option>
            <option value="None">Ninguno</option>
            <option value="Orthogonal">Ortogonal</option>
            <option value="Prime">Principal</option>
            <option value="Radical">Radical</option>
            <option value="Rational">Racional</option>
            <option value="Symmetric">Simétrico</option>
            <option value="Unknown">Desconocido</option>
            <option value="Vectorised">Vectorizado</option>
          </select>
        </template>
      </InputRow>
      <InputRow>
        <template #label>
          <label for="gender">Segundo Género:</label>
          <Explanation img="">
            Sólo se aplica a ciertos géneros. Se puede encontrar en el escaneo de criaturas.
            <template #heading>Segundo Género</template>
            <template #content>
              Algunos géneros tienen dos géneros, mientras que otros tienen un solo género.<br />
              Las aves, los peces y la fauna rara/anómala, por ejemplo, tienen un solo género.<br />
              Pueden aparecer como dos géneros, pero tendrán exactamente la misma apariencia.
            </template>
          </Explanation>
        </template>
        <template #input>
          <select
            v-model="gender2"
            id="gender2"
          >
            <option value=""></option>
            <option value="- Asynchronous">Asíncrono</option>
            <option value="- Circular">Circular</option>
            <option value="- Electronic">isDietInvalidElectrónico</option>
            <option value="- Mutable">Mutable</option>
            <option value="- Non-boolean">No booleano</option>
            <option value="- Non-Euclidean">No euclidiano</option>
            <option value="- Uninitialised">No inicializado</option>
            <option value="- Unmeasurable">Inmensurable</option>
            <option value="- Virtual">Virtual</option>
            <option value="- Alpha">Alfa</option>
            <option value="- Asymmetric">Asimétrico</option>
            <option value="- Asymptotic">Asintótico</option>
            <option value="- Exotic">Exótico</option>
            <option value="- Female">Hembra</option>
            <option value="- Non-uniform">No uniforme</option>
            <option value="- Orthogonal">Ortogonal</option>
            <option value="- Prime">Principal</option>
            <option value="- Radical">Radical</option>
            <option value="- Rational">Racional</option>
            <option value="- Symmetric">Simétrico</option>
            <option value="- Unknown">Desconocido</option>
            <option value="- Vectorised">Vectorizado</option>
          </select>
        </template>
      </InputRow>
      <creatureBehavioursInput :error="isBehaviourInvalid"/>
      <creatureDietsInput :error="isDietInvalid" />
      <SimpleInput
        v-model="weight"
        identifier="weight"
        label="Peso en KG:"
        aria-placeholder="1.5"
        maxlength="5"
      >
        <Explanation img="creature/creatureWeight">
          Encontrado en el escaneo de criaturas. No se necesitan "kg".
          <template #heading>Peso</template>
          <template #content> Encontrado en el escaneo de criaturas. No se necesitan "kg". </template>
        </Explanation>
      </SimpleInput>

      <SimpleInput
        v-if="isSecondGenderVisible"
        v-model="weight2"
        identifier="weight2"
        label="Peso del género 2: (si hay)"
        aria-placeholder="1.5"
        maxlength="5"
      >
        <Explanation img="creature/creatureWeight">
          Encontrado en el escaneo de criaturas. No se necesitan "kg".
        </Explanation>
      </SimpleInput>

      <SimpleInput
        v-model="height"
        identifier="height"
        label="Altura en M:"
        aria-placeholder="1.5"
        maxlength="3"
      >
        <Explanation img="creature/creatureHeight">
          Encontrado en el escaneo de criaturas. No se necesitan "m".
        </Explanation>
      </SimpleInput>

      <SimpleInput
        v-if="isSecondGenderVisible"
        v-model="height2"
        identifier="height2"
        aria-placeholder="1.5"
        label="Altura del género 2: (si hay)"
        maxlength="3"
      >
        <Explanation img="creature/creatureHeight">
          Encontrado en el escaneo de criaturas. No se necesitan "m".
        </Explanation>
      </SimpleInput>
      <creatureNotesInput :error="isNotesInvalid"/>
      <Subgrid>
        <DiscovererInputs />
        <SimpleInput
          label="Nombre del documentador si no es el descubridor:"
          identifier="docBy"
          v-model="docBy"
        />
        <ResearchteamInput />
      </Subgrid>
      <InputRow>
        <label for="appearance">Apariencia:</label>
        <textarea
          v-model="appearance"
          id="appearance"
          placeholder="Esta flora es una <size> <colour> <type>."
        ></textarea>
      </InputRow>
    </form>

    <div id="galleryInput"></div>
    <div
      id="galleryItems"
      class="gallery-items-wrapper"
    ></div>

    <Actions />
  </InputColumn>

  <ExplanationError
    v-model:open="openErrorModal"
    :error-message="errorMessage"
  />

  <OutputColumn @mousedown="markCopy">
    <div
      ref="wikiText"
      class="wikiText"
      id="fullArticle"
      @mouseup="dataValidationStore.getSelectedText"
      @touchend="dataValidationStore.getSelectedText"
    >
      <div>
        <WikiTemplate template-name="Version">{{ release }}</WikiTemplate>
      </div>
      <FaunaInfobox
        :creatureName="sanitisedStrings.name"
        :image="image"
        :hub="hub"
        :galaxy="galaxy"
        :region="region"
        :system-name="sanitisedStrings.system"
        :planet-name="sanitisedStrings.planet"
        :moon-name="sanitisedStrings.moon"
        :type="type"
        :glyphs="glyphs"
        :behaviours="behaviour"
        :polymorphic="polymorphic"
        :age="age"
        :gender="gender"
        :gender2="gender2"
        :roots="roots"
        :nutrients="nutrients"
        :notes="notes"
        :mode="mode"
        :rarity="rarity"
        :diet="diet"
        :ecosystem="ecosystem"
        :activity="activity"
        :weight="combinedWeight"
        :height="combinedHeight"
        :produces="produces.join('')"
        :genus="selectedGenus"
        :hemisphere="hemisphere"
        :elem-primary="elements[0]"
        :elem-secondary="elements[1]"
        :disc-date="discDate.replaceAll('-', '/')"
        :discovered-name="sanitisedStrings.discovered"
        :discoveredlink-name="sanitisedStrings.discoveredlink"
        :researchteam="researchteam"
        :release="release"
      />
      <div>'''{{ sanitisedStrings.name }}''' is a species of flora.</div>
      <br />

      <div>==Summary==</div>
      <div>'''{{ sanitisedStrings.name }}''' is a [[creature]], a member of the {{ genus }} [[genus]].</div>
      <br />
      <div>==Appearance==</div>
      {{ appearance }}
      <br />
      <div>==Discovery Menu==</div>
      <div>'''Additional Observations''': {{ notes }}</div>
      <br />
      <div>==Alias Names==</div>
      <div v-if="orgName">
        <WikiTemplate template-name="aliasc">text=Original|name={{ sanitisedStrings.orgName }}</WikiTemplate>
      </div>
      <div>
        <WikiTemplate template-name="aliasc">text=Current|name={{ sanitisedStrings.name }}</WikiTemplate>
      </div>
      <br />

      <div>==Location==</div>
      <div>
        It can be found on the
        <span v-if="moon">[[moon]] [[{{ sanitisedStrings.moon }}]] of the</span> [[planet]] [[{{ sanitisedStrings.planet }}]] in the [[{{
          sanitisedStrings.system
        }}]] [[star system]].
      </div>
      <div>
        <WikiTemplate template-name="CoordGlyphConvert">{{ glyphs }}</WikiTemplate>
      </div>
      <br />
      <div>==Additional Information==</div>
      <div v-if="docBy && docBy !== discoveredlink && docBy !== discovered">Documented by {{ docBySentence }}</div>
      <br />

      <div id="gallery"></div>
    </div>
  </OutputColumn>
</template>
