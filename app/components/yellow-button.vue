<template>
  <button class="yellow-button">
    <span>{{ text }}</span>
    <IconsUpRightArrow v-if="isIconUpRightArrow" class="yellow-button__arrow" />
    <slot />
  </button>
</template>

<script setup>
defineProps({
  isIconUpRightArrow: {
    default: true,
    type: Boolean
  },
  text: {
    required: true,
    type: String
  }
});
</script>

<style lang="scss" scoped>
.yellow-button {
  padding-block: max(1.8rem, 11px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: max(1rem, 10px);
  border-radius: max(1.2rem, 8px);
  background-color: $clr-yellow;
  font-size: max(1.7rem, 14px);
  font-weight: 500;
  color: #fff;
  fill: #fff;
  &__arrow {
    width: max(2.4rem, 20px);
  }
  &:hover {
    background-color: $clr-light-yellow;
    .yellow-button__arrow {
      transform: translate(3px, -3px);
    }
  }
}
</style>
