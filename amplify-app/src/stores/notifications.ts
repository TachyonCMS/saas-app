import { defineStore } from 'pinia';

interface Notification {
  message: string,
  type: string,
  id: number,
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top' | 'bottom' | 'left' | 'right' | 'center' | undefined
}

export const useNotificationsStore = defineStore('notifications', {
  state: () => ({
    notifications:  [] as Notification[],
    counter: 0
  }),
  getters: {},
  actions: {
    add(type: string, message: string, position: string ) {
      this.notifications.push({ message, type: type, id: this.counter, position: position});
      this.counter++
    },
    delete(id: number ) {
      console.log(this.notifications[id])
      this.notifications.splice(0,1)
    },
  }
});
