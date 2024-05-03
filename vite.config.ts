/// <reference types="vitest" />
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/RSSWikiPageCreator/',
  plugins: [vue()],
  test: {
    browser: {
      enabled: true,
      headless: true,
      provider: 'playwright',
      name: 'chromium',
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        base: resolve(__dirname, 'base.html'),
        basenocensus: resolve(__dirname, 'basenocensus.html'),
        basepruebas: resolve(__dirname, 'basepruebas.html'),
        biofrig: resolve(__dirname, 'biofrig.html'),
        derelict: resolve(__dirname, 'derelict.html'),
        fauna: resolve(__dirname, 'fauna.html'),
        flora: resolve(__dirname, 'flora.html'),
        mineral: resolve(__dirname, 'mineral.html'),
        moon: resolve(__dirname, 'moon.html'),
        multitool: resolve(__dirname, 'multitool.html'),
        planet: resolve(__dirname, 'planet.html'),
        racetrack: resolve(__dirname, 'racetrack.html'),
        sandworm: resolve(__dirname, 'sandworm.html'),
        settlement: resolve(__dirname, 'settlement.html'),
        starship: resolve(__dirname, 'starship.html'),
        system: resolve(__dirname, 'system.html'),
        glyphgeneratorV2: resolve(__dirname, 'glyphgeneratorV2.html'),
        test1: resolve(__dirname, 'test1.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
