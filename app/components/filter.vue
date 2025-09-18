<template>
  <div class="filter">
    <h2 class="filter__title">{{ title }}</h2>
    <div class="filter__buttons">
      <button
        v-for="filter in filters"
        :key="filter.type"
        class="filter__button"
        :class="{ 'filter__button--active': filter.type === currentType }"
        @click="setType(filter.type)"
      >
        {{ filter.label }}
      </button>
    </div>
  </div>
</template>

<script setup>
//  props
defineProps({
  filters: {
    type: Array,
    required: true
  },
  currentType: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});

// emits
const emits = defineEmits(['filter']);

// change current type
const setType = type => emits('filter', type);
</script>

<style scoped lang="scss">
@keyframes slide-from-left {
  from {
    transform: translateX(-35px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.filter {
  grid-area: filter;
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 2vw, 20px);
  animation: slide-from-left 0.7s;
  &__title {
    font-size: clamp(20px, 3vw, 42px);
    font-weight: 700;
    color: #111827;
  }
  &__buttons {
    display: flex;
    gap: clamp(12px, 1.5vw, 16px);
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &__button {
    scroll-snap-align: start;
    font-size: clamp(14px, 1vw, 17px);
    font-weight: 500;
    padding-inline: clamp(20px, 2vw, 24px);
    padding-block: clamp(12.5px, 1vw, 14px);
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
