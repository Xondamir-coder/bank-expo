<template>
  <button class="icon-button">
    <div class="icon-button__icon">
      <slot />
    </div>
  </button>
</template>

<style scoped lang="scss">
.icon-button {
  width: max(42px, 5rem);
  aspect-ratio: 1;
  background: #fafafa;
  border: 1px solid #cbd5e0;
  border-radius: max(8px, 1.2rem);
  @include flex-center;

  &:hover {
    background: #cbd5e0;
    transform: scale(0.9);
  }

  &__icon {
    width: 50%;
    display: flex;
    & > * {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
