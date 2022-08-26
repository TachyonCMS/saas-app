<template>
    <q-list>
      <q-item-label header> Join Now! </q-item-label>

      <EssentialLink
        v-for="link in essentialLinks"
        :key="link.title"
        v-bind="link"
      />
    </q-list>
</template>

<script setup lang="ts">

import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Signup Now',
    caption: 'or Signin',
    icon: 'mdi-login',
    link: '/',
  },
];

</script>
