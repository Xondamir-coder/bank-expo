<template>
  <div class="pagination">
    <!-- arrow left -->
    <button
      class="pagination__button"
      :disabled="currentPage === 1"
      @click="changePage(currentPage - 1)"
    >
      <IconsArrowLeft class="pagination__arrow" />
    </button>

    <!-- all buttons  -->
    <button
      v-for="i in pagesCount - 1"
      :key="i"
      class="pagination__button pagination__button--number"
      :class="{
        'pagination__button--active': i === currentPage,
        'pagination__button--hidden': i > shownButtonsCount
      }"
      @click="changePage(i)"
    >
      {{ i }}
    </button>

    <!-- dots -->
    <button
      v-if="shownButtonsCount < pagesCount - 1"
      class="pagination__button pagination__button--number"
      @click="showAllButtons"
    >
      ...
    </button>

    <!-- last button -->
    <button
      class="pagination__button pagination__button--number"
      :class="{
        'pagination__button--active': pagesCount === currentPage
      }"
      @click="changePage(pagesCount)"
    >
      {{ pagesCount }}
    </button>

    <!-- right arrow -->
    <button
      class="pagination__button"
      :disabled="currentPage === pagesCount"
      @click="changePage(currentPage + 1)"
    >
      <IconsArrowLeft class="pagination__arrow pagination__arrow--reverse" />
    </button>
  </div>
</template>

<script setup>
//  reactive state
const shownButtonsCount = ref(3);

//  props
const props = defineProps({
  pagesCount: {
    type: Number,
    required: true
  },
  currentPage: {
    type: Number,
    required: true
  }
});

// emit change page
const emits = defineEmits(['changePage']);

//  methods
const changePage = newPage => {
  emits('changePage', newPage);
  if (props.currentPage !== props.pagesCount && props.currentPage >= shownButtonsCount.value) {
    shownButtonsCount.value++;
  }
};
const showAllButtons = () => (shownButtonsCount.value = props.pagesCount);

//  animation
const { $gsap } = useNuxtApp();
const attrs = useAttrs();
onMounted(() => {
  const parentId = `#${attrs.id}`;
  const parentContainer = `${parentId} .pagination`;
  $gsap.from(`${parentContainer}__button:first-child`, {
    x: -20,
    ...fadeOnScrollTrigger(`${parentContainer}__button:first-child`, 'bottom bottom')
  });
  $gsap.from(`${parentContainer}__button:last-child`, {
    x: 20,
    ...fadeOnScrollTrigger(`${parentContainer}__button:last-child`, 'bottom bottom')
  });
  $gsap.from(`${parentContainer}__button.pagination__button--number`, {
    y: 20,
    ...fadeOnScrollTrigger(`${parentContainer}__button.pagination__button--number`, '90% bottom')
  });
});
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  @media only screen and (max-width: $bp-sm) {
    justify-content: center;
  }
  &__button {
    @include flex-center;
    border-radius: 8px;
    width: 42px;
    border: 1px solid #cbd5e0;
    background: #ffffff;
    aspect-ratio: 1;
    &:disabled .pagination__arrow {
      fill: #687588;
    }
    &--number {
      font-weight: 700;
      font-size: 16px;
      color: $clr-very-dark-grey;
      text-align: center;
      transition: background-color 0.3s, border-color 0.3s, color 0.3s;
    }
    &--active {
      background-color: #c89e45;
      border-color: #c89e45;
      color: #fafafa;
    }
    &--hidden {
      display: none;
    }
  }
  &__arrow {
    fill: $clr-very-dark-grey;
    width: 18px;
    transition: fill 0.3s;
    &--reverse {
      transform: rotate(180deg);
    }
  }
}
</style>
