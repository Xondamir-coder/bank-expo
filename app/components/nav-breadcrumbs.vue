<template>
  <nav class="breadcrumbs hidden">
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
@include hide-children('.breadcrumbs') {
  .breadcrumbs__link {
    transform: translateY(5px);
    opacity: 0;
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
    transition: opacity opacity 0.5s, transform 0.5s;
    transition-timing-function: ease-in-out;

    @for $index from 1 to 5 {
      &:nth-child(#{$index}) {
        transition-delay: 0.1s * $index;
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
