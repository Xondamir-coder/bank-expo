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
            <button class="form-modal__close" @click="showFormModal = false">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_225_8576)">
                  <path
                    d="M4 4L20 20"
                    stroke="#111827"
                    stroke-width="2.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 20L20 4"
                    stroke="#111827"
                    stroke-width="2.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_225_8576">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <p class="form-modal__text">
            Discover the leading banks and financial institutions in the industry. Their logos
            showcase innovation and excellence
          </p>
        </div>
        <form class="form-modal__form" @submit.prevent="submitForm">
          <div v-for="(row, index) in rows" :key="index" class="form-modal__row">
            <span class="form-modal__label">{{ row.label }}</span>
            <input
              v-model="row.model.value"
              :type="row.type"
              :placeholder="row.placeholder"
              class="form-modal__input"
              required
              @input="row.type === 'tel' ? checkTel() : null"
            />
          </div>
          <button
            class="form-modal__button"
            type="submit"
            :disabled="!name || !organization || !tel"
          >
            <span>Send request</span>
            <IconsUpRightArrow class="form-modal__arrow" />
          </button>
          <div class="form-modal__bottom">
            Регистрируясь, вы подтверждаете, что прочитали и согласны с
            <br />
            <NuxtLink :to="$localePath('/policy')">Политикой конфиденциальности.</NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const { $lenis } = useNuxtApp();
const { t } = useI18n();

const name = ref('');
const tel = ref('');
const organization = ref('');

const showSuccessModal = useState('showSuccessModal', () => false);
const showFormModal = useState('showFormModal', () => false);

const rows = computed(() => [
  {
    label: t('form.full-name.label'),
    placeholder: t('form.full-name.placeholder'),
    type: 'text',
    model: name
  },
  {
    label: t('form.mobile-phone.label'),
    placeholder: t('form.mobile-phone.placeholder'),
    type: 'tel',
    model: tel
  },
  {
    label: t('form.organization.label'),
    placeholder: t('form.organization.placeholder'),
    type: 'text',
    model: organization
  }
]);

watch(showFormModal, () => {
  if (showFormModal.value) $lenis.stop();
  else $lenis.start();
});

const checkTel = () => {
  const regex = /^[+0-9]+$/;
  if (!regex.test(tel.value)) {
    tel.value = tel.value.replace(/[a-zA-Z]/g, '');
  }
};
const submitForm = () => {
  showSuccessModal.value = true;
  showFormModal.value = false;
  setTimeout(() => {
    showSuccessModal.value = false;
  }, 3000);
};
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
  &__close {
    width: max(42px, 5rem);
    aspect-ratio: 1;
    background: #fafafa;
    border: 1px solid #cbd5e0;
    border-radius: max(8px, 1.2rem);
    @include flex-center;
    svg {
      width: 50%;
    }
  }
  &__bottom {
    font-size: max(12px, 1.6rem);
    font-weight: 500;
    line-height: 1.2;
    color: #687588;
    a {
      text-decoration: underline;
      color: #005fcc;
    }
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
  &__input {
    font-weight: 400;
    font-size: 16px;
    padding-block: max(12px, 1.8rem);
    padding-inline: max(16px, 2rem);
    border: 1px solid #cbd5e0;
    border-radius: max(10px, 1.2rem);
    transition: border-color 0.3s;
    &:user-invalid {
      border-color: #ff0000;
    }
    &:user-valid {
      border-color: #008b5f;
    }
    &:focus {
      border-color: $clr-yellow;
    }
    &::placeholder {
      opacity: 0.6;
    }
  }
  &__button {
    background-color: $clr-yellow;
    padding-block: max(12px, 1.7rem);
    color: #fff;
    font-size: max(16px, 1.7rem);
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    border-radius: max(10px, 1.2rem);
    transition: background-color 0.3s, color 0.3s;
    fill: #fff;
    &:disabled {
      background-color: #e9eaec;
      color: #a0aec0;
      fill: #a0aec0;
    }
    &:not(:disabled):hover {
      background-color: #fff;
      color: $clr-yellow;
      svg {
        fill: $clr-yellow;
      }
    }
  }
  &__arrow {
    width: 24px;
  }
  &__form {
    display: flex;
    flex-direction: column;
    gap: max(20px, 2.4rem);
  }
  &__row {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  &__label {
    font-weight: 700;
    font-size: max(14px, 1.7rem);
    opacity: 0.8;
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
