<template>
  <main class="home">
    <HomeHero />
    <div class="content">
      <!-- <HomeAbout /> -->
      <HomeMission />
    </div>
    <HomeEvents />
    <HomeWelcome />
    <div class="wrapper" data-no-margin>
      <div class="wrapper__box">
        <HomeExperts />
        <HomeBanks />
        <HomePartners />
      </div>
    </div>
  </main>
</template>

<script setup>
useMySEO('home');
</script>

<style lang="scss" scoped>
.home {
  margin-bottom: 0;
  color: inherit;
  color: #fff;
  & > * {
    overflow: hidden;
  }
  & > *:not([data-no-margin]) {
    @include section-margin-inline;
  }
}
.wrapper {
  position: relative;
  &__box {
    background-color: #fff;
    padding-block: max(8rem, 22px);
    color: $clr-secondary;
    border-top-left-radius: max(20px, 4.5rem);
    border-top-right-radius: max(20px, 4.5rem);
    display: flex;
    flex-direction: column;
    gap: max(8rem, 40px);
    z-index: 2;
    position: relative;
    & > *:not([data-no-margin]) {
      @include section-margin-inline;
    }
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: $clr-primary-dark;
    z-index: 1;
  }
}
.content {
  display: flex;
  flex-direction: column;
  gap: max(16px, 12rem);
  @include content-style;
  @media only screen and (max-width: $bp-md) {
    gap: 16px;
  }
}
</style>
