import { defineStore } from 'pinia';

import { useStorage } from '@vueuse/core';

export const useColorsStore = defineStore('colors', {
  state: () => ({
    darkMode: useStorage('darkMode', false),
    primaryColor: useStorage('primaryColor', null),
    secondaryColor: useStorage('secondaryColor', null),
    accentColor: useStorage('accentColor', null),
    ctaColor: useStorage('ctaColor', null),
    glossy: useStorage('glossy', false),
  }),

  getters: {

  },

  actions: {
    setDarkMode(val: boolean) {
      this.darkMode = val;
    },
    setPrimaryColor(val: string) {
      this.primaryColor = val;
    },
    setSecondaryColor(val: string) {
      this.secondaryColor = val;
    },
    setAccentColor(val: string) {
      this.accentColor = val;
    },
    setCtaColor(val: string) {
      this.ctaColor = val;
    },
    setGlossy(val: boolean) {
      this.glossy = val;
    }
  }
});
