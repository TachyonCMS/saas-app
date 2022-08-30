import { defineStore } from 'pinia';

import { useStorage } from '@vueuse/core';

export const useColorsStore = defineStore('colors', {
  state: () => ({
    darkMode: useStorage('darkMode', false),
    primaryColor: useStorage('primaryColor', '#1976D2'),
    secondaryColor: useStorage('secondaryColor', '#26A69A'),
    accentColor: useStorage('accentColor', '#9C27B0'),
    ctaColor: useStorage('ctaColor', '#FB8500'),
    glossy: useStorage('glossy', false),
  }),

  getters: {

  },

  actions: {
    setDarkMode(val: boolean) {
      this.darkMode = val;
    },
    setColor(val: string) {
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
