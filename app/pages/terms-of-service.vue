<template>
  <BreadcrumbsLayout :breadcrumbs>
    <LegalBase
      :title="$t('nav.terms-of-service')"
      :subtitle="$t('terms-of-service.subtitle')"
      :content="$tm('terms-of-service.content')"
    />
  </BreadcrumbsLayout>
</template>

<script setup>
const { t } = useI18n();
useMySEO('terms-of-service');
const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/terms-of-service',
    label: t('nav.terms-of-service')
  }
]);
</script>
