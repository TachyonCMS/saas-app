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
    :dark="optionsStore.darkMode"
    input-style="color: white"
  />
</template>

<script  setup lang="ts">
import { watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';

import { useOptionsStore } from '../stores/options.js';
const optionsStore = useOptionsStore();

const { locale } = useI18n({ useScope: 'global' });
locale.value = optionsStore.locale;

watchEffect(() => {
  console.log(locale)
  optionsStore.setLocale(locale.value);
});

const localeOptions = [
  { value: 'en-US', label: 'English' },
  { value: 'es-MX', label: 'Español' },
];
</script>

<style>
</style>
