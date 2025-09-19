<template>
  <main class="container">
    <NavBreadcrumbs :breadcrumbs />
    <slot />
  </main>
</template>

<script setup>
defineProps({
  breadcrumbs: {
    type: Array,
    required: true
  }
});
</script>

<style scoped lang="scss">
.container {
  @include section-padding-inline;
  display: flex;
  flex-direction: column;
  gap: max(3rem, 20px);
}
</style>
