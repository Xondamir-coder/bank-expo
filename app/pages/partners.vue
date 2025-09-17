<template>
  <main class="partners">
    <NavBreadcrumbs :breadcrumbs="breadcrumbs" />
    <div class="partners__container">
      <Filter
        title="Partners"
        :filters="filters"
        :current-type="currentType"
        @filter="filterPartners"
      />
      <div class="partners__list">
        <div v-for="partner in partners" :key="partner" class="partners__item">
          <component :is="partner" class="partners__icon" data-original />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
// bank icons
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
const breadcrumbs = [
  {
    to: '/',
    label: 'Home'
  },
  {
    to: '/partners',
    label: 'Partners'
  }
];
const filters = [
  {
    type: 'all',
    label: 'All partners'
  },
  {
    type: 'banks',
    label: 'Banks'
  },
  {
    type: 'factories',
    label: 'Factories'
  },
  {
    type: 'universities',
    label: 'Universities'
  },
  {
    type: 'others',
    label: 'Others'
  }
];
const partners = [
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

// refs
const currentType = ref('all');

// methods
const setCurrentType = type => (currentType.value = type);
const filterPartners = type => {
  setCurrentType(type);
  console.log('filtering partners ...');
};

useHead({
  title: 'Our Partners - Bank Expo',
  meta: [
    {
      name: 'description',
      content:
        'Discover our esteemed partners who contribute to making Bank Expo the most trusted source for banking information and news.'
    },
    {
      property: 'og:title',
      content: 'Our Partners | Bank Expo'
    },
    {
      property: 'og:description',
      content:
        'Explore the organizations and institutions partnered with Bank Expo to bring you reliable banking content and insights.'
    },
    {
      property: 'og:url',
      content: 'https://bankexpo.uz/partners'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    // {
    // 	property: 'og:image',
    // 	content: 'https://bankexpo.uz/images/partners-banner.jpg'
    // },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Our Partners - Bank Expo'
    },
    {
      name: 'twitter:description',
      content:
        'Learn more about our trusted partners at Bank Expo and how they help provide valuable banking resources.'
    }
    // {
    // 	name: 'twitter:image',
    // 	content: 'https://bankexpo.uz/images/partners-banner.jpg'
    // }
  ]
});
</script>

<style lang="scss" scoped>
@keyframes scale-up {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.partners {
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 30px);
  @include section-margin-inline;

  &__container {
    display: flex;
    flex-direction: column;
    gap: clamp(20px, 3vw, 30px);
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: clamp(8px, 3vw, 32px);
    @media only screen and (max-width: $bp-lg) {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }
  &__item {
    background: #f8f8f8;
    border: 1px solid #cbd5e0;
    border-radius: clamp(16px, 3vw, 32px);
    aspect-ratio: 1;
    @include flex-center;

    animation: scale-up 0.4s backwards;
    @for $i from 1 through 100 {
      &:nth-child(#{$i}) {
        animation-delay: $i * 0.1s;
      }
    }
  }

  &__icon {
    width: 62.5%;
  }
}
</style>
