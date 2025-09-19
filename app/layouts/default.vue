<template>
  <div class="layout overflow-hidden" :style="containerStyle">
    <AppPreloader :is-loaded="isLoaded" @loaded="toggleLoading" />
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
const route = useRoute();
useWatchTogglers();

const isLoaded = ref(false);

const getBgColor = routeName => {
  if (routeName.includes('index')) return '#001833';
  if (routeName.includes('about')) return '#F1F2F4';
  if (routeName.includes('banks')) return '#F8F8F8';
  else return '#F1F2F4';
};

const toggleElements = () => {
  const main = document.querySelector('main');
  const header = document.querySelector('header');
  main.classList.add('dis-none');
  header.classList.add('dis-none');

  setTimeout(() => {
    main.classList.remove('dis-none');
    header.classList.remove('dis-none');
  }, 50);
};
const removeOverflow = () => {
  document.body.style.overflow = 'visible';
  document.querySelector('.layout').classList.remove('overflow-hidden');
};
const toggleLoading = () => {
  isLoaded.value = !isLoaded.value;
  toggleElements();
  removeOverflow();
};

const containerStyle = computed(() => ({
  backgroundColor: getBgColor(route.name)
}));
</script>
