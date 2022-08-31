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
          {{ layoutStore.title }}
        </q-toolbar-title>
        <q-btn-dropdown dropdown-icon="mdi-cog" size="sm" class="q-px-sm">
          <q-list bordered padding>
            <q-item-label header>{{ $t('customize') }}</q-item-label>

            <q-item>
              <q-item-section class="text-no-wrap">
                <q-toggle
                  v-model="colorsStore.darkMode"
                  color="$primary"
                  :label="$t('darkMode')"
                  left-label
                  size="sm"
                ></q-toggle>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section class="text-no-wrap">
                <ColorSwitcher></ColorSwitcher>
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
      <router-view @notification="event => displayNotification(event)"/>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useQuasar, setCssVar, colors } from 'quasar';
const { getPaletteColor, lighten } = colors;

// LAYOUT Store info about the layout
import { useLayoutStore } from '../stores/layout';
const layoutStore = useLayoutStore();

// I18N Store, info about the visitors selected language options
import { useI18nStore } from '../stores/i18n';
const i18nStore = useI18nStore();

// COLORS Store, info about the visitors selected color options
import { useColorsStore } from '../stores/colors';
const colorsStore = useColorsStore();

// LOCALIZATION
import messages from 'src/i18n';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n({ useScope: 'global' });
locale.value = i18nStore.locale;
const { t } = useI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: i18nStore.locale,
  fallbackLocale: 'en-US',
  messages,
});

// NOTIFICATIONS Store, info about the visitors selected options
import { useNotificationsStore } from '../stores/notifications';
const notificationsStore = useNotificationsStore();
// Map internal notification statuses to Quasar notify types
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

// DARK MODE - Enable Quasar dark mode toggling
const $q = useQuasar();
$q.dark.set('auto');
// Update navbar in dark mode
watchEffect(() => {
  $q.dark.set(colorsStore.darkMode);
  if (colorsStore.darkMode) {
    setCssVar('primary', '#383838', document.documentElement);
  } else {
    setCssVar('primary', '#33F', document.documentElement);
  }
});

// Watch for new notifications and display them.
watchEffect(() => {
  notificationsStore.notifications.forEach((note) => {
    displayNotification(note);
  });
});

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
    //closeBtn: true,
    actions: [
      {
        label: t('close'),
        handler: () => {
          notificationsStore.delete(notification.id);
        },
      },
    ],
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

// The value defined in quasar.variables.scss
const basePrimaryColor = getPaletteColor('primary');
const baseSecondaryColor = getPaletteColor('secondary');
const baseAccentColor = getPaletteColor('accent');
console.log('Configured Colors: ' + 'primary: ' + basePrimaryColor + '  secondary: ' + baseSecondaryColor + '  accent: ' + baseAccentColor);

// COLORS CURRENT
const currPrimaryColor = colorsStore.primaryColor ? colorsStore.primaryColor : basePrimaryColor;
const currSecondaryColor = colorsStore.secondaryColor ? colorsStore.secondaryColor : baseSecondaryColor;
const currAccentColor = colorsStore.accentColor ? colorsStore.accentColor : baseAccentColor;

console.log('Dynamic Primary Color: ' + currPrimaryColor);

// COLOR DEFINITIONS
// Calculate primary shades
const dk5 = ref(lighten(currPrimaryColor, -65));
const dk4 = ref(lighten(currPrimaryColor, -50));
const dk3 = ref(lighten(currPrimaryColor, -35));
const dk2 = ref(lighten(currPrimaryColor, -20));
const dk1 = ref(lighten(currPrimaryColor, -10));
const lt5 = ref(lighten(currPrimaryColor, 65));
const lt4 = ref(lighten(currPrimaryColor, 50));
const lt3 = ref(lighten(currPrimaryColor, 35));
const lt2 = ref(lighten(currPrimaryColor, 20));
const lt1 = ref(lighten(currPrimaryColor, 10));
// Calculate secondary shades
const sdk5 = ref(lighten(currSecondaryColor, -65));
const sdk4 = ref(lighten(currSecondaryColor, -50));
const sdk3 = ref(lighten(currSecondaryColor, -35));
const sdk2 = ref(lighten(currSecondaryColor, -20));
const sdk1 = ref(lighten(currSecondaryColor, -10));
const slt5 = ref(lighten(currSecondaryColor, 65));
const slt4 = ref(lighten(currSecondaryColor, 50));
const slt3 = ref(lighten(currSecondaryColor, 35));
const slt2 = ref(lighten(currSecondaryColor, 20));
const slt1 = ref(lighten(currSecondaryColor, 10));


// COLORS SWITCHER- Allow choosing app colors
import ColorSwitcher from 'components/ColorSwitcher.vue';

//const setShades(type, hexColor) =

</script>


<style lang="scss">

// BACKGROUND COLOR
// Primary Dark
.bg-dk5 {
  background-color: v-bind('dk5');
}
.bg-dk4 {
  background-color: v-bind('dk4');
}
.bg-dk3 {
  background-color: v-bind('dk3');
}
.bg-dk2 {
  background-color: v-bind('dk2');
}
.bg-dk1 {
  background-color: v-bind('dk1');
}
// Primary Light
.bg-lt5 {
  background-color: v-bind('lt5');
}
.bg-lt4 {
  background-color: v-bind('lt4');
}
.bg-lt3 {
  background-color: v-bind('lt3');
}
.bg-lt2 {
  background-color: v-bind('lt2');
}
.bg-lt1 {
  background-color: v-bind('lt1');
}
// Secondary Dark
.bg-sdk5 {
  background-color: v-bind('sdk5');
}
.bg-sdk4 {
  background-color: v-bind('sdk4');
}
.bg-sdk3 {
  background-color: v-bind('sdk3');
}
.bg-sdk2 {
  background-color: v-bind('sdk2');
}
.bg-sdk1 {
  background-color: v-bind('sdk1');
}
// Secondary light
.bg-slt5 {
  background-color: v-bind('slt5');
}
.bg-slt4 {
  background-color: v-bind('slt4');
}
.bg-slt3 {
  background-color: v-bind('slt3');
}
.bg-slt2 {
  background-color: v-bind('slt2');
}
.bg-slt1 {
  background-color: v-bind('slt1');
}

// TEXT COLOR
.text-dk5 {
  background-color: v-bind('dk5');
}
.text-dk4 {
  background-color: v-bind('dk4');
}
.text-dk3 {
  background-color: v-bind('dk3');
}
.text-dk2 {
  background-color: v-bind('dk2');
}
.text-dk1 {
  background-color: v-bind('dk1');
}
.text-lt5 {
  background-color: v-bind('lt5');
}
.text-lt4 {
  background-color: v-bind('lt4');
}
.text-lt3 {
  background-color: v-bind('lt3');
}
.text-lt2 {
  background-color: v-bind('lt2');
}
.text-lt1 {
  background-color: v-bind('lt1');
}

.text-sdk5 {
  background-color: v-bind('sdk5');
}
.text-sdk4 {
  background-color: v-bind('sdk4');
}
.text-sdk3 {
  background-color: v-bind('sdk3');
}
.text-sdk2 {
  background-color: v-bind('sdk2');
}
.text-sdk1 {
  background-color: v-bind('sdk1');
}
.text-slt5 {
  background-color: v-bind('slt5');
}
.text-slt4 {
  background-color: v-bind('slt4');
}
.text-slt3 {
  background-color: v-bind('slt3');
}
.text-slt2 {
  background-color: v-bind('slt2');
}
.text-slt1 {
  background-color: v-bind('slt1');
}
</style>
