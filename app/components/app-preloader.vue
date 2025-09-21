<template>
  <Transition name="fade-out">
    <div v-if="showPreloader" class="preloader">
      <PreloaderPattern class="preloader__pattern" />
      <LogoBig class="preloader__big" />
      <div class="preloader__bottom">
        <div ref="progressEl" class="preloader__progress">{{ progress }}%</div>
        <div class="preloader__bar--outer">
          <div ref="barEl" class="preloader__bar--inner" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const TIME_TO_LOAD = 3_000; // ms
const MAX_PROGRESS = 101;

const progress = ref(0);
const showPreloader = ref(true);

const barEl = ref(null);
const progressEl = ref(null);

const toggleHidden = () => {
  document.body.classList.remove('hidden');
  document.querySelectorAll('.hidden')?.forEach(el => {
    el.classList.remove('hidden');
  });
};

onMounted(() => {
  const xVal = window.innerWidth > 576 ? 'calc(80vw - 117px)' : 'calc(100vw - 40px - 90px)';

  barEl.value?.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], {
    duration: TIME_TO_LOAD,
    fill: 'forwards',
    easing: 'ease-in-out'
  });

  progressEl.value?.animate(
    [{ transform: 'translateX(0)' }, { transform: `translateX(${xVal})` }],
    { duration: TIME_TO_LOAD, fill: 'forwards', easing: 'ease-in-out' }
  );

  const step = TIME_TO_LOAD / MAX_PROGRESS;
  const interval = setInterval(() => {
    progress.value++;
    if (progress.value >= MAX_PROGRESS) {
      clearInterval(interval);
      showPreloader.value = false;
      setTimeout(toggleHidden, 100);
    }
  }, step);
});
</script>

<style lang="scss" scoped>
@keyframes logo-appear {
  from {
    scale: 0.9;
    opacity: 0;
  }
}
@keyframes slide-from-bottom {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
}

.fade-out-enter-active,
.fade-out-leave-active {
  transition: all 0.5s;
}

.fade-out-enter-from,
.fade-out-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
.preloader {
  position: fixed;
  inset: 0;
  z-index: 101;
  background-color: #001833;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: max(60px, 15rem);
  overflow: hidden;
  & > *:not(.preloader__pattern) {
    z-index: 2;
  }
  &__bottom {
    animation: slide-from-bottom 0.5s;
    display: flex;
    flex-direction: column;
    gap: max(10px, 2rem);
    width: 80%;
    @media only screen and (max-width: $bp-sm) {
      width: calc(100% - 40px);
    }
  }
  &__progress {
    align-self: flex-start;
    font-weight: 900;
    font-size: max(32px, 5.4rem);
    color: $clr-yellow;
  }
  &__bar {
    &--outer {
      overflow: hidden;
      height: 6px;
      background-color: #003066;
      position: relative;
    }
    &--inner {
      transform-origin: left;
      position: absolute;
      inset: 0;
      background-color: $clr-yellow;
      transform: scaleX(0);
      // animation: fill-bar 3s;
    }
  }
  &__big {
    fill: #fff;
    width: max(27.7%, 230px);
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    z-index: 5;
    animation: logo-appear 0.5s;
  }
  &__pattern {
    pointer-events: none;
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    translate: -50% -50%;

    @media screen and (max-width: $bp-xl) {
      width: auto;
      height: 100%;
    }
  }
}
</style>
