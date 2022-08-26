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
                  v-model="optionsStore.darkMode"
                  color="$primary"
                  :label="$t('darkMode')"
                  left-label
                  size="sm"
                ></q-toggle>
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
    </q-drawer>

    <q-page-container>
      <router-view @notification="event => displayNotification(event)"/>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useQuasar, setCssVar } from 'quasar';

// LAYOUT Store info about the layout
import { useLayoutStore } from '../stores/layout';
const layoutStore = useLayoutStore();

// OPTION Store, info about the visitors selected options
import { useOptionsStore } from '../stores/options';
const optionsStore = useOptionsStore();

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
  $q.dark.set(optionsStore.darkMode);
  if (optionsStore.darkMode) {
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
</script>
