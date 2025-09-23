<template>
  <div class="filter">
    <h2 class="heading">{{ title }}</h2>
    <div class="filter__buttons">
      <button
        v-for="(filter, index) in filters"
        :key="index"
        class="filter__button"
        :class="{ 'filter__button--active': index === currentFilter }"
        @click="currentFilter = index"
      >
        {{ filter }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  filters: {
    type: Array,
    required: true
  }
});
const { t } = useI18n();
const route = useRoute();
const currentFilter = ref(0);
const title = computed(() => t(`nav.${route.name.split('___')[0]}`));

useGSAPAnimate({ selector: '.filter h2', base: { x: -20 }, initialDelay: 0.1 });
useGSAPAnimate({ selector: '.filter__button', base: { y: 10, duration: 0.5 }, initialDelay: 0.2 });
</script>

<style scoped lang="scss">
.filter {
  grid-area: filter;
  display: flex;
  flex-direction: column;
  gap: max(12px, 2rem);
  &__title {
    font-size: max(20px, 4.2rem);
    font-weight: 700;
    color: $clr-very-dark-grey;
  }
  &__buttons {
    display: flex;
    gap: max(12px, 1.6rem);
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &__button {
    scroll-snap-align: start;
    font-size: max(14px, 1.7rem);
    font-weight: 500;
    padding-inline: max(20px, 2.4rem);
    padding-block: max(12px, 1.4rem);
    background: #fafafa;
    border: 1px solid #cbd5e0;
    border-radius: 83px;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
    @media only screen and (max-width: $bp-md) {
      text-wrap: nowrap;
    }
    &:hover,
    &--active {
      background: $clr-yellow;
      color: #fafafa;
      border-color: $clr-yellow;
    }
  }
}
</style>
