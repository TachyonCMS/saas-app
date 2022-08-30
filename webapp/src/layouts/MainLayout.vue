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
                  v-model="colorsStore.darkMode"
                  color="blue"
                  :label="$t('darkMode')"
                  left-label
                  size="sm"
                ></q-toggle>
              </q-item-section>
            </q-item>

            <template v-if="enableColorSwitcher">
              <ColorSwitcher></ColorSwitcher>
            </template>

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
import { ref, watchEffect, computed } from 'vue';
import { useQuasar, setCssVar, colors } from 'quasar';

// COLORS Store, info about the visitors selected options
import { useColorsStore } from '../stores/colors';
const colorsStore = useColorsStore();

// LOCALIZATION Store, info about the visitors selected options
import { useLocalizationStore } from '../stores/localization';
const localizationStore = useLocalizationStore();

// LAYOUT Store info about the layout
import { useLayoutStore } from '../stores/layout';
const layoutStore = useLayoutStore();

// COLOR
const enableColorSwitcher = ref(true);
const { lighten } = colors;
const hexReg = /^#([0-9a-f]{3}){1,2}$/i;
watchEffect(() => {
  console.log('Updating Primary Colors');
  if (colorsStore.primaryColor) {
    if (hexReg.test(colorsStore.primaryColor)) {
      console.log(colorsStore.primaryColor);
      setCssVar(
        'lt1',
        lighten(colorsStore.primaryColor, 20),
        document.documentElement
      );
      setCssVar(
        'lt2',
        lighten(colorsStore.primaryColor, 30),
        document.documentElement
      );
      setCssVar(
        'lt3',
        lighten(colorsStore.primaryColor, 40),
        document.documentElement
      );
      setCssVar(
        'lt4',
        lighten(colorsStore.primaryColor, 50),
        document.documentElement
      );
      setCssVar(
        'lt5',
        lighten(colorsStore.primaryColor, 60),
        document.documentElement
      );
      setCssVar(
        'dk1',
        lighten(colorsStore.primaryColor, -5),
        document.documentElement
      );
      setCssVar(
        'dk2',
        lighten(colorsStore.primaryColor, -10),
        document.documentElement
      );
      setCssVar(
        'dk3',
        lighten(colorsStore.primaryColor, -20),
        document.documentElement
      );
      setCssVar(
        'dk4',
        lighten(colorsStore.primaryColor, -30),
        document.documentElement
      );
      setCssVar(
        'dk5',
        lighten(colorsStore.primaryColor, -40),
        document.documentElement
      );
    }
  }

  if (colorsStore.ctaColor) {
    if (hexReg.test(colorsStore.ctaColor)) {
      console.log(colorsStore.ctaColor);
      setCssVar(
        'cta',
        lighten(colorsStore.ctaColor, 20),
        document.documentElement
      );
    }
  }
});

watchEffect(() => {
  console.log('Updating CTA Color');
  if (colorsStore.ctaColor) {
    if (hexReg.test(colorsStore.ctaColor)) {
      console.log(colorsStore.ctaColor);
      setCssVar(
        'clt1',
        lighten(colorsStore.ctaColor, 20),
        document.documentElement
      );
    }
  }
});

// LOCALIZATION
import messages from 'src/i18n';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n({ useScope: 'global' });
locale.value = localizationStore.locale;
const { t } = useI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: colorsStore.locale,
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
  $q.dark.set(colorsStore.darkMode);
  if (colorsStore.darkMode) {
    console.log('Updating colors');
    setCssVar('cta', '#FFA500', document.documentElement);
    setCssVar('primary', '#282828', document.documentElement);
    setCssVar('lt1', '#383838', document.documentElement);
    setCssVar('lt2', '#484848', document.documentElement);
    setCssVar('lt3', '#505050', document.documentElement);
    setCssVar('lt4', '#606060', document.documentElement);
    setCssVar('lt5', '#686868', document.documentElement);
    setCssVar('dk1', '#202020', document.documentElement);
    setCssVar('dk2', '#181818', document.documentElement);
    setCssVar('dk3', '#101010', document.documentElement);
    setCssVar('dk4', '#080808', document.documentElement);
    setCssVar('dk5', '#000000', document.documentElement);
    setCssVar('secondary', '#888888', document.documentElement);
    setCssVar('slt1', '#909090', document.documentElement);
    setCssVar('slt2', '#A0A0A0', document.documentElement);
    setCssVar('slt3', '#A9A9A9', document.documentElement);
    setCssVar('slt4', '#B8B8B8', document.documentElement);
    setCssVar('slt5', '#C0C0C0', document.documentElement);
    setCssVar('sdk1', '#808080', document.documentElement);
    setCssVar('sdk2', '#787878', document.documentElement);
    setCssVar('sdk3', '#707070', document.documentElement);
    setCssVar('sdk4', '#787878', document.documentElement);
    setCssVar('sdk5', '#696969', document.documentElement);
  } else {
    setCssVar('primary', colorsStore.primaryColor, document.documentElement);
    setCssVar(
      'secondary',
      colorsStore.secondaryColor,
      document.documentElement
    );
    setCssVar(
      'lt1',
      lighten(colorsStore.primaryColor, 20),
      document.documentElement
    );
    setCssVar(
      'lt2',
      lighten(colorsStore.primaryColor, 30),
      document.documentElement
    );
    setCssVar(
      'lt3',
      lighten(colorsStore.primaryColor, 40),
      document.documentElement
    );
    setCssVar(
      'lt4',
      lighten(colorsStore.primaryColor, 50),
      document.documentElement
    );
    setCssVar(
      'lt5',
      lighten(colorsStore.primaryColor, 60),
      document.documentElement
    );
    setCssVar(
      'dk1',
      lighten(colorsStore.primaryColor, -5),
      document.documentElement
    );
    setCssVar(
      'dk2',
      lighten(colorsStore.primaryColor, -10),
      document.documentElement
    );
    setCssVar(
      'dk3',
      lighten(colorsStore.primaryColor, -20),
      document.documentElement
    );
    setCssVar(
      'dk4',
      lighten(colorsStore.primaryColor, -30),
      document.documentElement
    );
    setCssVar(
      'dk5',
      lighten(colorsStore.primaryColor, -40),
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

// COLOR SWITCHER - Define primary, secondary, accent and CTA colors.
import ColorSwitcher from 'components/ColorSwitcher.vue';

</script>

<style lang="scss">
.bg-slt1 {
  background-color: '#454';
}
</style>


