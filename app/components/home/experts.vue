<template>
  <section id="home-experts" class="experts">
    <div class="experts__top">
      <h2 class="experts__title">{{ $t('home.experts.title') }}</h2>
      <p class="experts__text">
        {{ $t('home.experts.text') }}
      </p>
    </div>
    <ClientOnly>
      <swiper-container ref="sliderRef" class="experts__slider" :init="false">
        <swiper-slide v-for="(image, id) in images" :key="id" class="experts__slide">
          <img :src="image" alt="person" class="experts__image" />
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
    <div class="experts__divider" />
    <div class="experts__bottom">
      <div v-for="(item, index) in items" :key="index" class="experts__bottom-item">
        <div class="experts__icon-container">
          <component :is="item.icon" class="experts__icon" />
        </div>
        <div class="experts__bottom-content">
          <h3 class="experts__bottom-title">
            {{ item.title }}
          </h3>
          <p class="experts__bottom-text">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
//  imports
import expert from '~/assets/images/expert.jpg';
import expert1 from '~/assets/images/expert-1.jpg';
import expert2 from '~/assets/images/expert-2.jpg';
import expert3 from '~/assets/images/expert-3.jpg';
import expert4 from '~/assets/images/expert-4.jpg';
import expert5 from '~/assets/images/expert-5.jpg';

//  components
import IconsShuriken from '~/components/icons/shuriken.vue';
import IconsLamp from '~/components/icons/lamp.vue';
import IconsSpeaking from '~/components/icons/speaking.vue';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

//  swiper ref
const sliderRef = ref();

const { rt, tm } = useI18n();

//  data
const images = [expert, expert1, expert2, expert3, expert4, expert5];
const icons = [IconsShuriken, IconsLamp, IconsSpeaking];
const items = computed(() =>
  icons.map((icon, i) => ({
    icon,
    title: rt(tm('home.experts.items')[i].title),
    text: rt(tm('home.experts.items')[i].text)
  }))
);

//  animations
const { $gsap } = useNuxtApp();
const initAnimations = () => {
  const parentId = '#home-experts';
  const parentContainer = `${parentId} .experts`;
  const travelDistance = 100;

  $gsap.from(`${parentContainer}__title`, {
    x: -travelDistance,
    ...fadeOnScrollTrigger(`${parentContainer}__title`)
  });
  $gsap.from(`${parentContainer}__text`, {
    x: travelDistance,
    ...fadeOnScrollTrigger(`${parentContainer}__text`)
  });
  $gsap.utils.toArray(`${parentContainer}__slide`).forEach((slide, i) => {
    $gsap.from(slide, {
      y: i % 2 ? travelDistance : -travelDistance,
      ...fadeOnScrollTrigger(slide.parentElement, 'bottom 90%')
    });
  });
  $gsap.utils.toArray(`${parentContainer}__bottom-item`).forEach(item => {
    $gsap.from(item.firstElementChild, {
      x: -travelDistance / 4,
      ...fadeOnScrollTrigger(item, 'bottom 90%', 'top 90%')
    });
    $gsap.from(item.lastElementChild, {
      x: travelDistance / 4,
      ...fadeOnScrollTrigger(item, 'bottom 90%', 'top 90%')
    });
  });

  // Delay refresh to ensure Swiper DOM is ready
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 50);
};

//  init swiper
useSwiper(sliderRef, {
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 16
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 5.5,
      spaceBetween: 24
    }
  },
  on: {
    afterInit: initAnimations
  }
});
</script>

<style lang="scss" scoped>
.experts {
  border: 1px solid #cbd5e0;
  background: #f8f8f8;
  border-radius: max(14px, 3.2rem);
  display: flex;
  flex-direction: column;
  gap: max(16px, 4.2rem);
  padding-block: max(10px, 6rem);
  @media only screen and (max-width: $bp-lg) {
    padding-block: 16px;
  }
  & > *:not(.experts__divider) {
    margin-inline: max(10px, 6rem);
    @media only screen and (max-width: $bp-lg) {
      margin-inline: max(10px, 6rem);
    }
  }
  &__icon {
    width: max(50px, 12rem);
    height: max(50px, 12rem);
    transform: translate(10%, 10%);
    &-container {
      border-radius: max(9px, 2.2rem);
      background-color: $clr-primary-dark;
      overflow: hidden;
      align-self: flex-start;
    }
  }
  &__bottom {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: max(3.2rem, 16px);
    row-gap: 16px;
    &-title {
      font-size: max(18px, 2.4rem);
      font-weight: 700;
    }
    &-text {
      font-size: max(14px, 1.7rem);
      line-height: 1.5;
    }
    &-content {
      display: flex;
      flex-direction: column;
      gap: max(6px, 1.2rem);
    }
    &-item {
      display: grid;
      grid-template-columns: max-content 1fr;
      align-items: center;
      gap: max(10px, 2rem);
    }
  }
  &__divider {
    height: 1px;
    width: 100%;
    background-color: #e2e4e5;
    @media only screen and (max-width: $bp-md) {
      width: calc(100% - 20px);
      align-self: center;
    }
  }
  &__top {
    @include section-top;
  }
  &__text {
    font-size: max(14px, 1.7rem);
    line-height: 1.5;
    max-width: 60ch;
    opacity: 0.8;
  }
  &__title {
    @include section-title;
    font-weight: 700;
  }
  &__image {
    border-radius: 16px;
    width: 100%;
    object-fit: cover;
  }
}
</style>
