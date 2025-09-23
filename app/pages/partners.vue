<template>
  <PartnersSponsorsBase :breadcrumbs />
</template>

<script setup>
useMySEO('partners');
const { t } = useI18n();
const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/partners',
    label: t('nav.partners')
  }
]);
</script>
