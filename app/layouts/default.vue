<template>
  <div class="layout" :class="{ home: $route.name.includes('index') }">
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
useWatchTogglers();
const router = useRouter();
const { $lenis } = useNuxtApp();

if (import.meta.client) {
  router.afterEach(() => {
    $lenis.scrollTo(0, {
      immediate: true
    });
  });
}
</script>

<style scoped lang="scss">
.layout {
  background-color: #f1f2f4;
  &.home {
    background-color: $clr-accent-dark-blue;
  }
}
</style>
