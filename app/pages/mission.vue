<template>
  <BreadcrumbsLayout :breadcrumbs>
    <MissionHero />
    <div class="mission__wrapper">
      <MissionGlobal />
      <MissionTeam />
    </div>
  </BreadcrumbsLayout>
</template>

<script setup>
import banner from '/images/1024/about-hero.avif';

const { t } = useI18n();
const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/mission',
    label: t('nav.mission')
  }
]);

useMySEO('mission', {
  ogImage: banner
});
</script>

<style lang="scss" scoped>
.mission {
  color: $clr-secondary;
  & > *:not([data-no-margin]) {
    @include section-margin-inline;
  }
  &__wrapper {
    background-color: #fff;
    border-radius: max(16px, 3.2rem);
    padding: max(16px, 8rem);
    margin-top: max(20px, 8rem);
    display: flex;
    flex-direction: column;
    gap: max(20px, 8.6rem);
  }
}
</style>
