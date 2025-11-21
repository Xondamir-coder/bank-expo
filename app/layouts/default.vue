<template>
  <div class="layout" :class="{ home: $route.name?.includes('index') }">
    <AppPreloader />
    <AppCookies />
    <AppHeader />
    <AppMenu />
    <slot />
    <AppFooter />
    <FormModal />
    <SuccessModal />
  </div>
</template>

<script setup>
const router = useRouter();
const { $lenis } = useNuxtApp();
const { fetchStaticData } = useApiStore();

useWatchTogglers();

if (import.meta.client) {
  router.afterEach(() => {
    $lenis.scrollTo(0, {
      immediate: true
    });
  });
}
await fetchStaticData();
</script>

<style scoped lang="scss">
.layout {
  background-color: #f1f2f4;
  &.home {
    background-color: $clr-accent-dark-blue;
  }
}
</style>
