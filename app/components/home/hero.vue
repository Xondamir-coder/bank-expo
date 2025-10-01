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
      <!-- countdown -->
      <ClientOnly>
        <div class="hero__time">
          <template v-for="(unit, index) in units" :key="unit.key">
            <div class="hero__time-container">
              <span class="hero__time-out">{{ time[unit.key] }}</span>
              <span class="hero__time-label">{{ $t(unit.label) }}</span>
            </div>
            <span v-if="index < units.length - 1" class="hero__time-divider">:</span>
          </template>
        </div>
      </ClientOnly>

      <!-- location -->
      <div class="hero__location">
        <div class="hero__location-icontainer">
          <IconsPosition class="hero__location-icon" />
        </div>
        <div class="hero__location-content">
          <span>
            <strong class="hero__location-out">{{ calculatedDeadline }}</strong>
          </span>
          <span>{{ place }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t, tm, rt } = useI18n();

const time = reactive({ days: 0, hours: 0, minutes: 0, seconds: 0 });
const units = [
  { key: 'days', label: 'days' },
  { key: 'hours', label: 'hours' },
  { key: 'minutes', label: 'minutes' },
  { key: 'seconds', label: 'seconds' }
];

const fakeDeadline = new Date('2025-11-04T00:00:00.000Z');
const place = computed(() => t('tashkent'));
const months = computed(() => tm('months').map(month => rt(month)));

const calculatedDeadline = `${fakeDeadline.getDate()} ${
  months.value[fakeDeadline.getMonth()]
} ${fakeDeadline.getFullYear()}`;

const countdown = () => {
  const diff = fakeDeadline.getTime() - Date.now();
  const unitsMs = {
    days: 1000 * 60 * 60 * 24,
    hours: 1000 * 60 * 60,
    minutes: 1000 * 60,
    seconds: 1000
  };

  let remaining = diff;
  for (const key in unitsMs) {
    time[key] = Math.floor(remaining / unitsMs[key]);
    remaining %= unitsMs[key];
  }
};

onMounted(() => setInterval(countdown, 1000));
countdown();
useGSAPAnimate({ selector: '.hero__content>*', base: { y: 20 } });
useGSAPAnimate({
  selector: '.hero__time>*',
  base: { y: 15 },
  staggerStep: 0.05,
  initialDelay: 0.2
});
</script>

<style lang="scss" scoped>
.hero {
  background: linear-gradient(104.19deg, #042d52 0%, #044988 55.94%, #042d52 92.59%);
  position: relative;
  min-height: calc(100vh - max(4px, 2rem) - 15rem);
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
    &-icon {
      width: 60%;
    }
  }
  &__time {
    background-color: $clr-yellow;
    border-radius: max(14px, 2rem);
    padding-inline: max(10px, 3.2rem);
    padding-block: max(10px, 2.4rem);
    display: flex;
    gap: max(2.4rem, 16px);

    @media screen and (max-width: 450px) {
      flex: 1;
      justify-content: space-between;
    }
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
    display: flex;
    flex-direction: column;
    align-self: flex-start;
  }
  &__text {
    font-size: max(14px, 2rem);
    line-height: 1.45;
    max-width: 45ch;
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
