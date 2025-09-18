<template>
  <main class="organizer">
    <NavBreadcrumbs :breadcrumbs="breadcrumbs" />
    <div class="organizer__container">
      <h1 class="heading">
        {{ $t('organizer.title') }}
      </h1>
      <p>
        {{ $t('organizer.text') }}
      </p>
      <img src="~/assets/images/organizer.jpg" alt="organizer banner" class="organizer__image" />
      <div class="organizer__item" v-for="(item, index) in $tm('organizer.items')" :key="index">
        <h3 class="organizer__item-title">
          {{ $rt(item.title) }}
        </h3>
        <p v-if="item.text">
          {{ $rt(item.text) }}
        </p>
        <ul class="organizer__item-details">
          <li class="organizer__item-detail" v-for="role in item.roles" :key="role">
            {{ $rt(role) }}
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script setup>
const { t } = useI18n();
const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/organizer',
    label: t('nav.organizer')
  }
]);
</script>

<style lang="scss" scoped>
.organizer {
  @include section-padding-inline;
  display: flex;
  flex-direction: column;
  gap: max(3rem, 20px);
  &__item {
    border-radius: max(2rem, 16px);
    background-color: #fff;
    padding: max(3.2rem, 16px);
    display: flex;
    flex-direction: column;
    gap: max(1.2rem, 12px);
    &-title {
      font-size: max(2.4rem, 16px);
      color: $clr-very-dark-grey;
      font-weight: 700;
    }
    &-detail {
      line-height: 1.45;
    }
    &-details {
      display: flex;
      flex-direction: column;
      gap: max(1.2rem, 12px);
      list-style-type: disc;
      margin-left: max(3rem, 14px);
    }
  }
  &__image {
    border-radius: max(2rem, 16px);
  }
  &__container {
    align-self: center;
    max-width: max(61.25%, 600px);
    display: flex;
    flex-direction: column;
    gap: max(2rem, 16px);
  }
}
</style>
