<template>
  <BreadcrumbsLayout :breadcrumbs>
    <div class="venue__top">
      <h1 class="heading">
        {{ $t('venue.title') }}
      </h1>
      <p class="venue__text">
        {{ $t('venue.text') }}
      </p>
    </div>
    <div class="venue__container">
      <div class="venue__map">
        <img src="~/assets/images/google-map.jpg" alt="googe map" class="venue__image" />
        <YellowButton text="Google Map" class="venue__button" />
        <div class="venue__circle">
          <IconsLogoSmallBlackText class="venue__logo" />
          <div class="venue__thing" />
        </div>
      </div>
      <div class="venue__list">
        <InfoCard v-for="(item, index) in items" :key="index" :info="item" />
      </div>
    </div>
  </BreadcrumbsLayout>
</template>

<script setup>
import IconsBank from '~/components/icons/small-bank.vue';
import IconsLocation from '~/components/icons/location.vue';
import IconsTime from '~/components/icons/time.vue';
import IconsCalendar from '~/components/icons/calendar.vue';
import IconsTaxi from '~/components/icons/taxi.vue';

const { t, rt, tm } = useI18n();

const icons = [
  [IconsBank, IconsLocation],
  [IconsCalendar, IconsTime],
  [IconsTaxi, IconsTaxi],
  [IconsLocation, IconsLocation, IconsLocation]
];
const items = computed(() =>
  tm('venue.items').map((item, itemIndex) => ({
    title: rt(item.title),
    list: item.details.map((detail, detailIndex) => ({
      icon: icons[itemIndex][detailIndex],
      text: rt(detail)
    })),
    text: item.text ? rt(item.text) : null
  }))
);

const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/venue',
    label: t('nav.venue')
  }
]);

useAnimation({ selector: '.venue__top>*', base: { x: -25 } });
useAnimation({ selector: '.venue__map', base: { scale: 0.95 }, initialDelay: 0.2 });
useAnimation({
  selector: '.info-card',
  base: {
    x: -25
  },
  initialDelay: 0.3,
  stagger: 0.15
});
</script>

<style lang="scss" scoped>
.venue {
  &__top {
    display: flex;
    flex-direction: column;
    gap: max(2rem, 12px);
  }
  &__container {
    display: grid;
    align-items: flex-start;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: max(3.2rem, 16px);
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: max(2rem, 16px);
    & > *:nth-child(odd) {
      background-color: red;
    }
    & > *:nth-child(even) {
      background-color: blue;
    }
  }
  &__map {
    position: relative;
    display: grid;
    border-radius: max(2rem, 16px);
    overflow: hidden;
    & > * {
      grid-area: 1/1/2/2;
    }
  }
  &__logo {
    width: 82.5%;
  }
  &__thing {
    width: max(1.2rem, 12px);
    height: max(1.2rem, 12px);
    background-color: $clr-yellow;
    border-radius: 50%;
    position: absolute;
    top: calc(100% + 4px);
  }
  &__circle {
    @include flex-center;
    place-self: center;
    width: max(8rem, 60px);
    height: max(8rem, 60px);
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid #0000001f;
    position: relative;
  }
  &__button {
    align-self: flex-end;
    justify-self: flex-start;
    margin: max(1.6rem, 16px);
    min-width: max(24rem, 152px);
  }
}
</style>
