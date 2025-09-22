<template>
  <nav class="breadcrumbs">
    <div v-for="breadcrumb in breadcrumbs" :key="breadcrumb.to" class="breadcrumbs__link-box">
      <NuxtLink class="breadcrumbs__link" :to="$localePath(breadcrumb.to)">
        <span class="breadcrumbs__label">{{ breadcrumb.label }}</span>
        <span class="breadcrumbs__divider">/</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
useAnimation({ selector: '.breadcrumbs__link-box', base: { y: 10 } });
defineProps({
  breadcrumbs: {
    required: true,
    type: Array
  }
});
</script>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  gap: 4px;

  &__link {
    display: flex;
    gap: 4px;
    align-items: center;
    font-size: max(1.4rem, 14px);
    color: $clr-grey;
    &:hover {
      color: $clr-yellow;
    }
    &-box {
      &:last-child {
        .breadcrumbs__divider {
          display: none;
        }
      }
    }
  }
}
</style>
