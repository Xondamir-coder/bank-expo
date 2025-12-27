<template>
  <Transition name="fade">
    <div v-if="showMenu" class="menu" :data-lenis-prevent="true">
      <nav class="menu__links">
        <NuxtLink
          v-for="link in allLinks"
          :key="link.to"
          class="menu__link"
          :to="$localePath(link.to)"
          @click="showMenu = false"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
      <div class="menu__bottom">
        <a class="menu__social" target="_blank" href="#">
          <IconsTelegram class="menu__social-icon" />
        </a>
        <a class="menu__social" target="_blank" href="#">
          <IconsInstagram class="menu__social-icon" />
        </a>
        <a class="menu__link menu__link--email" href="mailto:Info@expobanking">Info@expobanking</a>
        <button
          class="menu__button"
          @click="
            showFormModal = true;
            showMenu = false;
          "
        >
          {{ $t('contact-us') }}
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const { allLinks } = useLinks();

const showFormModal = useState('showFormModal');
const showMenu = useState('showMenu', () => false);
</script>

<style lang="scss" scoped>
.menu {
  $duration: 0.6s;
  max-height: calc(100vh - 80px);
  overflow-y: auto;
  position: fixed;
  inset: 0;
  top: 80px;
  color: #fff;
  background-color: #000c1a;
  z-index: 99;
  padding-inline: 16px;
  padding-top: 30px - 16px;
  padding-bottom: 30px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: opacity $duration;
  &__button {
    padding-block: 12px;
    text-align: center;
    background-color: $clr-yellow;
    font-size: 17px;
    font-weight: 500;
    border-radius: 10px;
    grid-column: 1 / span 3;
  }
  &__bottom {
    display: grid;
    grid-auto-columns: max-content max-content 1fr;
    row-gap: 10px;
    column-gap: 8px;
  }
  &__social {
    @include social-icon;
  }
  &__link {
    font-size: 17px;
    font-weight: 500;
    background: #ffffff1a;
    padding-block: 12px;
    text-align: center;
    border-radius: inherit;
    &--email {
      border-radius: 10px;
    }
  }
  &__links,
  &__bottom {
    animation: slide-from-bottom-50 $duration backwards;
  }
  &__links {
    background: #011224cc;
    border: 1px solid #ffffff1a;
    backdrop-filter: blur(30px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 10px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
