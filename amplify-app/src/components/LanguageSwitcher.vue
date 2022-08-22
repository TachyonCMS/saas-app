<template>
  <q-select
    v-model="locale"
    :options="localeOptions"
    label="Language"
    dense
    borderless
    emit-value
    map-options
    options-dense
    :dark="layout.darkMode"
    input-style="color: white"
  />
</template>

<script  setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useLayoutStore } from '../stores/layout-store.js';
const layout = useLayoutStore();

const { locale } = useI18n({ useScope: 'global' });

const localeOptions = [
  { value: 'en-US', label: 'English' },
  { value: 'es-MX', label: 'Español' },
];
</script>

<style>
</style>
