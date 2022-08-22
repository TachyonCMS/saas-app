import { defineStore } from 'pinia';

import { useStorage } from '@vueuse/core';

import { Dark } from 'quasar';

export const useOptionsStore = defineStore('optionsStore', {
  state: () => ({
    darkMode: useStorage('darkMode', false),
    locale: useStorage('locale', 'en-US'),
  }),

  getters: {

  },

  actions: {
    setDarkMode(val: boolean) {
      this.darkMode = val;
    },
    setLocale(val: string) {
      this.locale = val;
    }
  }
});
