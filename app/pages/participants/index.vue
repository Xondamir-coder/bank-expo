<template>
  <BreadcrumbsLayout :breadcrumbs>
    <ClientOnly>
      <div class="participants__container">
        <ParticipantsSearch
          v-model="search"
          :label="$t('participants.name')"
          class="participants__box"
        />
        <SpinnerLoader v-if="!banks" />
        <ul v-else-if="banks.length" class="participants__list">
          <li v-for="bank in banks" :key="bank.id" class="participants__item">
            <ParticipantsItem :participant="bank" />
          </li>
        </ul>
        <h3 v-else class="participants__error">
          {{ $t('no-results') }}
        </h3>
        <ParticipantsSidebar class="participants__box" />
      </div>
      <AppPagination
        v-model="currentPage"
        :pages-count="pagesCount"
        page-name="participants"
        @change-page="fetchBanks"
      />
    </ClientOnly>
  </BreadcrumbsLayout>
</template>

<script setup>
import gsap from 'gsap';

const { query } = useRoute();

const banks = useState('banks', () => null);

const search = ref('');
const currentPage = ref(+query.page || 1);
const pagesCount = ref(0);

let controller;
let debounceTimer;

const fetchBanks = async (isInit = false) => {
  if (controller) controller.abort();
  controller = new AbortController();
  const params = {
    query: {
      page: currentPage.value,
      search: search.value,
      take: 2
    },
    signal: controller.signal
  };

  let result;
  try {
    if (isInit) {
      const { data } = await useFetch(`${API_URL}/banks`, params);
      result = data.value;
    } else {
      result = await $fetch(`${API_URL}/banks`, params);
    }

    pagesCount.value = result.last_page;

    if (banks.value?.[0]?.id == result.data?.[0]?.id) return;

    banks.value = result?.data ?? [];
  } catch (error) {
    if (error.name !== 'AbortError') console.error(error);
  }

  await nextTick();
  gsap.from('.participants__list', {
    y: 25,
    opacity: 0,
    duration: 0.7
  });
};

// initial SSR fetch
fetchBanks(true);

// debounce search watcher
watch(search, newVal => {
  clearTimeout(debounceTimer);
  if (newVal === null) return;
  debounceTimer = setTimeout(() => {
    fetchBanks();
  }, 300);
});

const { t } = useI18n();
const breadcrumbs = computed(() => [
  { to: '/', label: t('nav.home') },
  { to: '/participants', label: t('nav.participants') }
]);

useMySEO('participants');
useGSAPAnimate({
  selector: '.participants__item',
  base: { y: 25, opacity: 0 }
});
</script>

<style lang="scss" scoped>
.participants {
  &__error {
    animation: slide-from-bottom-10 0.6s;
  }
  &__container {
    display: grid;
    column-gap: max(20px, 3.2rem);
    row-gap: max(20px, 3rem);
    grid-template-areas:
      'search sidebar'
      'participants sidebar';
    @media only screen and (min-width: $bp-lg) {
      grid-template-columns: 2fr 1fr;
      grid-auto-rows: auto 1fr;
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
