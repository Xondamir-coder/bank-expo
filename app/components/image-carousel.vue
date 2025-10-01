<template>
  <div class="image-carousel">
    <Transition name="fade">
      <MyPicture
        :key="images[activeImage]"
        :src="images[activeImage]"
        alt="carousel"
        class="image-carousel__image"
      />
    </Transition>
    <div class="image-carousel__bars">
      <div
        v-for="(_, index) in images.length - 1"
        :key="index"
        class="image-carousel__bar"
        :class="{ active: index + 1 <= activeImage }"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  interval: {
    type: Number,
    default: 5000
  },
  autoPlay: {
    default: true,
    type: Boolean
  }
});

let myInterval;
const activeImage = ref(0);

onMounted(() => {
  if (props.autoPlay) {
    myInterval = setInterval(() => {
      activeImage.value = (activeImage.value + 1) % props.images.length;
    }, props.interval);
  }
});

onUnmounted(() => {
  clearInterval(myInterval);
});
</script>

<style lang="scss" scoped>
.image-carousel {
  position: relative;
  display: grid;
  overflow: hidden;
  border-radius: max(2.4rem, 12px);

  &__bars {
    align-self: flex-end;
    display: grid;
    grid-auto-flow: column;
    grid-auto-rows: max(0.8rem, 8px);
    grid-auto-columns: 1fr;
    gap: max(2.5rem, 8px);
    margin: max(2.4rem, 12px);
  }
  &__bar {
    position: relative;
    border-radius: max(0.8rem, 8px);
    background: #ffffff29;
    overflow: hidden;
    backdrop-filter: blur(10px);
    &.active::after {
      transform: scaleX(1);
    }
    @media screen and (max-width: $bp-md) {
      border-radius: 16px;
    }
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 1.5s;
      background-color: #fff;
    }
  }
  & > * {
    grid-area: 1/1/2/2;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
