<template>
  <div>
    <q-item>
      <q-item-section class="text-no-wrap">
        <q-input
          v-model="colorStore.primaryColor"
          color="$primary"
          :label="$t('primaryColor')"
          left-label
        ></q-input>
      </q-item-section>
    </q-item>

    <q-item>
      <q-item-section class="text-no-wrap">
        <q-input
          v-model="colorStore.secondaryColor"
          color="$secondary"
          :label="$t('secondaryColor')"
          left-label
        ></q-input>
      </q-item-section>
    </q-item>

    <q-item>
      <q-item-section class="text-no-wrap">
        <q-input
          v-model="colorStore.accentColor"
          color="$accent"
          :label="$t('accentColor')"
          left-label
        ></q-input>
      </q-item-section>
    </q-item>

    <q-item>
      <q-item-section class="text-no-wrap">
        <q-input
          v-model="colorStore.ctaColor"
          color="$cta"
          :label="$t('colorCTA')"
          left-label
        ></q-input>
      </q-item-section>
    </q-item>
  </div>
</template>

<script  setup lang="ts">
import { ref, watchEffect } from 'vue';

import { setCssVar, colors } from 'quasar';

import { useColorStore } from '../stores/color.js';
const colorStore = useColorStore();


</script>

<style lang="scss">

</style>
