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
  background: #ffffff;
  border-radius: 12px;
  z-index: 50;
  padding: max(16px, 3rem);
  display: flex;
  flex-direction: column;
  gap: max(12px, 1.6rem);
  width: max(58rem, 500px);
  @media only screen and (min-width: $bp-md) {
    right: 15px;
    bottom: 15px;
  }
  @media only screen and (max-width: $bp-md) {
    width: calc(100% - (16px * 2));
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
  }

  &__buttons {
    margin-top: max(4px, 1.4rem);
    display: flex;
    gap: max(16px, 2rem);
  }
  &__button {
    flex: 1;
    padding-block: 12px;
    font-size: max(14px, 1.6rem);
    color: #fff;
    border-radius: 12px;
    &:hover {
      transform: scale(1.02);
    }
    &:first-child {
      background-color: $clr-very-dark-grey;
      &:hover {
        background-color: $clr-darker-grey;
      }
    }
    &:last-child {
      background: $clr-yellow;
      &:hover {
        background-color: $clr-light-yellow;
      }
    }
  }
  &__title {
    font-size: max(17px, 3.2rem);
    color: $clr-very-dark-grey;
  }
  &__text {
    line-height: 1.45;
    color: rgba($clr-secondary, 0.8);
    font-size: max(14px, 1.6rem);
  }
}
</style>
