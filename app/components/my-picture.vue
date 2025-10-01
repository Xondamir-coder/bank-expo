<template>
  <picture class="my-picture">
    <!-- 0–575 -->
    <source
      :srcset="`/images/576/${src.split('.')[0]}.avif`"
      type="image/avif"
      media="(max-width: 575px)"
    />

    <!-- 576–1023 -->
    <source
      :srcset="`/images/1024/${src.split('.')[0]}.avif`"
      type="image/avif"
      media="(min-width: 576px) and (max-width: 1023px)"
    />

    <!-- ≥1024 -->
    <source
      :srcset="`/images/1440/${src.split('.')[0]}.avif`"
      type="image/avif"
      media="(min-width: 1024px)"
    />

    <!-- Fallback original -->
    <img
      :src="`/images/original/${src}`"
      :alt="alt"
      :class="imageClass"
      class="my-picture__image"
    />
  </picture>
</template>

<script setup>
// 576
/**
 * mkdir -p ../576 && for f in *.png *.jpg *.jpeg; do
  [ -f "$f" ] && magick "$f" -resize 40% "../576/${f%.*}.avif"
done

 */

// 1024
/**
 * mkdir -p ../1024 && for f in *.png *.jpg *.jpeg; do
  [ -f "$f" ] && magick "$f" -resize 70% "../1024/${f%.*}.avif"
done
 */

// 1440
/**
 * mkdir -p ../1440 && for f in *.png *.jpg *.jpeg; do
  [ -f "$f" ] && magick "$f" "../1440/${f%.*}.avif"
done
 */

defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  imageClass: {
    type: String,
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
