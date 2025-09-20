<template>
  <div class="legal">
    <h1 class="heading">
      {{ title }}
    </h1>
    <p class="legal__text">
      {{ subtitle }}
    </p>
    <div v-for="(row, i) in content" :key="i" class="legal__box">
      <h2 class="legal__subtitle">{{ row.title }}</h2>
      <p v-if="row.subtitle" class="legal__text">{{ row.subtitle }}</p>
      <ul v-if="row.texts" class="legal__list">
        <li v-for="text in row.texts" :key="text" class="legal__text">
          {{ text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  content: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
@keyframes slide-from-left {
  from {
    transform: translateX(-70px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.legal {
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: max(16px, 3rem);
  max-width: max(900px, 32vw);
  & > * {
    animation: slide-from-left 0.7s backwards;
    @for $i from 1 through 10 {
      &:nth-child(#{$i}) {
        animation-delay: $i * 0.1s;
      }
    }
  }
  &__subtitle,
  &__title {
    color: $clr-very-dark-grey;
    font-weight: 700;
  }
  &__box {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  &__list {
    list-style: disc;
    display: flex;
    flex-direction: column;
    gap: 7px;
    li {
      margin-left: 12px;
    }
  }
  &__subtitle {
    font-size: max(20px, 2.4rem);
  }
  &__text {
    color: $clr-secondary;
    opacity: 0.8;
    font-size: max(14px, 1.7rem);
    line-height: 1.45;
  }
}
</style>
