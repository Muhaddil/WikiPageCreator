<template>
  <a
    :href="url"
    :title="title"
    class="button"
    >{{ text }}</a
  >
</template>

<script setup lang="ts">
import type { PageLinkProps } from '@/types/objects';
import { computed } from 'vue';

const props = defineProps<PageLinkProps>();

const title = computed(() => {
  const vowels = 'aeiou';
  const firstLetter = props.text.slice(0, 1).toLowerCase();
  return `Crea ${vowels.includes(firstLetter) ? 'un' : 'una'} página de ${props.text}`;
});
</script>

<style scoped lang="scss">
a.button {
  background-color: var(--boton-backgoundcolor);
  color: var(--boton-fontcolor);
  font-weight: bold;
  padding: 15px 30px;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(167, 166, 177, 0.5);
  transition: all 0.5s ease;
  margin-bottom: -15px;
  display: flex;
  font-size: 1.2em;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgb(197, 0, 1);
    transform: scale(1.1);
  }
}
</style>

<!-- a.button {
  background-color: var(--boton-backgoundcolor);
  color: var(--boton-fontcolor);
  font-weight: bold;
  padding: 15px 30px;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(167, 166, 177, 0.5);
  transition: all 0.5s ease;
  margin-bottom: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;

  &:hover {
    background-color: rgb(197, 0, 1);
    transform: scale(1.2);
  }
} -->