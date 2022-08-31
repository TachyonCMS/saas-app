import { defineStore } from 'pinia';

import { useStorage } from '@vueuse/core';

export const useColorStore = defineStore('colors', {
  state: () => ({
    darkMode: useStorage('darkMode', false),
    primaryColor: useStorage('primaryColor', null) as unknown,
    secondaryColor: useStorage('secondaryColor', null)as unknown,
    accentColor: useStorage('accentColor', null) as unknown,
    ctaColor: useStorage('ctaColor', null) as unknown,
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
