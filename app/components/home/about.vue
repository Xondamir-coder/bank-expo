<template>
  <section id="home-about" class="about">
    <div class="about__top">
      <h2 class="about__title">{{ $t('home.about.title') }}</h2>
      <p class="about__text">
        {{ $t('home.about.text') }}
      </p>
    </div>
    <div class="about__video">
      <img src="~/assets/images/home-about.jpg" alt="banking people" class="about__img" />
      <button class="about__play">
        <IconsPlay class="about__play-icon" />
      </button>
      <div class="about__time">03:36</div>
    </div>
    <div class="about__bottom">
      <div class="about__bottom-item">
        <IconsVisitors class="about__bottom-icon" />
        <span class="about__bottom-label">{{ $t('visitors') }}: 20k+</span>
      </div>
      <div class="about__bottom-divider" />
      <div class="about__bottom-item">
        <IconsWhiteboard class="about__bottom-icon" />
        <span class="about__bottom-label">{{ $t('exhibitors') }}: 200+</span>
      </div>
      <div class="about__bottom-divider" />
      <div class="about__bottom-item">
        <IconsFlag class="about__bottom-icon" />
        <span class="about__bottom-label">{{ $t('countries') }}: 50+</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const { $gsap } = useNuxtApp();

onMounted(() => {
  const aboutTopX = 100;
  const parentId = '#home-about';
  const parentContainer = `${parentId} .about`;

  $gsap.from(`${parentContainer}__title`, {
    x: -aboutTopX,
    ...fadeOnScrollTrigger(`${parentContainer}__title`)
  });
  $gsap.from(`${parentContainer}__text`, {
    x: aboutTopX,
    ...fadeOnScrollTrigger(`${parentContainer}__title`)
  });
  $gsap.from(`${parentContainer}__video`, {
    scale: 1.1,
    ...fadeOnScrollTrigger(`${parentContainer}__video`)
  });
  $gsap.from(`${parentContainer}__bottom`, {
    y: 50,
    ...fadeOnScrollTrigger(`${parentContainer}__bottom`, 'bottom 90%')
  });
});
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  gap: max(16px, 3.6rem);
  &__title {
    @include section-title;
  }
  &__text {
    font-size: max(14px, 2rem);
    line-height: 1.5;
  }
  &__top {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media only screen and (max-width: $bp-sm) {
      row-gap: 10px;
      grid-template-columns: initial;
    }
  }
  &__bottom {
    display: flex;
    gap: max(9px, 3.2rem);
    @media only screen and (max-width: $bp-md) {
      gap: 9px;
    }
    &-label {
      font-size: max(10px, 1.8rem);
    }
    &-divider {
      width: 1px;
      background-color: #ffffff3d;
    }
    &-item {
      display: flex;
      align-items: center;
      position: relative;
      gap: max(4px, 1.2rem);
    }
    &-icon {
      width: max(18px, 2.8rem);
      aspect-ratio: 1;
    }
  }
  &__video {
    display: grid;
    border-radius: 24px;
    overflow: hidden;
    & > * {
      grid-area: 1/1/2/2;
    }
  }
  &__time {
    font-size: 18px;
    color: $clr-secondary;
    background-color: #fff;
    align-self: flex-start;
    justify-self: flex-end;
    padding-block: 5px;
    padding-inline: 16px;
    border-radius: 8px;
    margin: max(10px, 3rem);
    @media only screen and (max-width: $bp-md) {
      place-self: flex-end;
    }
  }
  &__img {
    width: 100%;
    object-fit: cover;
    @media only screen and (max-width: $bp-md) {
      aspect-ratio: 372/248;
    }
  }
  &__play {
    @include flex-center;
    border-radius: 16px;
    background-color: $clr-yellow;
    width: max(50px, 7rem);
    aspect-ratio: 1;
    place-self: center;
    transition: background-color 0.3s;
    &:hover {
      background-color: #fff;
      __play-icon {
        fill: $clr-yellow;
      }
    }
    &-icon {
      width: max(20px, 3.2rem);
      aspect-ratio: 1;
      fill: #fff;
      transition: fill 0.3s;
    }
  }
}
</style>
