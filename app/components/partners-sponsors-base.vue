<template>
  <BreadcrumbsLayout :breadcrumbs>
    <div class="base">
      <CategoryFilter :filters="filters" @filter="filterBase" />
      <div class="base__list">
        <NuxtLink
          v-for="(item, index) in items"
          :key="index"
          class="base__item"
          :to="$localePath(`/${$route.name.split('___')[0]}/${index}`)"
        >
          <component :is="item" class="base__icon" data-original />
        </NuxtLink>
      </div>
      <FormSection />
    </div>
  </BreadcrumbsLayout>
</template>

<script setup>
import IconsBank from '~/components/icons/bank.vue';
import IconsBank3 from '~/components/icons/bank-3.vue';
import IconsBank6 from '~/components/icons/bank-6.vue';
import IconsBank9 from '~/components/icons/bank-9.vue';
import IconsBank10 from '~/components/icons/bank-10.vue';
import IconsBank11 from '~/components/icons/bank-11.vue';
import IconsBank13 from '~/components/icons/bank-13.vue';
import IconsBank14 from '~/components/icons/bank-14.vue';
import IconsBank17 from '~/components/icons/bank-17.vue';
import IconsBank18 from '~/components/icons/trast-bank.vue';
import IconsBank19 from '~/components/icons/ziraat-bank.vue';
import IconsBank20 from '~/components/icons/visa.vue';
import IconsBank21 from '~/components/icons/mastercard.vue';

// data
const { tm, rt } = useI18n();
const filters = computed(() => tm('category-filter.items').map(item => rt(item)));
const items = [
  IconsBank,
  IconsBank3,
  IconsBank6,
  IconsBank9,
  IconsBank10,
  IconsBank11,
  IconsBank13,
  IconsBank14,
  IconsBank17,
  IconsBank18,
  IconsBank19,
  IconsBank20,
  IconsBank21,
  IconsBank,
  IconsBank3,
  IconsBank6,
  IconsBank9,
  IconsBank10,
  IconsBank11,
  IconsBank13,
  IconsBank14,
  IconsBank17,
  IconsBank18,
  IconsBank19,
  IconsBank20,
  IconsBank21
];

const filterBase = () => {
  console.log('filtering base ...');
};

useGSAPAnimate({
  selector: '.base__item',
  base: { scale: 0.8 },
  staggerStep: 0.05,
  initialDelay: 0.3
});

defineProps({
  breadcrumbs: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.base {
  display: flex;
  flex-direction: column;
  gap: max(20px, 3rem);
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: max(8px, 3.2rem);
    @media only screen and (max-width: $bp-lg) {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }
  &__item {
    background: #f8f8f8;
    border: 1px solid #cbd5e0;
    border-radius: max(16px, 3.2rem);
    aspect-ratio: 1;
    transition: none;
    @include flex-center;
  }

  &__icon {
    width: 62.5%;
  }
}
</style>
