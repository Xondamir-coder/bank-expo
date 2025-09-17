<template>
  <section id="home-partners" class="partners">
    <div class="partners__top">
      <h2 class="partners__title">{{ $t('home.partners.title') }}</h2>
      <p class="partners__text">
        {{ $t('home.partners.text') }}
      </p>
    </div>
    <div class="partners__list">
      <div v-for="(item, i) in items" :key="i" class="partners__item">
        <img :src="item.image" :alt="item.text" class="partners__image" />
        <p class="partners__item-text">{{ item.text }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import partners1 from '~/assets/images/partners-1.png';
import partners2 from '~/assets/images/partners-2.png';
import partners3 from '~/assets/images/partners-3.png';

const { $gsap } = useNuxtApp();
const { tm, rt } = useI18n();

const images = [partners1, partners2, partners1, partners3];

const items = computed(() =>
  images.map((image, i) => ({
    image,
    text: rt(tm('home.partners.items')[i])
  }))
);

onMounted(async () => {
  const parentId = '#home-partners';
  const parentContainer = `${parentId} .partners`;
  const travelDistance = 100;

  $gsap.from(`${parentContainer}__title`, {
    x: -travelDistance,
    ...fadeOnScrollTrigger(`${parentContainer}__title`)
  });
  $gsap.from(`${parentContainer}__text`, {
    x: travelDistance,
    ...fadeOnScrollTrigger(`${parentContainer}__text`)
  });
  $gsap.utils.toArray(`${parentContainer}__item`).forEach((item, i) => {
    $gsap.from(item, {
      x: i % 2 ? travelDistance * 0.25 : -travelDistance * 0.25,
      y: i % 2 ? -travelDistance * 0.25 : travelDistance * 0.25,
      ...fadeOnScrollTrigger(item, 'bottom 90%', 'top bottom')
    });
  });
});
</script>

<style lang="scss" scoped>
.partners {
  display: flex;
  flex-direction: column;
  gap: max(16px, 3.6rem);
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: max(10px, 3.2rem);
    @media only screen and (max-width: $bp-sm) {
      grid-template-columns: initial;
      grid-auto-flow: column;
      grid-auto-columns: 311px;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      &::-webkit-scrollbar {
        display: none;
      }
      & > * {
        scroll-snap-align: start;
      }
    }
  }
  &__image {
    width: 80px;
    aspect-ratio: 1;
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: 50px;
    border: 1px solid #0000001f;
    background: #ffffff;
    border-radius: max(20px, 3.2rem);
    padding: max(16px, 3rem);
    &-text {
      font-size: max(14px, 1.7rem);
      font-weight: 600;
      line-height: 1.5;
      opacity: 0.8;
    }
  }
  &__top {
    @include section-top;
  }
  &__title {
    @include section-title;
  }
  &__text {
    font-size: max(14px, 1.7rem);
    line-height: 1.5;
    max-width: 60ch;
    opacity: 0.8;
  }
}
</style>
