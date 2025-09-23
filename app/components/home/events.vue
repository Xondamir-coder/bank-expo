<template>
  <section id="home-events" class="events">
    <h2 class="events__title">{{ $t('home.events.title') }}</h2>
    <div class="events__container">
      <div class="events__cards">
        <button
          v-for="(item, index) in $tm('home.events.cards')"
          :key="index"
          class="events__card"
          :class="{ active: curId === index }"
          @click="changeCurId(index)"
        >
          <h3 class="events__card-title">{{ $rt(item.title) }}</h3>
          <p class="events__card-text">
            {{
              $rt(item.text).length > 100 ? `${$rt(item.text).slice(0, 100)}...` : $rt(item.text)
            }}
          </p>
        </button>
      </div>
      <div class="events__items">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="events__item"
          :class="{ active: curId === index }"
        >
          <img :src="item.img" alt="banner" class="events__image" />
          <div class="events__item-time">
            <IconsCalendar class="fill-cyan events__icon" />
            <span>{{ item.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import img1 from '/images/avif/home-events-1.avif';
import img2 from '/images/avif/home-about.avif';

const curId = ref(0);

const items = [
  {
    date: '12-16 March 03:36',
    img: img1
  },
  {
    date: '10-20 September 11:20',
    img: img2
  },
  {
    date: '5-9 December 12:50',
    img: img1
  },
  {
    date: '20-31 October 19:20',
    img: img1
  }
];
const { $gsap } = useNuxtApp();

const changeCurId = newId => (curId.value = newId);

onMounted(() => {
  const parentId = '#home-events';
  const parentContainer = `${parentId} .events`;

  $gsap.from(`${parentContainer}__title`, {
    x: -100,
    ...fadeOnScrollTrigger(`${parentContainer}__title`)
  });
  $gsap.from(`${parentContainer}__items`, {
    scale: 1.1,
    ...fadeOnScrollTrigger(`${parentContainer}__items`)
  });
  $gsap.utils.toArray(`${parentContainer}__card`).forEach(card => {
    $gsap.from(card, {
      x: -100,
      ...fadeOnScrollTrigger(card)
    });
  });
});
</script>

<style lang="scss" scoped>
@keyframes appear {
  from {
    opacity: 0;
    transform: translateX(5%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.events {
  background: linear-gradient(0deg, rgba(4, 73, 136, 0) 0%, rgba(4, 73, 136, 0.12) 61.86%);
  border-top: 1px solid #04498852;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  gap: max(16px, 3.6rem);
  padding: 8rem;
  margin-top: 8rem;
  @media only screen and (max-width: $bp-lg) {
    margin-top: max(24px, 4rem);
    padding: max(10px, 4rem);
    border-top: none;
    border-bottom: 1px solid #04498852;
    background: linear-gradient(180deg, rgba(4, 73, 136, 0) 0%, rgba(4, 73, 136, 0.12) 61.86%);
  }
  &__cards {
    display: flex;
    flex-direction: column;
  }
  &__card {
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: left;
    padding: max(10px, 2.4rem);
    border-left: 3px solid transparent;
    transition: border-color 0.4s, background 0.4s;
    &.active {
      border-color: $clr-primary;
      background: linear-gradient(90deg, rgba(4, 73, 136, 0.12) 0%, rgba(4, 73, 136, 0) 100%);
    }
    &-title {
      font-size: max(18px, 2.4rem);
      font-weight: 700;
    }
    &-text {
      font-size: max(1.6rem, 14px);
      line-height: 1.5;
    }
  }
  &__container {
    display: grid;
    gap: max(16px, 3.2rem);
    @media only screen and (min-width: $bp-lg) {
      grid-template-columns: 1fr 1.35fr;
    }
  }
  &__title {
    @include section-title;
    color: #fff;
  }
  &__image {
    height: 100%;
    border-radius: max(12px, 2.4rem);
  }
  &__items {
    // display: flex;
    display: grid;
    & > * {
      grid-area: 1/1/2/2;
    }
  }

  &__item {
    overflow: hidden;
    // animation: appear 0.7s;
    display: grid;
    transition-property: opacity, transform;
    transition-duration: 0.7s;
    & > * {
      grid-area: 1/1/2/2;
    }
    &:not(.active) {
      // display: none;
      opacity: 0;
      transform: translateX(5%);
      @media only screen and (max-width: $bp-lg) {
        transform: translateY(10%);
      }
    }
    &-time {
      background-color: #fff;
      color: $clr-secondary;
      padding-block: max(11px, 1.3rem);
      padding-inline: max(10px, 1.2rem);
      align-self: flex-end;
      justify-self: flex-start;
      margin: max(16px, 3rem);
      border-radius: 10px;
      display: flex;
      align-items: center;
      gap: 8px;

      text-transform: uppercase;
      font-size: max(14px, 1.6rem);
    }
  }
  &__icon {
    width: max(20px, 2.4rem);
    aspect-ratio: 1;
  }
}
</style>
