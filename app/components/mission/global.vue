<template>
  <section id="mission-global" class="global">
    <h2 class="global__title">
      {{ $t('mission.global.title') }}
    </h2>
    <div class="global__list">
      <div v-for="(item, i) in $tm('mission.global.items')" :key="i" class="global__item">
        <MissionPattern class="global__item-pattern" />
        <div class="global__item-content">
          <h3 class="global__item-amount">
            {{ $rt(item.amount) }}
          </h3>
          <h4 class="global__item-title">
            {{ $rt(item.label) }}
          </h4>
        </div>
        <p class="global__item-text">
          {{ $rt(item.text) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const { $gsap } = useNuxtApp();

onMounted(() => {
  const parentId = '#mission-global';
  const parentContainer = `${parentId} .global`;
  $gsap.from(`${parentContainer}__title`, {
    x: -100,
    ...fadeOnScrollTrigger(`${parentContainer}__title`)
  });
  $gsap.utils.toArray(`${parentContainer}__item`).forEach(item => {
    $gsap.from(item.firstElementChild, {
      scale: 1.5,
      ...fadeOnScrollTrigger(item)
    });
    $gsap.from(item.firstElementChild.nextElementSibling, {
      x: -50,
      stagger: 0.1,
      ...fadeOnScrollTrigger(item)
    });
    $gsap.from(item.lastElementChild, {
      x: 50,
      ...fadeOnScrollTrigger(item)
    });
  });
});
</script>

<style lang="scss" scoped>
.global {
  display: flex;
  flex-direction: column;
  gap: max(16px, 3rem);
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: max(8px, 2.4rem);
    @media only screen and (max-width: $bp-sm) {
      grid-template-columns: initial;
      grid-auto-flow: column;
      grid-auto-columns: 110%;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      & > * {
        scroll-snap-align: start;
      }
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
  &__item {
    overflow: hidden;
    background: #f8f8f8;
    border: 1px solid #0000001f;
    padding: max(16px, 3rem);
    border-radius: max(20px, 2.4rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    font-weight: 700;
    position: relative;
    aspect-ratio: 524/320;
    @media only screen and (max-width: $bp-md) {
      gap: 16px;
    }
    &-content {
      z-index: 2;
    }
    &-pattern {
      fill: #e9eaec;
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }
    &-amount {
      font-size: max(38px, 4.2rem);
      color: $clr-yellow;
    }
    &-title {
      color: #cbd5e0;
      font-size: max(20px, 3.6rem);
    }
    &-text {
      font-size: max(14px, 2rem);
      line-height: 1.4;
      font-weight: 400;
    }
  }
  &__title {
    @include section-title;
    max-width: 18ch;
  }
}
</style>
