<template>
  <BreadcrumbsLayout :breadcrumbs>
    <div class="base">
      <CategoryFilter :filters @filter="filterBase" />
      <div v-if="partners?.length" class="base__list">
        <NuxtLink
          v-for="partner in partners"
          :key="partner?.id"
          class="base__item"
          :to="$localePath(`/${$route.name.split('___')[0]}/${partner?.id}`)"
        >
          <img :src="`${DOMAIN_URL}/${partner?.logo}`" class="base__logo" />
        </NuxtLink>
      </div>
      <h3 v-else>
        {{ $t('no-results') }}
      </h3>
      <FormSection />
    </div>
  </BreadcrumbsLayout>
</template>

<script setup>
import gsap from 'gsap';

const partners = useState('partners', () => []);
const filters = ref([]);

const fetchPartners = async catID => {
  try {
    const res = await $fetch(`${API_URL}/partners`, { query: { category_id: catID } });
    partners.value = res;
  } catch (error) {
    console.error(error);
  }
};
const filterBase = filter => {
  fetchPartners(filter.id);
};
const fetchData = async () => {
  try {
    const [{ data: partnersData }, { data: filtersData }] = await Promise.all([
      useFetch(`${API_URL}/partners`),
      useFetch(`${API_URL}/partners-categories`)
    ]);

    partners.value = partnersData.value;
    filters.value = filtersData.value;
  } catch (error) {
    console.error(error);
  }
};
await fetchData();

watch(partners, async () => {
  if (!partners.value?.length) return;
  await nextTick();
  gsap.from('.base__item', {
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    y: 50
  });
});

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
  h3 {
    animation: slide-from-bottom-10 0.5s;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    gap: max(8px, 3.2rem);
    @media only screen and (max-width: $bp-lg) {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
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

  &__logo {
    mix-blend-mode: darken;
    width: 62.5%;
  }
}
</style>
