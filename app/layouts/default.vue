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
const router = useRouter();
useWatchTogglers();

if (import.meta.client) {
  router.afterEach(() => {
    nextTick(() => {
      const els = document.querySelectorAll('.hidden');
      console.log(els);
      els?.forEach(el => el.classList.remove('hidden'));
    });
  });
}

onMounted(() => {
  document.body.classList.add('hidden');
});
</script>

<style scoped lang="scss">
.layout {
  background-color: #f1f2f4;
  &.home {
    background-color: $clr-accent-dark-blue;
  }
}
</style>
