<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-primary on-primary">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          {{ layoutStore.title }}
        </q-toolbar-title>
        <q-btn-dropdown dropdown-icon="mdi-cog" size="sm" class="q-px-sm">
          <q-list bordered padding>
            <q-item-label header>{{ $t('customize') }}</q-item-label>

            <q-item>
              <q-item-section class="text-no-wrap">
                <q-toggle
                  v-model="optionsStore.darkMode"
                  color="blue"
                  :label="$t('darkMode')"
                  left-label
                  size="sm"
                ></q-toggle>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section class="text-no-wrap">
                <q-input
                  v-model="optionsStore.baseColor"
                  color="$primary"
                  :label="$t('baseColor')"
                  left-label
                ></q-input>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section class="text-no-wrap">
                <q-input
                  v-model="optionsStore.secondaryColor"
                  color="$secondary"
                  :label="$t('secondaryColor')"
                  left-label
                ></q-input>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section class="text-no-wrap">
                <q-input
                  v-model="optionsStore.accentColor"
                  color="$accent"
                  :label="$t('accentColor')"
                  left-label
                ></q-input>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section class="text-no-wrap">
                <q-input
                  v-model="optionsStore.ctaColor"
                  color="$cta"
                  :label="$t('colorCTA')"
                  left-label
                ></q-input>
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
      <MainDrawer v-if="route.meta.appDrawer == 'MainDrawer'"></MainDrawer>
      <EntryDrawer v-if="route.meta.appDrawer == 'EntryDrawer'"></EntryDrawer>
    </q-drawer>

    <q-page-container>
      <router-view @notification="(event) => displayNotification(event)" />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useQuasar, setCssVar, colors } from 'quasar';

// OPTION Store, info about the visitors selected options
import { useOptionsStore } from '../stores/options';
const optionsStore = useOptionsStore();

// LAYOUT Store info about the layout
import { useLayoutStore } from '../stores/layout';
const layoutStore = useLayoutStore();
// COLOR
const { lighten } = colors;
const hexReg = /^#([0-9a-f]{3}){1,2}$/i;
watchEffect(() => {
  if (optionsStore.baseColor) {
    if (hexReg.test(optionsStore.baseColor)) {
      console.log(optionsStore.baseColor);
      setCssVar(
        'lt1',
        lighten(optionsStore.baseColor, 20),
        document.documentElement
      );
      setCssVar(
        'lt2',
        lighten(optionsStore.baseColor, 30),
        document.documentElement
      );
      setCssVar(
        'lt3',
        lighten(optionsStore.baseColor, 40),
        document.documentElement
      );
      setCssVar(
        'lt4',
        lighten(optionsStore.baseColor, 50),
        document.documentElement
      );
      setCssVar(
        'lt5',
        lighten(optionsStore.baseColor, 60),
        document.documentElement
      );
      setCssVar(
        'dk1',
        lighten(optionsStore.baseColor, -5),
        document.documentElement
      );
      setCssVar(
        'dk2',
        lighten(optionsStore.baseColor, -10),
        document.documentElement
      );
      setCssVar(
        'dk3',
        lighten(optionsStore.baseColor, -20),
        document.documentElement
      );
      setCssVar(
        'dk4',
        lighten(optionsStore.baseColor, -30),
        document.documentElement
      );
      setCssVar(
        'dk5',
        lighten(optionsStore.baseColor, -40),
        document.documentElement
      );
    }
  }

  if (optionsStore.ctaColor) {
    if (hexReg.test(optionsStore.ctaColor)) {
      console.log(optionsStore.ctaColor);
      setCssVar(
        'cta',
        lighten(optionsStore.ctaColor, 20),
        document.documentElement
      );
    }
  }


});

// LOCALIZATION
import messages from 'src/i18n';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n({ useScope: 'global' });
locale.value = optionsStore.locale;
const { t } = useI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: optionsStore.locale,
  fallbackLocale: 'en-US',
  messages,
});
import(
  /* webpackInclude: /(es|en-US)\.js$/ */
  '../../node_modules/quasar/lang/' + locale.value + '.mjs'
).then((lang) => {
  console.log(lang);
  $q.lang.set(lang.default);
});

// DARK MODE - Enable Quasar dark mode toggling
const $q = useQuasar();
$q.dark.set('auto');
// Update navbar in dark mode
watchEffect(() => {
  $q.dark.set(optionsStore.darkMode);
  if (optionsStore.darkMode) {
    setCssVar('primary', '#212121', document.documentElement);
    setCssVar('cta', '#FFA500', document.documentElement);
    setCssVar('lt1', lighten('#212121', 5), document.documentElement);
    setCssVar('lt2', lighten('#212121', 10), document.documentElement);
    setCssVar('lt3', lighten('#212121', 15), document.documentElement);
    setCssVar('lt4', lighten('#212121', 20), document.documentElement);
    setCssVar('lt5', lighten('#212121', 25), document.documentElement);
    setCssVar('dk1', lighten('#212121', -10), document.documentElement);
    setCssVar('dk2', lighten('#212121', -15), document.documentElement);
    setCssVar('dk3', lighten('#212121', -20), document.documentElement);
    setCssVar('dk4', lighten('#212121', -25), document.documentElement);
    setCssVar('dk5', lighten('#212121', -30), document.documentElement);
  } else {
    setCssVar('primary', optionsStore.baseColor, document.documentElement);
          setCssVar(
        'lt1',
        lighten(optionsStore.baseColor, 20),
        document.documentElement
      );
      setCssVar(
        'lt2',
        lighten(optionsStore.baseColor, 30),
        document.documentElement
      );
      setCssVar(
        'lt3',
        lighten(optionsStore.baseColor, 40),
        document.documentElement
      );
      setCssVar(
        'lt4',
        lighten(optionsStore.baseColor, 50),
        document.documentElement
      );
      setCssVar(
        'lt5',
        lighten(optionsStore.baseColor, 60),
        document.documentElement
      );
    setCssVar(
      'dk1',
      lighten(optionsStore.baseColor, -5),
      document.documentElement
    );
    setCssVar(
      'dk2',
      lighten(optionsStore.baseColor, -10),
      document.documentElement
    );
    setCssVar(
      'dk3',
      lighten(optionsStore.baseColor, -20),
      document.documentElement
    );
    setCssVar(
      'dk4',
      lighten(optionsStore.baseColor, -30),
      document.documentElement
    );
    setCssVar(
      'dk5',
      lighten(optionsStore.baseColor, -40),
      document.documentElement
    );
  }
});

// NOTIFICATIONS Map internal notification statuses to Quasar notify types
const notifyTypeMap = {
  error: {
    qType: 'negative',
    labelCode: 'error',
  },
  warning: {
    qType: 'warning',
    labelCode: 'warning',
  },
  info: {
    qType: 'info',
    labelCode: 'info',
  },
  positive: {
    qType: 'positive',
    labelCode: 'success',
  },
  negative: {
    qType: 'negative',
    labelCode: 'sorry',
  },
};
const displayNotification = async (notification) => {
  const msg =
    '<span class="text-h6">' +
    t(notifyTypeMap[notification.type].labelCode) +
    '</span><br />' +
    notification.message;
  $q.notify({
    message: msg,
    multiLine: true,
    position: notification.position,
    type: notifyTypeMap[notification.type].qType,
    html: true,
    persistent: true,
    actions: [{ icon: 'mdi-close', color: 'white' }],
  });
};

// DRAWER
import { useRoute } from 'vue-router';
// Potential left drawer content
import MainDrawer from './drawers/MainDrawer.vue';
import EntryDrawer from './drawers/EntryDrawer.vue';
const route = useRoute();
console.log(route.meta.appDrawer);
// Mange left drawer state
const leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

// I18N - Allow choosing an App UI language, content language MAY NOT be affected.
import LanguageSwitcher from 'components/LanguageSwitcher.vue';
</script>

<style lang="scss">
$ltx: lighten($primary, 30%);
</style>

