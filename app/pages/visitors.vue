<template>
  <BreadcrumbsLayout :breadcrumbs>
    <div class="visitors">
      <div class="visitors__top">
        <p>{{ $t('visitors.text') }}</p>
        <h1 class="visitors__title">
          <span>{{ $t('visitors.title-1') }}</span>
          <span>{{ $t('visitors.title-2') }}</span>
        </h1>
      </div>
      <MyPicture src="visitors-banner.jpg" alt="banner" class="visitors__banner" />
      <div class="visitors__block visitors__attend">
        <div class="visitors__attend-top">
          <h2 class="heading text-secondary">
            {{ $t('visitors.attend.title') }}
          </h2>
          <ul class="visitors__attend-list">
            <li
              v-for="(item, index) in $tm('visitors.attend.items')"
              :key="index"
              class="visitors__attend-item"
            >
              <MissionPattern class="visitors__attend-pattern" />
              <h3 class="heading-32-20 text-darker-grey">
                {{ $rt(item.title) }}
              </h3>
              <p>{{ $rt(item.text) }}</p>
            </li>
          </ul>
        </div>
        <div class="visitors__attend-container">
          <ImageCarousel :images="carouselImages" class="visitors__attend-carousel" />
          <div class="visitors__attend-content">
            <div class="visitors__attend-content-top">
              <h3 class="heading-32-20 text-secondary">
                {{ $t('visitors.highlight.title') }}
              </h3>
              <p>
                {{ $t('visitors.highlight.text') }}
              </p>
            </div>
            <ul class="visitors__attend-content-list">
              <li
                v-for="(item, index) in $tm('visitors.highlight.items')"
                :key="index"
                class="info-card__item"
              >
                <div class="info-card__item-box">
                  <IconsCheckCircle class="info-card__item-icon" />
                </div>
                <p class="info-card__item-text">{{ $rt(item) }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <FormSection />
      <div class="visitors__block visitors__plan">
        <MyPicture src="visitors-plan.jpg" alt="banner" class="visitors__plan-image" />
        <h2 class="heading text-secondary">
          {{ $t('visitors.plan.title') }}
        </h2>
        <ul class="visitors__plan-list">
          <li v-for="(plan, index) in plans" :key="index" class="info-card visitors__plan-item">
            <h3 class="heading-24-17 text-darker-grey">{{ plan.title }}</h3>
            <ul class="info-card__list">
              <li v-for="(item, i) in plan.list" :key="i" class="info-card__item">
                <div class="info-card__item-box bg-yellow">
                  <component :is="item.icon" class="info-card__item-icon fill-white" />
                </div>
                <p>{{ item.text }}</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <FaqSection class="visitors__block" />
    </div>
  </BreadcrumbsLayout>
</template>

<script setup>
import IconsTime from '~/components/icons/time.vue';
import IconsTaxi from '~/components/icons/taxi.vue';
import IconsTrain from '~/components/icons/train.vue';
import IconsLocation from '~/components/icons/location.vue';

const { t, tm, rt } = useI18n();
useMySEO('visitors');

const image1 = 'visitors-attend-1.jpg';
const image2 = 'visitors-banner.jpg';
const carouselImages = [image1, image2, image1, image2];
const planIcons = [
  [IconsTime],
  [IconsTrain, IconsTaxi],
  [IconsLocation, IconsLocation, IconsLocation]
];

const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/for-visitors',
    label: t('nav.for-visitors')
  }
]);
const plans = computed(() =>
  tm('visitors.plan.items').map((item, itemIndex) => ({
    title: rt(item.title),
    list: item.details.map((detail, detailIndex) => ({
      icon: planIcons[itemIndex][detailIndex],
      text: rt(detail)
    }))
  }))
);

useGSAPAnimate({ selector: '.visitors__top>*', base: { y: 20 } });
useGSAPAnimate({ selector: '.visitors__banner', base: { scale: 0.95, duration: 1 } });
useGSAPAnimate({ selector: '.visitors__attend-item', base: { y: 50 } });
useGSAPAnimate({ selector: '.visitors__attend-content-top>*', base: { x: -30 } });
useGSAPAnimate({ selector: '.visitors__attend-content-list>*', base: { x: -30 } });
useGSAPAnimate({ selector: '.visitors__attend-carousel', base: { scale: 1.05, duration: 1 } });
useGSAPAnimate({ selector: '.visitors__plan-image', base: { scale: 0.95, duration: 1 } });
useGSAPAnimate({ selector: '.visitors__plan-item', base: { x: 50 } });
useGSAPAnimate({ selector: '.faq__item', base: { y: 20 } });
</script>

<style lang="scss" scoped>
.visitors {
  display: flex;
  flex-direction: column;
  gap: max(6rem, 20px);
  &__attend {
    display: flex;
    flex-direction: column;
    gap: max(8rem, 32px);
    &-carousel {
      & > *:not(:last-child) {
        aspect-ratio: 765/480;
        @media screen and (max-width: $bp-md) {
          aspect-ratio: 296/200;
        }
      }
    }
    &-container {
      display: grid;
      grid-template-columns: 0.87fr 1fr;
      gap: max(3.2rem, 24px);
      @media screen and (max-width: $bp-md) {
        grid-template-columns: 1fr;
      }
    }
    &-content {
      display: flex;
      flex-direction: column;
      gap: max(3.2rem, 24px);
      &-top {
        display: flex;
        flex-direction: column;
        gap: max(1.6rem, 12px);
      }
      &-list {
        display: flex;
        flex-direction: column;
        gap: max(2rem, 20px);
      }
    }
    &-item {
      aspect-ratio: 537/253;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: max(2.4rem, 12px);
      padding: max(3rem, 16px);
      overflow: hidden;
      position: relative;
      border: 1px solid #0000001f;
      background-color: #f8f8f8;
      @media screen and (max-width: $bp-md) {
        aspect-ratio: 296/180;
      }
      & > *:not(.visitors__attend-pattern) {
        z-index: 1;
      }
    }
    &-pattern {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      width: 100%;
      height: auto;
      fill: #e9eaec;
    }
    &-top {
      display: flex;
      flex-direction: column;
      gap: max(3rem, 12px);
    }
    &-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(max(53rem, 250px), 1fr));
      gap: max(2.4rem, 12px);
    }
  }
  &__plan {
    display: grid;
    grid-template-columns: 0.6fr 1fr;
    grid-template-areas:
      'image title'
      'image list';
    gap: max(3rem, 12px);
    @media screen and (max-width: $bp-md) {
      grid-template-areas:
        'title'
        'image'
        'list';
      grid-template-columns: 1fr;
    }
    h2 {
      grid-area: title;
    }
    &-image {
      grid-area: image;
      border-radius: max(2.4rem, 12px);
      aspect-ratio: 615/834;
      height: 100%;
      @media screen and (max-width: $bp-md) {
        aspect-ratio: 296/200;
      }
    }
    &-list {
      grid-area: list;
      display: flex;
      flex-direction: column;
      gap: max(2.4rem, 12px);
    }
    &-item {
      background-color: #f8f8f8;
      border: 1px solid #0000001f;
      gap: max(3.2rem, 16px);
    }
  }
  &__block {
    padding: max(6rem, 16px);
    background-color: #fff;
    border-radius: max(3.2rem, 16px);
  }
  &__banner {
    aspect-ratio: 1780/720;
    border-radius: max(2.4rem, 12px);
    object-position: bottom;
    @media screen and (max-width: $bp-md) {
      aspect-ratio: 328/200;
    }
  }
  &__title {
    font-size: max(5.4rem, 18px);
    line-height: 1.35;
    font-weight: 900;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;

    & > span:first-child {
      color: $clr-very-dark-grey;
    }
    & > span:last-child {
      color: $clr-yellow;
    }
  }
  &__top {
    align-self: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: max(2.4rem, 14px);
  }
}
</style>
