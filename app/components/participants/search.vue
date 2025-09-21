<template>
  <form class="search">
    <h2 class="search__title">{{ label }}</h2>
    <div class="search__input-container">
      <button type="submit">
        <IconsSearch class="search__icon" />
      </button>
      <input
        v-model="model"
        type="text"
        class="search__input"
        required
        :placeholder="`${$t('search')}...`"
      />
    </div>
  </form>
</template>

<script setup>
defineProps({
  label: {
    required: true,
    type: String
  }
});
const model = defineModel({
  type: String
});
</script>

<style lang="scss" scoped>
@include hide-children('.participants__container') {
  .search {
    transform: translateX(-35px);
    opacity: 0;
  }
}
.search {
  grid-area: search;
  display: flex;
  flex-direction: column;
  gap: max(16px, 2rem);
  transition: transform 0.7s, opacity 0.7s;

  &__title {
    font-size: max(20px, 3.2rem);
    font-weight: 700;
  }
  &__icon {
    width: max(20px, 2.4rem);
  }
  &__input {
    flex: 1;
    padding-block: max(10px, 2rem);
    &-container {
      display: flex;
      align-items: center;
      border-radius: max(10px, 1.6rem);
      gap: 12px;
      background: #ffffff0a;
      border: 1px solid #e9eaec;
      padding-inline: max(16px, 2rem);
      transition: border-color 0.3s;
      &:has(input:focus) {
        border-color: $clr-very-dark-grey;
      }
    }
  }
}
</style>
