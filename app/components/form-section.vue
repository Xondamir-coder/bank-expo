<template>
  <section class="form-section">
    <div class="form-section__content">
      <div class="form-section__top">
        <h2 class="heading">
          {{ $t('register-online') }}
        </h2>
        <p>
          {{ $t('form-section.text') }}
        </p>
      </div>
      <AppForm />
    </div>
    <div class="form-section__right">
      <MyPicture src="folder.png" alt="folder" class="form-section__image" />
      <svg
        class="form-section__pattern"
        viewBox="0 0 844 490"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 138.664C0 129.926 4.68084 121.924 12.4311 117.887C66.4514 89.7474 284.593 -17.665 429.5 2.99998C577.432 24.0963 779.433 124.592 831.405 151.409C839.263 155.464 844 163.517 844 172.359V466C844 479.255 833.255 490 820 490H24C10.7452 490 0 479.255 0 466V138.664Z"
          fill="#F1F2F4"
        />
      </svg>
    </div>
  </section>
</template>

<script setup>
useGSAPAnimate({ selector: '.form-section__top>*', base: { y: 25 } });
useGSAPAnimate({ selector: '.form__row', base: { y: 25 } });
useGSAPAnimate({ selector: '.form__bottom', base: { y: 25 } });
useGSAPAnimate({ selector: '.form-section__image', base: { scale: 0.9 } });
</script>

<style lang="scss" scoped>
.form-section {
  margin-top: max(3rem, 30px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 8rem;
  background-color: #fff;
  padding: max(6rem, 16px);
  border-radius: max(3.2rem, 16px);
  @media screen and (max-width: $bp-lg) {
    grid-template-columns: 1fr;
    margin-top: 0;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: max(3rem, 30px);
  }
  &__image {
    position: absolute;
    width: 78.5%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
  &__pattern {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  &__right {
    position: relative;
    @media screen and (max-width: $bp-lg) {
      display: none;
    }
  }
  &__top {
    display: flex;
    flex-direction: column;
    gap: max(2rem, 12px);
  }
}
</style>
