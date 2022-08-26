// useApps.ts
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

// shared
export function useApps() {
  const appDrawer = ref<null | string>(null);

  const route = useRoute();

  console.log(route.meta.appDrawer);

  appDrawer.value = route.meta.appDrawer
    ? <string>route.meta.appDrawer
    : 'MainDrawer';

  const getAppDrawer = computed(() => {
    return 'MainDrawer';
  });

  return { appDrawer: appDrawer.value, getAppDrawer };
}
