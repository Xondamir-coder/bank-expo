<template>
  <div class="sidebar">
    <h3 class="sidebar__title">{{ $t('participants.sidebar.title') }}</h3>
    <div class="sidebar__content">
      <div v-for="(row, i) in rows" :key="i" class="sidebar__row">
        <div class="sidebar__row-left">
          <div class="sidebar__icon-container">
            <component :is="row.icon" class="sidebar__icon" />
          </div>
          <h4 class="sidebar__row-name">
            {{ row.name }}
          </h4>
        </div>
        <p v-if="Number.isInteger(row.data)" class="sidebar__row-text">
          {{ row.data }} {{ $t('nav.banks') }}
        </p>
        <div v-else class="sidebar__row-cta">
          <p class="sidebar__row-text">{{ row.data.percent }}%</p>
          {{ $t('in') }}
          <a :href="row.data.website" target="_blank" class="sidebar__row-link">
            {{ row.data.bank }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//  icons
import IconsList from '~/components/icons/list.vue';
import IconsCash from '~/components/icons/cash.vue';
import IconsCashDown from '~/components/icons/cash-down.vue';
import IconsBriefcase from '~/components/icons/briefcase.vue';
import IconsBankBuilding from '~/components/icons/bank-building.vue';

const { t } = useI18n();
useGSAPAnimate({ selector: '.sidebar', base: { y: 35 } });
useGSAPAnimate({ selector: '.sidebar__row', base: { x: -10 } });

//  data
const data = {
  catalog: 1012,
  privateBanks: 1012,
  stateBanks: 1012,
  bestLoanInterest: {
    percent: 27,
    bank: 'Sanoat Qurilish bank',
    website: 'https://sqb.uz'
  },
  bestDepositInterest: {
    percent: 33,
    bank: 'Ziraat Bank',
    website: 'https://ziraatbank.uz'
  }
};

const rows = computed(() => [
  {
    icon: IconsList,
    name: t('participants.sidebar.in-catalog'),
    data: data.catalog
  },
  {
    icon: IconsCash,
    name: t('participants.sidebar.private-banks'),
    data: data.privateBanks
  },
  {
    icon: IconsCashDown,
    name: t('participants.sidebar.state-banks'),
    data: data.stateBanks
  },
  {
    icon: IconsBriefcase,
    name: t('participants.sidebar.loan-interest'),
    data: data.bestLoanInterest
  },
  {
    icon: IconsBankBuilding,
    name: t('participants.sidebar.deposit-interest'),
    data: data.bestDepositInterest
  }
]);
</script>

<style lang="scss" scoped>
.sidebar {
  grid-area: sidebar;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: max(14px, 2rem);
  &__title {
    font-weight: 700;
    font-size: max(20px, 2.4rem);
  }
  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: max(14px, 2rem);
    border-top: 1px solid #e9eaec;
    border-bottom: 1px solid #e9eaec;
    &:first-child {
      border-top: none;
      padding-top: 0;
    }
    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
    &-cta {
      display: flex;
      align-items: baseline;
      flex-wrap: wrap;
      gap: 5px;
    }
    &-text {
      color: $clr-very-dark-grey;
      font-weight: 700;
      font-size: max(16px, 1.8rem);
      text-transform: lowercase;
    }
    &-name {
      color: #687588;
      font-size: max(14px, 1.6rem);
      font-weight: 500;
    }
    &-link {
      text-decoration: underline;
      color: $clr-primary-dark;
      font-size: max(12px, 1.4rem);
    }
    &-left {
      display: grid;
      grid-template-columns: max-content 1fr;
      align-items: center;
      gap: max(10px, 1.2rem);
    }
  }
  &__icon {
    width: max(16px, 2.4rem);
    &-container {
      @include flex-center;
      border-radius: 8px;
      aspect-ratio: 1;
      background-color: #00aeb3;
      width: max(28px, 3.8rem);
    }
  }
}
</style>
