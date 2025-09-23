<template>
  <picture class="my-picture">
    <source :srcset="`/images/avif/${path.split('.')[0]}.avif`" type="image/avif" />
    <img
      :src="`/images/original/${path}`"
      :alt="alt"
      :class="imageClass"
      class="my-picture__image"
    />
  </picture>
</template>

<script setup>
defineProps({
  path: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  imageClass: {
    type: String,
    required: false,
    default: ''
  }
});
</script>

<style lang="scss" scoped>
.my-picture {
  display: flex;
  overflow: hidden;
}
</style>
