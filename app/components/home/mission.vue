<template>
  <section id="home-mission" class="mission">
    <h2 class="mission__title">{{ $t('home.mission.title') }}</h2>
    <div class="mission__cards">
      <div
        v-for="(item, index) in $tm('home.mission.items')"
        :key="index"
        class="mission__card"
        :data-y-spanned="index === 2 ? true : false"
      >
        <MyPicture v-if="index === 2" path="globe.png" alt="globe" class="mission__img" />
        <h4 class="mission__card-title">{{ $rt(item.title) }}</h4>
        <p class="mission__card-text">
          {{ $rt(item.text) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const { $gsap } = useNuxtApp();
onMounted(() => {
  const travelDistance = 100;
  const parentId = '#home-mission';
  const parentContainer = `${parentId} .mission`;

  $gsap.from(`${parentContainer}__title`, {
    x: -travelDistance,
    ...fadeOnScrollTrigger(`${parentContainer}__title`)
  });
  $gsap.utils.toArray(`${parentContainer}__card`).forEach(card => {
    if (card.dataset.ySpanned) {
      $gsap.from(card, {
        y: travelDistance,
        ...fadeOnScrollTrigger(card, 'bottom 90%')
      });
    } else {
      $gsap.from(card, {
        x: -travelDistance,
        ...fadeOnScrollTrigger(card, 'bottom 90%')
      });
    }
  });
});
</script>

<style lang="scss" scoped>
.mission {
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  align-items: flex-start;
  @media only screen and (max-width: $bp-lg) {
    grid-template-columns: initial;
    gap: 16px;
  }
  &__img {
    width: 180px;
    aspect-ratio: 1;
    @media only screen and (max-width: $bp-md) {
      width: 120px;
    }
  }
  &__cards {
    display: grid;
    gap: max(16px, 3.2rem);
    @media only screen and (min-width: $bp-md) {
      grid-template-columns: 1.25fr 1fr;
    }
  }
  &__card {
    background-color: $clr-accent-medium-blue;
    border-radius: max(16px, 2.4rem);
    padding: max(16px, 3rem);
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
    @media only screen and (min-width: $bp-md) {
      gap: 5vw;
      padding-bottom: 4px;
    }
    &-title {
      font-size: max(22px, 2.8rem);
      font-weight: 700;

      @media only screen and (min-width: $bp-md) {
      }
    }
    &-text {
      font-size: max(16px, 1.8rem);
      line-height: 1.5;
      font-family: $font-base;
      @media only screen and (max-width: $bp-md) {
        font-weight: 300;
      }
    }
    &:last-child {
      align-items: center;
      text-align: center;
      gap: 16px;
      @media only screen and (max-width: $bp-md) {
        gap: 24px;
      }
      @media only screen and (min-width: $bp-md) {
        grid-column: 2 / span 1;
        grid-row: 1 / span 2;
      }
    }
    &:not(:last-child) {
      justify-content: space-between;
    }
  }
  &__title {
    @include section-title;
    color: #fff;
  }
}
</style>
