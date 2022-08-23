<template>
  <div>

  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

interface Props {
  appName: string;
}
const props = withDefaults(defineProps<Props>(), {
  appName: () => '',
});

console.log(props)

</script>
