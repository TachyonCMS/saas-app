<template>
  <div>
    <q-item>
      <q-item-section class="text-no-wrap">
        <q-input
          v-model="colorsStore.primaryColor"
          color="$primary"
          :label="$t('primaryColor')"
          left-label
        ></q-input>
      </q-item-section>
    </q-item>

    <q-item>
      <q-item-section class="text-no-wrap">
        <q-input
          v-model="colorsStore.secondaryColor"
          color="$secondary"
          :label="$t('secondaryColor')"
          left-label
        ></q-input>
      </q-item-section>
    </q-item>

    <q-item>
      <q-item-section class="text-no-wrap">
        <q-input
          v-model="colorsStore.accentColor"
          color="$accent"
          :label="$t('accentColor')"
          left-label
        ></q-input>
      </q-item-section>
    </q-item>

    <q-item>
      <q-item-section class="text-no-wrap">
        <q-input
          v-model="colorsStore.ctaColor"
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
const colorsStore = useColorStore();

const { lighten } = colors;
const hexReg = /^#([0-9a-f]{3}){1,2}$/i;

const slt1 = '#234';

watchEffect(() => {
  console.log('Updating Secondary Colors');
  if (colorsStore.secondaryColor && hexReg.test(colorsStore.secondaryColor)) {
    console.log(colorsStore.secondaryColor);
    //slt1.value = colorsStore.secondaryColor
  }
  console.log(slt1)
});
</script>

<style lang="scss">
.bg-slt1 {
  background-color: '#454';
}
</style>
