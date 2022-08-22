import { defineStore } from 'pinia';

// import { useStorage } from '@vueuse/core';

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    title: 'Tachyon App',
  }),
  getters: {},
  actions: {
    setTitle(title: string) {
      this.title = title;
    },

  }
});
