<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          {{ layout.title }}
        </q-toolbar-title>

        <q-btn-dropdown dropdown-icon="mdi-cog">
          <q-list bordered padding>
            <q-item-label header>{{ $t('customize') }}</q-item-label>

            <q-item>
              <q-item-section class="text-no-wrap">
                <q-toggle v-model="layout.darkMode" color="black" :label="$t('darkMode')" left-label size="sm"></q-toggle>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section class="text-no-wrap">
                <LanguageSwitcher></LanguageSwitcher>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <MainDrawer></MainDrawer>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useQuasar, setCssVar } from 'quasar';

// Store info about the visitors layout
import { useLayoutStore } from '../stores/layout-store';
const layout = useLayoutStore();

// Enable Quasar dark mode toggling
const $q = useQuasar();
console.log($q.dark.isActive); // true, false
$q.dark.set('auto');
// Update navbar in dark mode
watchEffect(() => {
  $q.dark.set(layout.darkMode);
  if (layout.darkMode) {
    setCssVar('primary', '	#383838', document.documentElement);
  } else {
    setCssVar('primary', '#33F', document.documentElement);
  }
});

// Potential left drawer content
import MainDrawer from './drawers/MainDrawer.vue';

// Allow choosing an App UI language, content language may not be affected.
import LanguageSwitcher from 'components/LanguageSwitcher.vue';

// Mange left drawer state
const leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
