import { defineStore } from 'pinia';

import { useStorage } from '@vueuse/core';

export const useOptionsStore = defineStore('options', {
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
