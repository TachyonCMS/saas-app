<template>
  <q-page class="row items-center justify-evenly">
    <q-btn @click="emit('notification', { type: 'error', message:'some error  d  dfv df v df v dfv df v df v dfv df v  dfv dfv dfvfdvg df v df v df v df v df vdfv d fv df vd  message', position: 'center'})" label="Error Test"></q-btn>
    <q-btn @click="emit('notification', { type: 'info', message:'some error  d  dfv df v df v dfv df v df v dfv df v  dfv dfv dfvfdvg df v df v df v df v df vdfv d fv df vd  message', position: 'center'})" label="Info Test"></q-btn>
    <q-btn @click="emit('notification', { type: 'warning', message:'some error  d  dfv df v df v dfv df v df v dfv df v  dfv dfv dfvfdvg df v df v df v df v df vdfv d fv df vd  message', position: 'center'})" label="Warning Test"></q-btn>
    <q-btn @click="emit('notification', { type: 'positive', message:'some error  d  dfv df v df v dfv df v df v dfv df v  dfv dfv dfvfdvg df v df v df v df v df vdfv d fv df vd  message', position: 'center'})" label="Positive Test"></q-btn>
    <q-btn @click="emit('notification', { type: 'negative', message:'some error  d  dfv df v df v dfv df v df v dfv df v  dfv dfv dfvfdvg df v df v df v df v df vdfv d fv df vd  message', position: 'center'})" label="Negative Test"></q-btn>
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
  </q-page>
</template>

<script setup lang="ts">
const emit = defineEmits(['notification'])
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { ref } from 'vue';

// NOTIFICATIONS Store, info about the visitors selected options
import { useNotificationsStore } from '../stores/notifications';
const notificationsStore = useNotificationsStore();

const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1',
  },
  {
    id: 2,
    content: 'ct2',
  },
  {
    id: 3,
    content: 'ct3',
  },
  {
    id: 4,
    content: 'ct4',
  },
  {
    id: 5,
    content: 'ct5',
  },
]);
const meta = ref<Meta>({
  totalCount: 1200,
});
</script>
