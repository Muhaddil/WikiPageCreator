<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import Button from 'primevue/button';
import { computed } from 'vue';

const isDark = useDark({ valueDark: 'theme-dark', valueLight: 'theme-light' });
const toggleDark = useToggle(isDark);

const icon = computed(() => (isDark.value ? 'pi-sun' : 'pi-moon'));
</script>

<template>
  <Button
    :icon="`pi ${icon}`"
    aria-label="Cambiar de Tema"
    title="Cambiar de Tema"
    @click="toggleDark()"
    class="theme-toggle-button"
  />
</template>
