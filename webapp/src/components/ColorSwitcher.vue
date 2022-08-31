<template>
  <div>
    <q-item>
      <q-item-section class="text-no-wrap">
        <q-input filled v-model="colorStore.primaryColor" :label="$t('primaryColor')">
          <template v-slot:append>
            <q-icon name="colorize" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-color v-model="colorStore.primaryColor"></q-color>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </q-item-section>
    </q-item>

    <q-item>
      <q-input filled v-model="colorStore.secondaryColor" :label="$t('secondaryColor')">
          <template v-slot:append>
            <q-icon name="colorize" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-color v-model="colorStore.secondaryColor"></q-color>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
    </q-item>

    <q-item>
      <q-item-section class="text-no-wrap">
        <q-input filled v-model="colorStore.accentColor" :label="$t('accentColor')">
          <template v-slot:append>
            <q-icon name="colorize" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-color v-model="colorStore.accentColor"></q-color>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </q-item-section>
    </q-item>

    <q-item>
      <q-item-section class="text-no-wrap">
        <q-input filled v-model="colorStore.ctaColor" :label="$t('ctaColor')">
          <template v-slot:append>
            <q-icon name="colorize" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-color v-model="colorStore.ctaColor"></q-color>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
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
