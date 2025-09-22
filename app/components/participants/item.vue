<template>
  <NuxtLink class="participant" :to="$localePath(`/participants/${participant.slug}`)">
    <div class="participant__left">
      <div class="participant__icon-container">
        <component :is="participant.icon" class="participant__icon" data-original />
      </div>
      <h3 class="participant__title">
        {{ participant.name }}
      </h3>
    </div>
    <div class="participant__details">
      <div v-for="detail in details" :key="detail.name" class="participant__detail">
        <h4 class="participant__detail-title">
          {{ detail.name }}
        </h4>
        <p v-if="Number.isInteger(detail.data)" class="participant__detail-text">
          {{ detail.data }}{{ Number.isInteger(detail.data) ? '%' : '' }}
        </p>
        <p v-else class="participant__detail-text">
          {{ detail.data }}
        </p>
      </div>
    </div>
    <button target="_blank" class="participant__link">
      <span>{{ t('participant.go-to-site') }}</span>
      <IconsUpRightArrow class="participant__arrow" />
    </button>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  participant: {
    required: true,
    type: Object
  }
});

const { t } = useI18n();
const details = computed(() => [
  {
    name: t('participant.phone-number'),
    data: props.participant.tel
  },
  {
    name: t('participant.loan-interest'),
    data: props.participant.loanInterest
  },
  {
    name: t('participant.deposit-interest'),
    data: props.participant.depositInterest
  }
]);
</script>

<style lang="scss" scoped>
.participant {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border: 1px solid #e9eaec;
  backdrop-filter: blur(30px);
  border-radius: max(16px, 2.4rem);
  padding: max(1.6rem, 16px);
  gap: max(1rem, 10px);
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 1.2px 27px 0px #0000001a;
  }
  // @media only screen and (min-width: $bp-lg) {
  //   transition: opacity 0.7s, transform 0.7s;
  //   @for $i from 1 through 20 {
  //     &:nth-child(#{$i}) {
  //       transition-delay: $i * 0.07s;
  //     }
  //   }
  // }
  @media only screen and (max-width: $bp-md) {
    gap: 16px;
    flex-direction: column;
    align-items: flex-start;
  }
  &__left {
    display: flex;
    align-items: center;
    gap: max(1.6rem, 16px);
  }
  &__arrow {
    fill: inherit;
    width: max(20px, 2.4rem);
  }
  &__details {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-basis: 60%;
    justify-content: space-between;
    @media only screen and (max-width: $bp-md) {
      flex-basis: initial;
      align-self: stretch;
      flex-wrap: wrap;
    }
    @media only screen and (max-width: $bp-sm) {
      flex-direction: column;
      align-items: stretch;
    }
  }
  &__link {
    align-self: center;
    font-weight: 600;
    font-size: max(1.6rem, 16px);
    color: #0f8bfd;
    fill: #0f8bfd;
    text-decoration: underline;
    display: flex;
    align-items: center;
    gap: max(1rem, 10px);
  }
  &__detail {
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media only screen and (max-width: $bp-sm) {
      flex-direction: row;
      justify-content: space-between;
    }
    &-title {
      font-weight: 400;
      color: #687588;
      font-size: 14px;
      @media only screen and (max-width: $bp-sm) {
        font-weight: 500;
      }
    }
    &-text {
      font-size: max(1.6rem, 16px);
      font-weight: 700;
    }
  }
  &__title {
    font-size: max(2rem, 20px);
    font-weight: 700;
  }
  &__icon-container {
    width: max(6rem, 60px);
    aspect-ratio: 1;
    background: #ffffff;
    border: 1px solid #e9eaec;
    border-radius: max(1.2rem, 12px);
    @include flex-center;
  }
}
</style>
