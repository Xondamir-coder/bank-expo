<template>
  <div class="info-card">
    <h3 class="info-card__title">
      {{ $rt(info.title) }}
    </h3>
    <ul v-if="info.details" class="info-card__details">
      <li v-for="(detail, i) in info.details" :key="i" class="info-card__detail">
        {{ $rt(detail) }}
      </li>
    </ul>
    <ul v-if="info.list" class="info-card__list">
      <li v-for="(item, i) in info.list" :key="i" class="info-card__item">
        <div class="info-card__item-box">
          <component :is="item.icon" class="info-card__item-icon" />
        </div>
        <p>{{ $rt(item.text) }}</p>
      </li>
    </ul>
    <p v-if="info.text">
      {{ $rt(info.text) }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  info: {
    required: true,
    type: Object
  }
});
</script>

<style lang="scss" scoped>
.info-card {
  border-radius: max(2rem, 16px);
  background-color: #fff;
  padding: max(3.2rem, 16px);
  display: flex;
  flex-direction: column;
  gap: max(1.2rem, 12px);
  &__list {
    display: flex;
    flex-direction: column;
    gap: max(1.2rem, 12px);
  }
  &__item {
    display: flex;
    align-items: center;
    gap: max(1.2rem, 12px);
    &-text {
      font-weight: 500;
    }
    &-box {
      @include flex-center;
      background-color: $clr-light-white;
      border-radius: max(1rem, 8px);
      width: max(4.4rem, 36px);
      height: max(4.4rem, 36px);
    }
    &-icon {
      width: 54.454545%;
      fill: $clr-darker-grey;
    }
  }
  &__title {
    font-size: max(2.4rem, 16px);
    color: $clr-very-dark-grey;
    font-weight: 700;
  }
  &__detail {
    line-height: 1.45;
  }
  &__details {
    display: flex;
    flex-direction: column;
    gap: max(1.2rem, 12px);
    list-style-type: disc;
    margin-left: max(3rem, 14px);
  }
}
</style>
