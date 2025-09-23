<template>
  <BreadcrumbsLayout :breadcrumbs>
    <div class="organizer">
      <h1 class="heading">
        {{ $t('organizer.title') }}
      </h1>
      <p>
        {{ $t('organizer.text') }}
      </p>
      <MyPicture path="organizer.jpg" alt="organizer banner" class="organizer__image" />
      <InfoCard v-for="(item, index) in $tm('organizer.items')" :key="index" :info="item" />
    </div>
  </BreadcrumbsLayout>
</template>

<script setup>
const { t } = useI18n();
const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/organizer',
    label: t('nav.organizer')
  }
]);
useAnimation({ selector: '.organizer>*', base: { y: 25 } });
</script>

<style lang="scss" scoped>
.organizer {
  align-self: center;
  max-width: max(61.25%, 600px);
  display: flex;
  flex-direction: column;
  gap: max(2rem, 16px);

  &__image {
    border-radius: max(2rem, 16px);
  }
}
</style>
