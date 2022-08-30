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
    :dark="colorsStore.darkMode"
    input-style="color: white"
  />
</template>

<script  setup lang="ts">
import { watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';

// Quasar language support
import { useQuasar } from 'quasar';
const $q = useQuasar();
//import languages from 'quasar/lang/index.json';

import { useOptionsStore } from '../stores/options.js';
const colorsStore = useOptionsStore();

const { locale } = useI18n({ useScope: 'global' });
locale.value = colorsStore.locale;

watchEffect(() => {
  console.log(locale)
  colorsStore.setLocale(locale.value);
  import(
    /* webpackInclude: /(es|en-US)\.js$/ */
    '../../node_modules/quasar/lang/' + locale.value +'.mjs'
    ).then(lang => {
      console.log(lang)
      $q.lang.set(lang.default)
    })
});

const localeOptions = [
  { value: 'en-US', label: 'English' },
  { value: 'es', label: 'Español' },
];
</script>

<style>
</style>
