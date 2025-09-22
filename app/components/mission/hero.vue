<template>
  <section class="hero">
    <div class="hero__circles">
      <div v-for="i in 4" :key="i" class="hero__circle" />
    </div>
    <div class="hero__top">
      <div class="hero__icons">
        <div v-for="icon in icons" :key="icon" class="hero__icon-container">
          <component :is="icon" class="hero__icon" data-original />
        </div>
      </div>
      <div class="hero__content">
        <p class="hero__text">
          {{ $t('mission.hero.text') }}
        </p>
        <h1 class="hero__title">
          <span class="hero__title--grey">{{ $rt($tm('mission.hero.titles')[0]) }}</span>
          <span class="hero__title--yellow">{{ $rt($tm('mission.hero.titles')[1]) }}</span>
        </h1>
      </div>
    </div>
    <ImageCarousel :images="carouselImages" class="hero__carousel" />
  </section>
</template>

<script setup>
import img1 from '~/assets/images/about-hero.jpeg';
import img2 from '~/assets/images/home-about.jpg';

import IconsBank from '~/components/icons/bank.vue';
import IconsBank6 from '~/components/icons/bank-6.vue';
import IconsBank10 from '~/components/icons/bank-10.vue';
import IconsBank11 from '~/components/icons/bank-11.vue';
import IconsBank13 from '~/components/icons/bank-13.vue';
import IconsBank14 from '~/components/icons/bank-14.vue';
import IconsBank17 from '~/components/icons/bank-17.vue';
import TrastBank from '~/components/icons/trast-bank.vue';
import ZiraatBank from '~/components/icons/ziraat-bank.vue';

const carouselImages = [img1, img2, img1, img2];

useAnimation({ selector: '.hero', base: { y: 50 } });
useAnimation({ selector: '.hero__icon-container', base: { scale: 0 }, staggerStep: 0.05 });
useAnimation({ selector: '.hero__content>*', base: { y: 20 }, staggerStep: 0.15 });

const icons = [
  IconsBank,
  IconsBank6,
  IconsBank10,
  IconsBank11,
  IconsBank13,
  IconsBank14,
  IconsBank17,
  TrastBank,
  ZiraatBank
];
</script>

<style lang="scss" scoped>
@use 'sass:list';

.hero {
  background-color: #fff;
  border-radius: max(16px, 3.2rem);
  margin-top: max(20px, 3rem);
  position: relative;
  overflow: hidden;
  $duration: 1s;
  &__carousel {
    z-index: 2;
    & > *:not(:last-child) {
      aspect-ratio: 1780/800;
      @media screen and (max-width: $bp-lg) {
        aspect-ratio: 328/200;
      }
    }
  }
  &__circles {
    position: absolute;
    inset: 0;
    display: grid;
    z-index: 1;
    @media only screen and (max-width: $bp-lg) {
      transform: scale(1);
      inset: auto;
      left: 50%;
      transform: translateX(-50%);
      width: max(766px, 150vw);
      aspect-ratio: 1;
    }
    @media only screen and (max-width: $bp-sm) {
      transform: translate(-50%, -3%) scaleX(1.2);
    }
  }
  &__circle {
    $scales: (0.83, 0.65, 0.45, 0.3);

    border: 1px solid #cbd5e0;
    border-radius: 50%;
    grid-area: 1 / 1 / 2 / 2;

    @for $i from 1 through list.length($scales) {
      &:nth-child(#{$i}) {
        transform: scale(#{list.nth($scales, $i)});
      }
    }

    @media only screen and (max-width: $bp-sm) {
      $scales: (0.9, 0.75, 0.6, 0.45);

      @for $i from 1 through list.length($scales) {
        &:nth-child(#{$i}) {
          transform: scale(#{list.nth($scales, $i)});
        }
      }
    }
  }
  &__top {
    display: grid;
    & > * {
      grid-area: 1/1/2/2;
    }
  }

  &__text {
    font-size: max(12px, 2rem);
    text-align: center;
  }
  &__bottom {
    display: grid;
    border-radius: max(12px, 3.2rem);
    overflow: hidden;
    & > * {
      grid-area: 1/1/2/2;
    }
  }
  &__images {
    display: grid;
    & > * {
      grid-area: 1/1/2/2;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: max(16px, 2.4rem);
    padding-block: max(30px, 15rem);
    padding-inline: 10px;
    z-index: 2;
    position: relative;
    @media only screen and (max-width: $bp-lg) {
      padding-top: 190px;
    }
  }
  &__title {
    font-size: max(18px, 5.4rem);
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
    line-height: 1.2;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: $bp-sm) {
      line-height: 24px;
    }
    &--grey {
      color: $clr-very-dark-grey;
      display: inline-block;
    }
    &--yellow {
      display: inline-block;
      color: $clr-yellow;
    }
  }
  &__action {
    align-self: flex-end;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 8px;
    padding: max(16px, 3.6rem);
    gap: max(16px, 2.4rem);
    z-index: 10;
  }
  &__bar {
    &--outer {
      background-color: #ffffff29;
      backdrop-filter: blur(32px);
      position: relative;
      border-radius: 37px;
      overflow: hidden;
    }
    &--inner {
      position: absolute;
      inset: 0;
      background-color: #fff;
      transform: scaleX(0);
      transform-origin: left;
    }
  }
  &__image {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 1780/800;
    opacity: 0;
    transition: opacity 0.5s;
    &.active {
      opacity: 1;
      z-index: 5;
    }
    @media only screen and (max-width: $bp-md) {
      aspect-ratio: 328/200;
    }
  }
  &__icons {
    position: relative;
    z-index: 3;
    pointer-events: none;
  }
  &__icon {
    width: 66%;
    &-container {
      @include flex-center;
      position: absolute;
      width: max(6rem, 60px);
      aspect-ratio: 1;
      background: #ffffff;
      box-shadow: 0px 1.2px 27px 0px #0000001a;
      border-radius: 16px;

      &:first-child {
        left: 15%;
        top: 20%;
        @media only screen and (max-width: $bp-lg) {
          right: 40%;
          left: auto;
        }
        @media only screen and (max-width: $bp-sm) {
          top: 22px;
          right: 130px - 16px;
        }
      }
      &:nth-child(2) {
        right: 16%;
        top: 27%;
        width: max(60px, 8rem);
        border-radius: max(18px, 2.4rem);
        @media only screen and (max-width: $bp-lg) {
          top: 61%;
        }
        @media only screen and (max-width: $bp-sm) {
          right: -20px;
          bottom: 35px;
          top: auto;
        }
      }
      &:nth-child(3) {
        right: 11%;
        bottom: 5%;
        width: max(80px, 1rem);
        border-radius: max(20px, 3.2rem);
        @media only screen and (max-width: $bp-lg) {
          display: none;
        }
      }
      &:nth-child(4) {
        right: 44.3%;
        top: 17%;
        @media only screen and (max-width: $bp-lg) {
          right: auto;
          left: 5%;
          top: 56%;
        }
        @media only screen and (max-width: $bp-sm) {
          left: 5px;
          top: 116px;
        }
      }
      &:nth-child(5) {
        left: 35%;
        bottom: 6%;
        width: max(60px, 8rem);
        border-radius: max(18px, 2.4rem);
        @media only screen and (max-width: $bp-lg) {
          display: none;
        }
      }
      &:nth-child(6) {
        left: 40%;
        top: 7%;
        width: 71px;
        border-radius: 24px;
        @media only screen and (max-width: $bp-lg) {
          display: none;
        }
      }
      &:nth-child(7) {
        border-radius: 32px;
        left: 20%;
        top: 56%;
        width: 100px;
        @media only screen and (max-width: $bp-lg) {
          left: 20%;
          top: 20%;
        }
        @media only screen and (max-width: $bp-sm) {
          left: -25px;
          top: -25px;
        }
      }
      &:nth-child(8) {
        border-radius: 24px;
        left: 7.5%;
        bottom: 14%;
        width: max(80px, 9rem);
        @media only screen and (max-width: $bp-lg) {
          display: none;
        }
      }
      &:last-child {
        border-radius: 24px;
        right: 30%;
        bottom: 12px;
        width: 74px;

        @media only screen and (max-width: $bp-sm) {
          top: 69px;
          bottom: auto;
          right: -20px;
        }
      }
    }
  }
}
</style>
