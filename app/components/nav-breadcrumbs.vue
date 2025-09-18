<template>
  <nav class="breadcrumbs">
    <NuxtLink
      v-for="breadcrumb in breadcrumbs"
      :key="breadcrumb.to"
      class="breadcrumbs__link"
      :to="$localePath(breadcrumb.to)"
    >
      <span class="breadcrumbs__label">{{ breadcrumb.label }}</span>
      <span class="breadcrumbs__divider">/</span>
    </NuxtLink>
  </nav>
</template>

<script setup>
defineProps({
  breadcrumbs: {
    required: true,
    type: Array
  }
});
</script>

<style lang="scss" scoped>
@keyframes slide-from-top {
  from {
    transform: translateY(-5px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-from-bottom {
  from {
    transform: translateY(5px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.breadcrumbs {
  display: flex;
  gap: 4px;

  &__link {
    display: flex;
    gap: 4px;
    align-items: center;

    font-size: max(1.4rem, 14px);
    color: $clr-grey;
    animation: slide-from-top 0.5s ease-in-out backwards;

    @for $index from 1 to 4 {
      &:nth-child(#{$index}) {
        animation-delay: 0.1s * $index;
        @if ($index % 2 == 0) {
          animation-name: slide-from-bottom;
        }
      }
    }
    &:hover .breadcrumbs__label {
      color: $clr-yellow;
    }
    &:last-child {
      .breadcrumbs__divider {
        display: none;
      }
    }
  }
  &__label {
    transition: color 0.3s;
  }
}
</style>
