<template>
  <main class="mission">
    <NavBreadcrumbs :breadcrumbs="breadcrumbs" />
    <MissionHero />
    <div class="mission__wrapper">
      <MissionGlobal />
      <MissionTeam />
    </div>
  </main>
</template>

<script setup>
const breadcrumbs = [
  {
    to: '/',
    label: 'Home'
  },
  {
    to: '/mission',
    label: 'Mission'
  }
];
</script>

<style lang="scss" scoped>
.mission {
  color: $clr-secondary;
  & > *:not([data-no-margin]) {
    @include section-margin-inline;
  }
  &__wrapper {
    background-color: #fff;
    border-radius: clamp(16px, 3vw, 32px);
    padding: clamp(16px, 6vw, 80px);
    margin-top: clamp(20px, 6vw, 80px);
    display: flex;
    flex-direction: column;
    gap: clamp(20px, 6vw, 86px);
  }
}
</style>
