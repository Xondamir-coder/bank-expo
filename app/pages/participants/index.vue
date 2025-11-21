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
        <ul v-else-if="banks?.data?.length" class="participants__list">
          <li v-for="bank in banks.data" :key="bank.id" class="participants__item">
            <ParticipantsItem :participant="bank" />
          </li>
        </ul>
        <h3 v-else class="participants__error">
          {{ $t('no-results') }}
        </h3>
        <ParticipantsSidebar class="participants__box" />
      </div>
      <AppPagination
        :pages-count="banks?.last_page || 0"
        page-name="participants"
        @change-page="changePage"
      />
    </ClientOnly>
  </BreadcrumbsLayout>
</template>

<script setup>
const localePath = useLocalePath();
const router = useRouter();
const route = useRoute();
const apiStore = useApiStore();
const { banks } = storeToRefs(apiStore);
const { fetchBanks } = apiStore;

const search = ref(route.query.search || '');

if (import.meta.client) {
  fetchBanks({ page: route.query.page || 1, take: 10, search: search.value });
}

const changePage = async () => {
  await fetchBanks({ page: route.query.page || 1, search: search.value });
};

// debounce search watcher
let debounceTimer;
watch(search, newVal => {
  clearTimeout(debounceTimer);
  if (newVal === null) return;
  debounceTimer = setTimeout(async () => {
    await router.replace({
      path: localePath('/participants'),
      query: { page: route.query.page || 1, ...(newVal && { search: newVal }) }
    });
    await fetchBanks({ page: route.query.page || 1, search: newVal });
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
