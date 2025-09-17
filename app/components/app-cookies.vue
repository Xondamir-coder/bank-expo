<template>
  <Transition name="slide">
    <div v-if="!isClosed" class="cookies">
      <h2 class="cookies__title">Cookies advice</h2>
      <p class="cookies__text">
        Cookies are small text files stored on your device when you visit a website. They are widely
        used to enhance user experience by remembering your preferences, enabling functionalities,
        and providing insights into website performance.
      </p>
      <div class="cookies__buttons">
        <button class="cookies__button" @click="toggleIsClosed('reject')">Reject</button>
        <button class="cookies__button" @click="toggleIsClosed('accept')">Accept</button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const isClosed = ref(false);

const toggleIsClosed = state => {
  isClosed.value = !isClosed.value;
  localStorage.setItem('cookies', state);
};

onMounted(() => {
  const cookies = localStorage.getItem('cookies');
  if (cookies) isClosed.value = true;
});
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
.cookies {
  position: fixed;
  right: 15px;
  bottom: 15px;
  background: #ffffff;
  border-radius: 12px;
  z-index: 50;
  padding: clamp(16px, 3vw, 30px);
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 1vw, 16px);
  max-width: 580px;
  @media only screen and (max-width: $bp-md) {
    width: calc(100% - 16px * 2);
    left: 16px;
    right: 16px;
    bottom: 16px;
  }

  &__buttons {
    margin-top: clamp(4px, 1vw, 14px);
    display: flex;
    gap: clamp(16px, 2vw, 20px);
  }
  &__button {
    flex: 1;
    padding-block: 12px;
    font-size: clamp(14px, 1vw, 16px);
    color: #fff;
    border-radius: 12px;
    &:first-child {
      background-color: #111827;
    }
    &:last-child {
      background: $clr-yellow;
    }
  }
  &__title {
    font-size: clamp(17px, 3vw, 32px);
    color: #111827;
  }
  &__text {
    line-height: 1.45;
    color: rgba($clr-secondary, 0.8);
    font-size: clamp(12px, 1vw, 16xp);
  }
}
</style>
