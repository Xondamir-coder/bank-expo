<template>
  <Transition name="slide">
    <div
      v-if="showFormModal"
      class="form-modal-container"
      :data-lenis-prevent="true"
      @click.self="showFormModal = false"
    >
      <div class="form-modal">
        <div class="form-modal__top">
          <div class="form-modal__top-top">
            <h2 class="form-modal__title">{{ $t('contact-us') }}</h2>
            <IconButton @click="showFormModal = false">
              <IconsCloseX />
            </IconButton>
          </div>
          <p class="form-modal__text">
            {{ $t('form-modal.text') }}
          </p>
        </div>
        <AppForm class="form--modal" />
      </div>
    </div>
  </Transition>
</template>

<script setup>
const showFormModal = useState('showFormModal', () => false);
useState('showSuccessModal', () => false);
</script>

<style lang="scss" scoped>
.form-modal {
  width: 39.5%;
  background: #ffffff;
  padding-block: max(20px, 7rem);
  padding-inline: max(16px, 7rem);
  color: $clr-secondary;
  display: flex;
  flex-direction: column;
  gap: max(30px, 6rem);
  transition: transform 0.5s;

  @media only screen and (max-width: $bp-lg) {
    width: 100%;
  }

  &-container {
    position: fixed;
    inset: 0;
    height: 100%;
    width: 100%;
    display: grid;
    justify-items: flex-end;
    z-index: 102;
    background-color: rgba(#000, 0.7);
    overflow-y: auto;
  }

  &__top {
    display: flex;
    flex-direction: column;
    gap: max(8px, 1.6rem);

    &-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__text {
    font-size: max(14px, 1.6rem);
    line-height: 1.45;
    opacity: 0.8;
    max-width: 80%;

    @media screen and (max-width: $bp-md) {
      max-width: 100%;
    }
  }

  &__title {
    font-weight: 700;
    font-size: max(20px, 3.6rem);
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: background 0.5s;
}
.slide-enter-from,
.slide-leave-to {
  background-color: transparent;
}
.slide-enter-from > *,
.slide-leave-to > * {
  transform: translateX(100%);
}
</style>
