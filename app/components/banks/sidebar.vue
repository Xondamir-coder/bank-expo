<template>
  <div class="sidebar">
    <h3 class="sidebar__title">Directory of banks</h3>
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
        <p v-if="Number.isInteger(row.data)" class="sidebar__row-text">{{ row.data }} banks</p>
        <div v-else class="sidebar__row-cta">
          <p class="sidebar__row-text">{{ row.data.percent }}%</p>
          in
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
const rows = [
  {
    icon: IconsList,
    name: 'In the catalog',
    data: data.catalog
  },
  {
    icon: IconsCash,
    name: 'Private banks',
    data: data.privateBanks
  },
  {
    icon: IconsCashDown,
    name: 'State banks',
    data: data.stateBanks
  },
  {
    icon: IconsBriefcase,
    name: 'Best interest rate on loan',
    data: data.bestLoanInterest
  },
  {
    icon: IconsBankBuilding,
    name: 'The best interest rate on deposits',
    data: data.bestDepositInterest
  }
];
</script>

<style lang="scss" scoped>
@keyframes slide-from-top {
  from {
    transform: translateY(-35px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-from-left {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.sidebar {
  grid-area: sidebar;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: clamp(14px, 1.5vw, 20px);
  animation: slide-from-top 0.7s;
  &__title {
    font-weight: 700;
    font-size: clamp(20px, 2vw, 24px);
  }
  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: clamp(14px, 1.5vw, 20px);
    border-top: 1px solid #e9eaec;
    border-bottom: 1px solid #e9eaec;
    animation: slide-from-left 0.5s backwards;
    @for $i from 1 through 5 {
      &:nth-child(#{$i}) {
        animation-delay: $i * 0.1s;
      }
    }
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
      align-items: center;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 5px;
    }
    &-text {
      color: #111827;
      font-weight: 700;
      font-size: clamp(16px, 1.5vw, 18px);
    }
    &-name {
      color: #687588;
      font-size: clamp(14px, 1vw, 16px);
      font-weight: 500;
    }
    &-link {
      text-decoration: underline;
      color: $clr-primary-dark;
      font-size: clamp(12px, 1vw, 14px);
    }
    &-left {
      display: grid;
      grid-template-columns: max-content 1fr;
      align-items: center;
      gap: clamp(10px, 1vw, 12px);
    }
  }
  &__icon {
    width: clamp(16px, 1.5vw, 24px);
    &-container {
      @include flex-center;
      border-radius: 8px;
      aspect-ratio: 1;
      background-color: #00aeb3;
      width: clamp(28px, 2vw, 38px);
    }
  }
}
</style>
