<script setup lang="ts">
import { watch, nextTick, defineAsyncComponent, type Component, onMounted } from 'vue';
import Home from './pages/Home.vue';
import Flora from './pages/Flora.vue';
import Mineral from './pages/Mineral.vue';
import { usePageDataStore, useStaticPageDataStore } from './stores/pageData';
import { storeToRefs } from 'pinia';
import { useMarker } from './composables/useMarker';
import Fauna from './pages/Fauna.vue';
import { getRelease } from './common';

const staticPageData = useStaticPageDataStore();
const { route: currentRoute } = storeToRefs(staticPageData);

const pageData = usePageDataStore();
const { pageName, glyphs, release } = storeToRefs(pageData);
onMounted(async () => {
  const currentRelease = await getRelease();
  release.value = currentRelease;
});

// I have no idea why I have to use nextTick() here. It's just one character behind otherwise apparently for some reason
watch([pageName, glyphs], () => nextTick(() => useMarker()), { immediate: true });

const router: { [key: string]: Component } = {
  flora: Flora,
  mineral: Mineral,
  fauna: Fauna,
};
</script>

<template>
  <component :is="router[currentRoute] ?? Home"></component>
</template>
