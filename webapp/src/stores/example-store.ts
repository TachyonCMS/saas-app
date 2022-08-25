import { defineStore } from 'pinia';

import { useStorage } from '@vueuse/core';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: useStorage('counter', 0),
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
