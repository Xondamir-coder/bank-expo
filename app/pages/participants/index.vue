<template>
  <main class="participants">
    <NavBreadcrumbs :breadcrumbs="breadcrumbs" />
    <div class="participants__container">
      <ParticipantsSearch
        v-model="query"
        :label="$t('participants.name')"
        class="participants__box"
        @submit.prevent="submitQuery"
      />
      <div id="participants-list" class="participants__list">
        <ParticipantsItem
          v-for="(participant, i) in participants"
          :key="i"
          :participant="participant"
        />
      </div>
      <ParticipantsSidebar class="participants__box" />
    </div>
    <AppPagination
      id="participants-pagination"
      :pages-count="pagesCount"
      :current-page="currentPage"
      @change-page="fetchItems"
    />
  </main>
</template>

<script setup>
//  imports
import IconsBank from '~/components/icons/bank.vue';

// refs
const currentPage = ref(1);
const query = ref('');

// methods
const setCurrentPage = page => (currentPage.value = page);
const fetchItems = page => {
  setCurrentPage(page);
  console.log('fetching new participants ...');
};

//  data
const breadcrumbs = [
  {
    to: '/',
    label: 'Home'
  },
  {
    to: '/participants',
    label: 'Participants'
  }
];
const pagesCount = 12;
const PARTICIPANTS_COUNT = 10;
const participants = Array(PARTICIPANTS_COUNT).fill({
  icon: IconsBank,
  slug: 'infin-bank',
  name: 'Infin Bank',
  tel: '+998 78 111 001',
  loanInterest: 29,
  depositInterest: 25,
  website: 'https://google.com'
});

//  animation
const { $gsap } = useNuxtApp();
const animateItems = () => {
  const items = $gsap.utils.toArray('#participants-list .participant');
  items.forEach(item => {
    const iconContainer = item.querySelector('.participant__icon-container');
    const title = item.querySelector('.participant__title');
    const details = item.querySelectorAll('.participant__detail');

    $gsap.from(iconContainer, {
      x: -25,
      ...fadeOnScrollTrigger(iconContainer, 'bottom 90%')
    });
    $gsap.from(title, {
      x: 25,
      ...fadeOnScrollTrigger(title, 'bottom 90%')
    });
    $gsap.from(details, {
      y: 15,
      stagger: 0.1,
      ...fadeOnScrollTrigger(details, 'bottom 90%')
    });
  });
};
onMounted(() => {
  if (window.innerWidth < 768) animateItems();
});

//  submit query
const submitQuery = () => {};
</script>

<style lang="scss" scoped>
@keyframes slide-from-bottom {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
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
      animation: slide-from-bottom 0.7s backwards 0.5s;
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
