<template>
  <section id="home-welcome" class="welcome" data-no-margin>
    <div class="welcome__container">
      <HomePattern class="welcome__pattern" />
      <div class="welcome__content">
        <h3 class="welcome__subtitle">{{ $t('home.welcome.subtitle') }}</h3>
        <h2 class="welcome__title">{{ $t('home.welcome.title') }}</h2>
        <p class="welcome__text">
          {{ $t('home.welcome.text') }}
        </p>
      </div>
    </div>
    <MyPicture path="home-welcome.jpg" alt="uzbekistan" class="welcome__image" />
  </section>
</template>

<script setup>
const { $gsap } = useNuxtApp();

onMounted(() => {
  const parentId = '#home-welcome';
  const parentContainer = `${parentId} .welcome`;
  const travelDistance = 100;

  $gsap.from(`${parentContainer}__subtitle`, {
    x: -travelDistance,
    ...fadeOnScrollTrigger(`${parentContainer}__subtitle`)
  });
  $gsap.from(`${parentContainer}__title`, {
    x: travelDistance,
    ...fadeOnScrollTrigger(`${parentContainer}__title`)
  });
  $gsap.from(`${parentContainer}__text`, {
    x: -travelDistance,
    ...fadeOnScrollTrigger(`${parentContainer}__text`)
  });
  $gsap.utils.toArray(`${parentContainer}__pattern path`).forEach(path => {
    const color = path.getAttribute('fill');
    const totalLength = path.getTotalLength();

    $gsap.set(path, {
      strokeDasharray: totalLength,
      strokeDashoffset: 0,
      fill: 'transparent',
      stroke: color
    });
    $gsap
      .timeline({
        scrollTrigger: {
          trigger: `${parentContainer}__pattern`,
          scrub: 1,
          end: 'bottom bottom',
          start: '+=20 75%'
          // markers: true
        }
      })
      .from(path, {
        strokeDashoffset: totalLength
      })
      .to(path, {
        stroke: 'transparent',
        fill: color
      });
  });
});
</script>

<style lang="scss" scoped>
.welcome {
  overflow: hidden;
  background-color: $clr-primary-dark;
  border-top-right-radius: 45px;
  border-top-left-radius: 45px;
  padding-top: min(80px, 6vw);
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  @include section-padding-inline;
  @media only screen and (max-width: $bp-lg) {
    padding: 0;
    padding-bottom: 40px;
    border-radius: 0;
  }
  &__title {
    text-transform: uppercase;
    font-size: max(40px, 10rem);
    font-weight: 900;
    letter-spacing: 10px;
    color: #f7463d;
    @media only screen and (max-width: $bp-md) {
      letter-spacing: 0;
    }
  }
  &__subtitle {
    font-size: max(14px, 3.2rem);
    font-weight: 500;
    letter-spacing: 6px;
    color: $clr-primary-dark;
  }
  &__text {
    color: #000;
    font-size: max(10px, 1.8rem);
    line-height: 1.5;
    letter-spacing: 0.01em;
    max-width: 100ch;
    padding-top: 16px;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      background-color: rgba($clr-primary-dark, 0.3);
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      @media only screen and (max-width: $bp-md) {
        height: 0.45px;
        transform: scaleX(0.6);
      }
    }
  }
  &__content {
    place-self: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: max(10px, 1.6rem);
    transform: translateY(25%);
    padding-inline: 16px;
  }
  &__container {
    display: grid;
    min-height: max(100vh, 800px);
    background: #fff;
    border-bottom-right-radius: 45px;
    border-bottom-left-radius: 45px;
    position: relative;
    @media only screen and (max-width: $bp-lg) {
      min-height: 350px;
      border-radius: 0;
    }
    & > * {
      grid-area: 1/1/2/2;
    }
  }
  &__image {
    align-self: center;
    width: 90%;
    object-fit: cover;
    border-radius: max(14px, 3.6rem);
    transform: translateY(-25%);
    margin-bottom: -5%;
    @media only screen and (max-width: $bp-md) {
      aspect-ratio: 328/200;
      transform: translateY(-15%);
    }
  }
}
</style>
