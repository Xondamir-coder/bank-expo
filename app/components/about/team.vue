<template>
  <section id="about-team" class="team">
    <div class="team__top">
      <h2 class="team__title">Our managment team</h2>
      <p class="team__text">Epo Bank unites participants from over the world</p>
    </div>
    <div class="team__list">
      <div v-for="(teammate, i) in teammates" :key="i" class="team__item">
        <div class="team__item-image"/>
        <h3 class="team__item-name">
          {{ teammate.name }}
        </h3>
        <p class="team__item-job">
          {{ teammate.job }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const teammates = [
  {
    name: 'Ahmadjon Rahmatjonov',
    job: 'Founder and CEO'
  },
  {
    name: 'Ahmadjon Rahmatjonov',
    job: 'Founder and CEO'
  },
  {
    name: 'Ahmadjon Rahmatjonov',
    job: 'Founder and CEO'
  },
  {
    name: 'Ahmadjon Rahmatjonov',
    job: 'Founder and CEO'
  },
  {
    name: 'Ahmadjon Rahmatjonov',
    job: 'Founder and CEO'
  },
  {
    name: 'Ahmadjon Rahmatjonov',
    job: 'Founder and CEO'
  },
  {
    name: 'Ahmadjon Rahmatjonov',
    job: 'Founder and CEO'
  },
  {
    name: 'Ahmadjon Rahmatjonov',
    job: 'Founder and CEO'
  }
];
const { $gsap } = useNuxtApp();

onMounted(() => {
  const parentId = '#about-team';
  const parentContainer = `${parentId} .team`;
  $gsap.from(`${parentContainer}__top>*`, {
    x: -100,
    stagger: 0.1,
    ...fadeOnScrollTrigger(`${parentContainer}__top>*`)
  });
  $gsap.utils.toArray(`${parentContainer}__item`).forEach((item, i) => {
    $gsap.from(item, {
      rotate: i % 2 === 0 ? 10 : -10,
      ...fadeOnScrollTrigger(item)
    });
  });
});
</script>

<style lang="scss" scoped>
.team {
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 2.5vw, 30px);
  &__top {
    @include section-top;
  }
  &__title {
    @include section-title;
  }
  &__text {
    font-size: clamp(12px, 1vw, 20px);
    color: #323b49;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: clamp(20px, 2vw, 32px);
    @media only screen and (max-width: $bp-md) {
      grid-template-columns: initial;
      grid-auto-flow: column;
      grid-auto-columns: 80%;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      & > * {
        scroll-snap-align: start;
      }
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: clamp(4px, 1vw, 11px);
    &-image {
      background-color: #d9d9d9;
      width: clamp(56px, 10vw, 180px);
      aspect-ratio: 1;
      border-radius: clamp(10px, 1.5vw, 20px);
      margin-bottom: 20px - 11px;
      @media only screen and (max-width: $bp-md) {
        margin-bottom: 8px - 4px;
      }
    }
    &-name {
      color: #111827;
      font-size: clamp(18px, 1.5vw, 28px);
      font-weight: 700;
    }
    &-job {
      color: #323b49;
      font-size: clamp(12px, 1vw, 20px);
    }
  }
}
</style>
