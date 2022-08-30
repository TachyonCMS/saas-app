import { defineStore } from 'pinia';

import { useStorage } from '@vueuse/core';

export const useLocalizationStore = defineStore('localization', {
  state: () => ({
    locale: useStorage('locale', 'en-US'),
  }),

  getters: {

  },

  actions: {
    setLocale(val: string) {
      this.locale = val;
    },
  }
});
