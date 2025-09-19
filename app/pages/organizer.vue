<template>
  <BreadcrumbsLayout :breadcrumbs>
    <div class="organizer__container">
      <h1 class="heading">
        {{ $t('organizer.title') }}
      </h1>
      <p>
        {{ $t('organizer.text') }}
      </p>
      <img src="~/assets/images/organizer.jpg" alt="organizer banner" class="organizer__image" >
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
</script>

<style lang="scss" scoped>
.organizer {
  @include section-padding-inline;
  display: flex;
  flex-direction: column;
  gap: max(3rem, 20px);
  &__image {
    border-radius: max(2rem, 16px);
  }
  &__container {
    align-self: center;
    max-width: max(61.25%, 600px);
    display: flex;
    flex-direction: column;
    gap: max(2rem, 16px);
  }
}
</style>
