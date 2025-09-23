<template>
  <BreadcrumbsLayout :breadcrumbs>
    <LegalBase
      :title="$t('nav.privacy-policy')"
      :subtitle="$t('privacy-policy.subtitle')"
      :content="$tm('privacy-policy.content')"
    />
  </BreadcrumbsLayout>
</template>

<script setup>
const { t } = useI18n();
useMySEO('privacy-policy');
const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/privacy-policy',
    label: t('nav.privacy-policy')
  }
]);
</script>
