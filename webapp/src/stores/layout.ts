import { defineStore } from 'pinia';

// import { useStorage } from '@vueuse/core';

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    title: 'Ultri',
  }),
  getters: {},
  actions: {
    setTitle(title: string) {
      this.title = title;
    },

  }
});
