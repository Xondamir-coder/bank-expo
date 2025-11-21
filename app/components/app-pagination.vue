<template>
  <div v-if="pagesCount > 1" ref="containerRef" class="pagination">
    <!-- arrow left -->
    <button
      class="pagination__button"
      :disabled="queryPage === 1"
      @click="changePage(queryPage - 1)"
    >
      <IconsArrowLeft class="pagination__arrow" />
    </button>

    <!-- all buttons  -->
    <button
      v-for="i in pagesCount - 1"
      :key="i"
      class="pagination__button pagination__button--number"
      :class="{
        active: i === queryPage,
        hidden: i > shownButtonsCount
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
        active: pagesCount === queryPage
      }"
      @click="changePage(pagesCount)"
    >
      {{ pagesCount }}
    </button>

    <!-- right arrow -->
    <button
      class="pagination__button"
      :disabled="queryPage === pagesCount"
      @click="changePage(queryPage + 1)"
    >
      <IconsArrowLeft class="pagination__arrow pagination__arrow--reverse" />
    </button>
  </div>
</template>

<script setup>
const router = useRouter();
const route = useRoute();
const localePath = useLocalePath();

//  reactive state
const queryPage = computed(() => +route.query.page || 1);
const shownButtonsCount = ref(3);
const containerRef = ref();

//  props
const props = defineProps({
  pagesCount: {
    type: Number,
    required: true
  },
  pageName: {
    type: String,
    required: true
  }
});

// emit change page
const emits = defineEmits(['changePage']);

//  methods
const changePage = async newPage => {
  // Show more buttons if needed
  if (queryPage.value !== props.pagesCount && queryPage.value >= shownButtonsCount.value) {
    shownButtonsCount.value++;
  }

  // Update page
  await router.replace({
    path: localePath(`/${props.pageName}`),
    query: { page: newPage }
  });

  // Emit for data fetching
  emits('changePage');
};
const showAllButtons = () => (shownButtonsCount.value = props.pagesCount);
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  animation: slide-from-bottom-10 0.6s;
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
    &:not(:disabled):not(.active):hover {
      background-color: #cbd5e0;
    }
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
    &.active {
      background-color: #c89e45;
      border-color: #c89e45;
      color: #fafafa;
    }
    &.hidden {
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
