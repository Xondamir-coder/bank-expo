<template>
  <section class="hero">
    <HomeHeroBg />
    <div class="hero__content">
      <h1 class="hero__title">
        <span v-for="(title, index) in $tm('home.hero.titles')" :key="index">
          {{ $rt(title) }}
        </span>
      </h1>
      <p class="hero__text">
        {{ $t('home.hero.text') }}
      </p>
    </div>
    <div class="hero__bottom">
      <div class="hero__time">
        <div class="hero__time-container">
          <span class="hero__time-out">{{ days }}</span>
          <span class="hero__time-label">{{ $t('days') }}</span>
        </div>
        <span class="hero__time-divider">:</span>
        <div class="hero__time-container">
          <span class="hero__time-out">{{ hours }}</span>
          <span class="hero__time-label">{{ $t('hours') }}</span>
        </div>
        <span class="hero__time-divider">:</span>
        <div class="hero__time-container">
          <span class="hero__time-out">{{ minutes }}</span>
          <span class="hero__time-label">{{ $t('minutes') }}</span>
        </div>
        <span class="hero__time-divider">:</span>
        <div class="hero__time-container">
          <span class="hero__time-out">{{ seconds }}</span>
          <span class="hero__time-label">{{ $t('seconds') }}</span>
        </div>
      </div>
      <div class="hero__location">
        <div class="hero__location-icontainer">
          <IconsPosition />
        </div>
        <div class="hero__location-content">
          <span>
            <strong class="hero__location-out">
              {{ calculatedDeadline }}
            </strong>
          </span>
          <span>{{ place }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const fakeDeadline = new Date('2025-03-16T00:00:00.000Z');
const place = 'Tashkent';
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const calculatedDeadline = ` ${fakeDeadline.getDate()} ${months[fakeDeadline.getMonth()]}
${fakeDeadline.getFullYear()}`;

const countdown = () => {
  const now = new Date().getTime();
  const distance = fakeDeadline - now;
  days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
};
countdown();
onMounted(() => {
  setInterval(countdown, 1000);
});
</script>

<style lang="scss" scoped>
@keyframes slide-from-left {
  from {
    transform: translateX(-70px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-from-right {
  from {
    transform: translateX(70px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.hero {
  $duration: 1s;
  background: linear-gradient(104.19deg, #042d52 0%, #044988 55.94%, #042d52 92.59%);
  position: relative;
  min-height: calc(100vh - 110px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 24px;
  overflow: hidden;
  @media only screen and (max-width: $bp-md) {
    border-radius: 20px;
    justify-content: flex-end;
    gap: 24px;
    min-height: calc(100vh - 95px);
  }

  & > *:not(:first-child) {
    z-index: 2;
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(269.05deg, rgba(4, 45, 82, 0.3) 0.75%, #042d52 84.96%);
    @media only screen and (max-width: $bp-md) {
      background: linear-gradient(182.93deg, rgba(4, 45, 82, 0.3) 39.5%, #042d52 80.25%);
    }
  }
  &__location {
    font-size: max(14px, 1.6rem);
    display: flex;
    align-self: flex-end;
    gap: 12px;
    text-transform: uppercase;
    animation: slide-from-right $duration backwards;
    @media only screen and (max-width: $bp-md) {
      position: absolute;
      left: 16px;
      top: 16px;
    }

    &-content {
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
    }
    &-icontainer {
      @include flex-center;
      border-radius: 12px;
      width: 50px;
      aspect-ratio: 1;
      background: #ffffff05;
      border: 1px solid #ffffff1a;
      backdrop-filter: blur(32px);
    }
  }
  &__time {
    background-color: $clr-yellow;
    border-radius: max(14px, 2rem);
    padding-inline: max(10px, 3.2rem);
    padding-block: max(10px, 2.4rem);
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 455px;
    animation: slide-from-left $duration backwards;
    &-container {
      display: flex;
      flex-direction: column;
    }
    &-divider {
      align-self: center;
    }
    &-out,
    &-divider {
      font-size: max(24px, 3.2rem);
      font-weight: 700;
    }
    &-label {
      font-size: max(12px, 1.4rem);
    }
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
    padding-inline: max(16px, 3.8rem);
    padding-bottom: max(16px, 4.2rem);
  }
  &__title {
    font-size: max(6rem, 26px);
    font-weight: 900;
    text-transform: uppercase;
    line-height: 1.4;
    animation: slide-from-left $duration backwards;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
  }
  &__text {
    font-size: max(14px, 2rem);
    line-height: 1.45;
    max-width: 45ch;
    animation: slide-from-right $duration backwards;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: max(16px, 2.4rem);
    padding-left: max(16px, 6.2rem);
    @media only screen and (min-width: $bp-md) {
      margin-block: auto;
    }
  }
}
</style>
