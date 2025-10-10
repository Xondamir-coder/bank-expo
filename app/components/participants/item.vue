<template>
  <NuxtLink class="participant" :to="$localePath(`/participants/${participant.id}`)">
    <div class="participant__left">
      <div class="participant__icon-container">
        <img :src="`${DOMAIN_URL}/${participant.logo}`" class="participant__icon" />
      </div>
      <h3 class="participant__title">
        {{ participant[`name_${$i18n.locale}`] }}
      </h3>
    </div>
    <div v-for="detail in details" :key="detail.name" class="participant__detail">
      <h4 class="participant__detail-title">
        {{ detail.name }}
      </h4>
      <p class="participant__detail-text">
        {{ detail.data }}{{ Number.isInteger(detail.data) ? '%' : '' }}
      </p>
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
    data: props.participant.phoneNumber
  },
  {
    name: t('participant.loan-interest'),
    data: props.participant.loan
  },
  {
    name: t('participant.deposit-interest'),
    data: props.participant.deposit
  }
]);
</script>

<style lang="scss" scoped>
.participant {
  background: #ffffff;
  border: 1px solid #e9eaec;
  backdrop-filter: blur(30px);
  border-radius: max(16px, 2.4rem);
  padding: max(1.6rem, 16px);
  gap: max(1.2rem, 10px);
  display: grid;
  grid-template-columns: 1.32fr repeat(3, 1fr) max-content;
  align-items: center;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 1.2px 27px 0px #0000001a;
  }
  @media screen and (max-width: 1300px) {
    grid-template-columns: 1.32fr 1fr 1fr;
  }
  @media only screen and (max-width: $bp-md) {
    gap: 16px;
    grid-template-columns: 1.32fr 1fr;
  }
  @media screen and (max-width: 580px) {
    grid-template-columns: 1fr;
  }
  &__left {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max(6rem, 60px) 1fr;
    align-items: center;
    gap: max(1.6rem, 16px);
  }
  &__arrow {
    fill: inherit;
    width: max(20px, 2.4rem);
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
      align-items: baseline;
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
    aspect-ratio: 1;
    background: #ffffff;
    border: 1px solid #e9eaec;
    border-radius: max(1.2rem, 12px);
    @include flex-center;
  }
}
</style>
