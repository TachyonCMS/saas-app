import { defineStore } from 'pinia';

import { useStorage } from '@vueuse/core';

import { Dark } from 'quasar';

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    title: 'Tachyon App',
    darkMode: useStorage('darkMode', false)
  }),
  getters: {},
  actions: {
    setTitle(title: string) {
      this.title = title;
    },
    setDarkMode(val: boolean) {
      this.darkMode = val;
      // get status
      console.log(Dark.isActive);

      // get configured status
      console.log(Dark.mode); // "auto", true, false
    }
  }
});
