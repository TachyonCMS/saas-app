import { defineStore } from 'pinia';

import { useStorage } from '@vueuse/core';

const testContrast = (bgColor: string) => {
  return true;
}

export const useOptionsStore = defineStore('options', {
  state: () => ({
    darkMode: useStorage('darkMode', false),
    locale: useStorage('locale', 'en-US'),
    baseColor: useStorage('baseColor', '#303F9F'),
    secondaryColor: useStorage('secondaryColor', '#303F9F'),
    accentColor: useStorage('accentColor', '#303F9F'),
    ctaColor: useStorage('ctaColor', '#FB8500'),
    glossy: useStorage('glossy', false),
  }),

  getters: {

  },

  actions: {
    setDarkMode(val: boolean) {
      this.darkMode = val;
    },
    setLocale(val: string) {
      this.locale = val;
    },
    setColor(val: string) {
      this.baseColor = val;
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
