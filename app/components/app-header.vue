<template>
  <header
    class="header"
    :class="{ 'header--open': showMenu, 'header--home': $route.name.includes('index') }"
  >
    <button
      class="header__hamburger"
      :class="{ 'header__hamburger--open': showMenu }"
      @click="showMenu = !showMenu"
    >
      <div class="header__hamburger-wrapper">
        <div class="header__hamburger-container">
          <div class="header__hamburger-line header__hamburger-line--1" />
          <div class="header__hamburger-line header__hamburger-line--2" />
          <div class="header__hamburger-line header__hamburger-line--3" />
        </div>
      </div>
    </button>
    <div class="header__col header__col--left">
      <NuxtLink :to="$localePath('/')" class="header__logo-container">
        <Logo :is-white="route.name.includes('index') || showMenu" />
      </NuxtLink>
      <nav class="header__nav">
        <NuxtLink
          v-for="(link, index) in links"
          :key="index"
          :to="$localePath(link.to)"
          class="header__link"
          active-class="header__link--active"
        >
          <span class="header__link-label">
            {{ link.label }}
          </span>
        </NuxtLink>
      </nav>
    </div>
    <div class="header__col header__col--right">
      <div class="flex header__col-inside">
        <a class="header__social" target="_blank" href="#">
          <IconsTelegram class="header__social-icon" />
        </a>
        <a class="header__social" target="_blank" href="#">
          <IconsInstagram class="header__social-icon" />
        </a>
        <a class="header__link" href="mailto:Info@expobanking">
          <span class="header__link-label"> Info@expobanking </span>
        </a>
        <button class="header__button" @click="showFormModal = true">
          {{ $t('contact-us') }}
        </button>
      </div>
      <div class="header__lang">
        <button class="header__lang-inside" @click="toggleDropdown">
          <IconsGlobe class="header__lang-icon" />
          <span>{{ $i18n.locale.toUpperCase() }}</span>
        </button>
        <div class="header__lang-dropdown" :class="{ active: showLanguageDropdown }">
          <button
            v-for="(code, index) in localeCodes"
            :key="index"
            class="header__lang-button"
            :class="{ active: code === $i18n.locale }"
            @click="changeLocale(code)"
          >
            {{ code }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const route = useRoute();
const { t, localeCodes, setLocale } = useI18n();

const links = computed(() => [
  {
    to: '/about',
    label: t('nav.about'),
    isMulti: true
  },
  {
    to: '/participants',
    label: t('nav.participants')
  },
  {
    to: '/speakers',
    label: t('nav.speakers')
  },
  {
    to: '/partners',
    label: t('nav.partners')
  },
  {
    to: '/sponsors',
    label: t('nav.sponsors')
  },
  {
    to: '/media',
    label: t('nav.media'),
    isMulti: true
  }
]);

const showLanguageDropdown = ref(false);

const showFormModal = useState('showFormModal');
const showMenu = useState('showMenu');

const toggleDropdown = () => (showLanguageDropdown.value = !showLanguageDropdown.value);
const changeLocale = code => {
  setLocale(code);
  toggleDropdown();
};

onMounted(() => {
  document.addEventListener('click', e => {
    if (e.target.closest('.header__lang') || !showLanguageDropdown.value) return;
    toggleDropdown();
  });
});
</script>

<style lang="scss" scoped>
@keyframes slide-from-top {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@mixin col-item-white {
  background-color: #fff;
  color: #323b49;
  border: 1px solid #e9eaec;
}
@mixin col-item-dark {
  background: #011224cc;
  border: 1px solid #ffffff1a;
  color: #ffffff;
}

@mixin item {
  font-size: max(1.7rem, 14px);
  background-color: #f1f2f4;
  @include flex-center;
}
@mixin item-dark {
  background-color: #ffffff1a;
}

.header {
  padding-block: max(2rem, 16px);
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  gap: max(1rem, 10px);
  z-index: 100;
  animation: slide-from-top 0.7s 0.2s backwards;
  transition: background-color 0.6s;
  @include section-padding-inline;

  @media only screen and (max-width: $bp-md) {
    align-items: stretch;
    justify-content: initial;
  }
  &--open {
    background-color: #000c1a;
  }
  &--home,
  &--open {
    .header__social {
      @include social-icon;
    }
    .header__col > * {
      @include col-item-dark;
    }
    .header__link,
    .header__lang-inside {
      @include item-dark;
    }
    .header__hamburger {
      background: #ffffff05;
      &-wrapper {
        background: #ffffff1a;
      }
      &-line {
        background: #fff;
      }
    }
    .header__lang-dropdown {
      background-color: #011224;
      border-color: rgba(255, 255, 255, 0);
    }
  }

  &__hamburger {
    padding: max(0.5rem, 5px);
    border-radius: max(0.7rem, 7px);
    aspect-ratio: 1;
    background-color: #fff;

    @media only screen and (min-width: $bp-xxl) {
      display: none;
    }

    &--open .header__hamburger-line {
      &--3 {
        opacity: 0;
      }
      &--2 {
        transform: rotate(45deg);
      }
      &--1 {
        transform: rotate(-45deg);
        transform-origin: 91% 125%;
      }
    }
    &-wrapper {
      padding: max(0.8rem, 8px);
      border-radius: inherit;
      background-color: #e9eaec;
    }

    &-container {
      width: max(2.2rem, 22px);
      height: max(2.2rem, 22px);
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    &-line {
      width: inherit;
      height: 4px;
      background-color: #323b49;
      align-self: center;
      transition: background-color 0.3s, opacity 0.3s, transform 0.4s;
    }
  }

  &__lang {
    padding: max(0.6rem, 5px);
    font-size: max(1.7rem, 14px);
    border-radius: max(0.9rem, 9px);
    position: relative;
    display: flex;
    align-items: stretch;

    &-dropdown {
      position: absolute;
      z-index: 5;
      width: 100%;
      left: 0;
      top: calc(100% + 7px);
      display: flex;
      flex-direction: column;
      box-shadow: 0px 2px 32px 0px #0000001f;
      border-radius: max(1rem, 10px);
      min-width: 120%;
      background-color: #ffffff;
      transform: translateY(10px);
      opacity: 0;
      pointer-events: none;
      transition: transform 0.3s, opacity 0.3s;
      &.active {
        transform: translateY(0);
        opacity: 1;
        pointer-events: all;
      }
    }
    &-button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-block: max(1.4rem, 14px);
      padding-inline: max(1.2rem, 12px);
      text-transform: uppercase;
      &::after {
        content: url('~/assets/check.svg');
        aspect-ratio: 1;
        display: flex;
        transform: scale(0);
        transition: transform 0.3s;
      }
      &.active::after {
        transform: scale(1);
      }
    }

    &-icon {
      width: max(19px, 2.4rem);
      aspect-ratio: 1;
      fill: currentColor;
      transition: fill 0.3s;
    }

    &-inside {
      @include item;
      font-weight: 400;
      display: flex;
      align-items: center;
      gap: max(5px, 1rem);
      padding-block: max(8px, 1rem);
      padding-inline: max(1.2rem, 12px);
      border-radius: max(7px, 0.7rem);
      transition: color 0.3s;

      &:hover {
        .header__lang-icon {
          fill: $clr-yellow;
        }
        color: $clr-yellow;
      }
    }
  }

  &__social {
    @include social-icon(#f1f2f4);
  }

  &__nav {
    display: flex;
    gap: 8px;

    @media only screen and (max-width: $bp-xxl) {
      display: none;
    }
  }

  &__link {
    padding-block: max(1rem, 8px);
    padding-inline: max(2.4rem, 18px);
    border-radius: max(1rem, 10px);
    transition: color 0.3s;
    @include item;
    &--active {
      background: $clr-yellow;
      color: #fafafa;
    }
    &:hover:not(.header__link--active) {
      color: $clr-yellow;
      .header__link-label::after {
        height: 4px;
      }
    }

    &-label {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 0px;
        background-color: $clr-yellow;
        bottom: -7px;
        left: 50%;
        transform: translateX(-50%);
        transition: height 0.2s;
      }
    }
  }

  &__button {
    border-radius: max(1rem, 10px);
    background-color: $clr-yellow;
    padding-block: max(1.2rem, 12px);
    padding-inline: max(2.4rem, 20px);
    color: #fff;
    font-size: max(1.7rem, 14px);
    transition: color 0.3s, background-color 0.3s;
    &:hover {
      color: $clr-yellow;
      background-color: #fff;
    }
  }

  &__col {
    display: flex;
    font-weight: 500;

    & > * {
      backdrop-filter: blur(30px);
      padding: max(0.6rem, 5px);
      border-radius: max(1.2rem, 10px);

      @include col-item-white();
    }

    &-inside {
      gap: 8px;

      @media only screen and (max-width: $bp-xxl) {
        display: none;
      }
    }

    &--left {
      gap: 24px;

      @media only screen and (max-width: $bp-md) {
        flex: 1;
        align-self: stretch;
        justify-content: center;
      }
    }

    &--right {
      gap: 18px;
    }
  }

  &__logo {
    &-container {
      width: max(22.1rem, 157px);
      aspect-ratio: 248/28;
      padding-inline: max(1.6rem, 12px);
      @include flex-center;

      @media only screen and (max-width: 476px) {
        backdrop-filter: none;
      }
    }
  }
}
</style>
