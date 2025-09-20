<template>
  <section id="mission-team" class="team">
    <div class="team__top">
      <h2 class="team__title">{{ $t('mission.team.title') }}</h2>
      <p class="team__text">{{ $t('mission.team.text') }}</p>
    </div>
    <div class="team__list">
      <div v-for="(member, i) in $tm('mission.team.members')" :key="i" class="team__item">
        <div class="team__item-image" />
        <h3 class="heading-28-18">
          {{ $rt(member.name) }}
        </h3>
        <p class="team__item-job">
          {{ $rt(member.job) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const { $gsap } = useNuxtApp();

onMounted(() => {
  const parentId = '#mission-team';
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
  gap: max(16px, 3rem);
  &__top {
    @include section-top;
  }
  &__title {
    @include section-title;
  }
  &__text {
    font-size: max(12px, 2rem);
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: max(20px, 3.2rem);
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
    gap: max(4px, 1.1rem);
    &-image {
      background-color: #d9d9d9;
      width: max(56px, 18rem);
      aspect-ratio: 1;
      border-radius: max(10px, 2rem);
      margin-bottom: 20px - 11px;
      @media only screen and (max-width: $bp-md) {
        margin-bottom: 8px - 4px;
      }
    }
    &-job {
      font-size: max(12px, 2rem);
    }
  }
}
</style>
