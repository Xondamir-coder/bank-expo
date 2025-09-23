<template>
  <BreadcrumbsLayout :breadcrumbs>
    <div class="participants__container">
      <ParticipantsSearch
        v-model="query"
        :label="$t('participants.name')"
        class="participants__box"
        @submit.prevent="submitQuery"
      />
      <ul id="participants-list" class="participants__list">
        <li v-for="(participant, i) in participants" :key="i" class="participants__item">
          <ParticipantsItem :participant="participant" />
        </li>
      </ul>
      <ParticipantsSidebar class="participants__box" />
    </div>
    <AppPagination
      id="participants-pagination"
      :pages-count="pagesCount"
      :current-page="currentPage"
      @change-page="fetchItems"
    />
  </BreadcrumbsLayout>
</template>

<script setup>
import IconsBank from '~/components/icons/bank.vue';

const { t } = useI18n();

useGSAPAnimate({ selector: '.participants__item', base: { y: 25 } });
useMySEO('participants');

const currentPage = ref(1);
const query = ref('');

const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/participants',
    label: t('nav.participants')
  }
]);

const setCurrentPage = page => (currentPage.value = page);
const fetchItems = page => {
  setCurrentPage(page);
  console.log('fetching new participants ...');
};
const submitQuery = () => {};

const pagesCount = 12;
const participants = Array(10).fill({
  icon: IconsBank,
  slug: 'infin-bank',
  name: 'Infin Bank',
  tel: '+998 78 111 001',
  loanInterest: 29,
  depositInterest: 25,
  website: 'https://google.com'
});
</script>

<style lang="scss" scoped>
.participants {
  display: flex;
  flex-direction: column;
  gap: max(20px, 3rem);

  &__container {
    display: grid;
    column-gap: max(20px, 3.2rem);
    row-gap: max(20px, 3rem);
    grid-template-areas:
      'search sidebar'
      'participants sidebar';
    @media only screen and (min-width: $bp-lg) {
      grid-template-columns: 2fr 1fr;
    }
    @media only screen and (max-width: $bp-lg) {
      grid-template-areas:
        'search'
        'sidebar'
        'participants';
    }
  }
  &__list {
    grid-area: participants;
    display: flex;
    flex-direction: column;
    gap: max(1.2rem, 12px);
    @media only screen and (max-width: $bp-md) {
      gap: 16px;
      transition-property: transform, opacity;
      transition-duration: 0.7s;
      transition-delay: 0.3s;
    }
  }
  &__box {
    border: 1px solid #e9eaec;
    background: #ffffff;
    backdrop-filter: blur(30px);
    border-radius: max(16px, 3.2rem);
    padding: max(16px, 3rem);
  }
  & > *:not([data-no-margin]) {
    @include section-margin-inline;
  }
}
</style>
