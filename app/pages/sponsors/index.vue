<template>
  <PartnersSponsorsBase :breadcrumbs />
</template>

<script setup>
const { t } = useI18n();
useMySEO('sponsors');
const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/sponsors',
    label: t('nav.sponsors')
  }
]);
</script>
