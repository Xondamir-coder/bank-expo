<template>
  <BreadcrumbsLayout :breadcrumbs>
    <div class="participants__container">
      <ParticipantsSearch
        v-model="search"
        :label="$t('participants.name')"
        class="participants__box"
      />
      <ul v-if="banks.length" class="participants__list">
        <li v-for="bank in banks" :key="bank.id" class="participants__item">
          <ParticipantsItem :participant="bank" />
        </li>
      </ul>
      <h3 v-else>
        {{ $t('no-results') }}
      </h3>
      <ParticipantsSidebar class="participants__box" />
    </div>
    <AppPagination
      v-if="pagesCount > 1"
      id="participants-pagination"
      :pages-count="pagesCount"
      :current-page="currentPage"
      @change-page="changePage"
    />
  </BreadcrumbsLayout>
</template>

<script setup>
import gsap from 'gsap';

const currentPage = ref(1);
const search = ref('');
const pagesCount = ref();
const banks = ref([]);
let controller;
let debounceTimer;

const fetchBanks = async (isInit = false) => {
  const url = `${API_URL}/banks`;
  const query = { page: currentPage.value, search: search.value };

  if (controller) controller.abort();
  controller = new AbortController();

  try {
    let result;
    if (isInit) {
      const { data } = await useFetch(url, { query, signal: controller.signal });
      result = data.value;
    } else {
      result = await $fetch(url, { query, signal: controller.signal });
    }

    pagesCount.value = result.last_page;
    banks.value = result?.data ?? [];
  } catch (error) {
    if (error.name !== 'AbortError') console.error(error);
  }
};

// initial SSR fetch
await fetchBanks(true);

// debounce search watcher
watch(search, newVal => {
  clearTimeout(debounceTimer);
  if (newVal === null) return;
  debounceTimer = setTimeout(() => {
    fetchBanks();
  }, 300);
});

// animate new search results
watch(banks, async () => {
  if (!banks.value.length) return;
  await nextTick();
  gsap.from('.participants__item', {
    y: 25,
    opacity: 0,
    duration: 0.75,
    stagger: 0.2
  });
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
