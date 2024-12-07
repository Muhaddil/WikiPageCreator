<script setup lang="ts">
import Card from 'primevue/card';
import Fluid from 'primevue/fluid';
import { usePageDataStore } from '@/stores/pageData';
import { ref, onMounted, onUnmounted } from 'vue';

const pageData = usePageDataStore();
const outputRef = ref<HTMLElement | null>(null);
let observer: MutationObserver | null = null;

onMounted(() => {
  if (outputRef.value) {
    observer = new MutationObserver(() => {
      pageData.setOutputContent(outputRef.value?.innerText || '');
    });

    observer.observe(outputRef.value, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    pageData.setOutputContent(outputRef.value.innerText || '');
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
});
</script>

<template>
  <div class="columns is-tablet is-gap-2 mx-2">
    <Card class="column is-full-mobile p-0">
      <template #content>
        <Fluid>
          <slot name="input"></slot>
        </Fluid>
      </template>
    </Card>

    <Card class="column is-full-mobile p-0 is-family-monospace">
      <template #content>
        <Fluid>
          <div ref="outputRef">
            <slot name="output"></slot>
          </div>
        </Fluid>
      </template>
    </Card>
  </div>

  <!--This is for extra content like album entry or category modules-->
  <slot></slot>
</template>
