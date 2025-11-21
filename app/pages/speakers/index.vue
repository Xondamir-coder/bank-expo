<template>
  <BreadcrumbsLayout :breadcrumbs>
    <section class="speakers">
      <div class="speakers__top">
        <h1 class="heading">{{ $t('speakers.title') }}</h1>
        <p>{{ $t('speakers.text') }}</p>
      </div>
      <SpinnerLoader v-if="!speakers" />
      <nav v-else-if="speakers.length" class="speakers__list">
        <li v-for="speaker in speakers" :key="speaker?.id" class="speakers__item-container">
          <NuxtLink :to="$localePath(`/speakers/${speaker?.id}`)" class="speakers__item">
            <div class="speakers__item-image-container">
              <img
                :src="`${DOMAIN_URL}/${speaker?.image}`"
                :alt="speaker?.[`name_${$i18n.locale}`]"
                class="speakers__item-image"
              />
            </div>
            <div class="speakers__item-content">
              <h3 class="heading-28-18">
                {{ speaker?.[`name_${$i18n.locale}`] }}
              </h3>
              <p>{{ speaker?.[`role_${$i18n.locale}`] }}</p>
            </div>
          </NuxtLink>
        </li>
      </nav>
      <h3 v-else>{{ $t('no-results') }}</h3>
    </section>
    <FormSection :title="$t('become-speaker')" />
  </BreadcrumbsLayout>
</template>

<script setup>
const apiStore = useApiStore();
const { speakers } = storeToRefs(apiStore);

const { t } = useI18n();
const breadcrumbs = computed(() => [
  {
    label: t('nav.home'),
    to: '/'
  },
  {
    label: t('nav.speakers'),
    to: '/speakers'
  }
]);

useGSAPAnimate({ selector: '.speakers__top>*', base: { x: -25 } });
useGSAPAnimate({ selector: '.speakers__item-container', base: { y: 20, rotateY: -35 } });
useMySEO('speakers');
</script>

<style lang="scss" scoped>
.speakers {
  display: flex;
  flex-direction: column;
  gap: max(3rem, 20px);
  &__top {
    display: flex;
    flex-direction: column;
    gap: max(2rem, 10px);
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: max(2rem, 8px);
    align-items: flex-start;
    pointer-events: none;
    & > * {
      pointer-events: all;
    }
    &:hover {
      .speakers__item-image {
        transform: scale(1.1);
      }
    }
    &-container {
      display: flex;
    }
    &-image {
      transition: transform 0.3s;
      &-container {
        width: 64.1%;
        border-radius: max(1.6rem, 16px);
        overflow: hidden;
        display: flex;
        align-items: flex-start;
        @media screen and (max-width: $bp-sm) {
          width: 45.7%;
        }
      }
    }
    &-content {
      display: flex;
      flex-direction: column;
      gap: max(1.1rem, 4px);
    }
  }
  &__list {
    list-style: none;
    display: grid;
    gap: max(3rem, 20px);
    grid-template-columns: repeat(auto-fill, minmax(max(40rem, 250px), 1fr));
  }
}
</style>
