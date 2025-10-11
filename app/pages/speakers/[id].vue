<template>
  <BreadcrumbsLayout :breadcrumbs>
    <div class="speaker">
      <img
        :src="`${DOMAIN_URL}/${speaker?.image_inner}`"
        alt="speaker person"
        class="speaker__person-image"
      />
      <ul class="speaker__list">
        <li class="info-card speaker__item">
          <div class="speaker__item-content">
            <h2 class="speaker__item-title">{{ speaker?.[`name_${$i18n.locale}`] }}</h2>
            <p>{{ speaker?.[`role_${$i18n.locale}`] }}</p>
          </div>
          <img
            v-if="speaker?.logo"
            :src="`${DOMAIN_URL}/${speaker?.logo}`"
            alt="samsung"
            class="speaker__item-image"
          />
        </li>
        <ClientOnly>
          <InfoCard v-for="(card, index) in cards" :key="index" :info="card" />
        </ClientOnly>
      </ul>
    </div>
  </BreadcrumbsLayout>
</template>

<script setup>
import IconsTime from '~/components/icons/time.vue';
import IconsQuote from '~/components/icons/quote.vue';

const { t, locale } = useI18n();
const route = useRoute();

const speakers = useState('speakers');

const fetchSpeakers = async () => {
  const url = `${API_URL}/speakers`;
  try {
    const { data, status } = await useFetch(url);
    if (status.value === 'error') throw new Error('Error fetching speakers');
    speakers.value = data.value;
  } catch (error) {
    console.error(error);
  }
};
const extractItemsFromList = str => {
  if (!import.meta.client) return;
  const temp = document.createElement('div');
  temp.innerHTML = str;
  return Array.from(temp.querySelectorAll('li')).map(li => li.textContent.trim());
};

if (!speakers.value) await fetchSpeakers();

const speaker = computed(() => speakers.value?.find(speaker => +speaker.id === +route.params.id));
const cards = computed(() => [
  {
    title: t('speaker.about'),
    text: speaker.value?.[`info_${locale.value}`]
  },
  {
    title: t('speaker.highlights'),
    details: extractItemsFromList(speaker.value?.[`highlights_${locale.value}`])
  },
  {
    title: t('speaker.agenda'),
    list: [
      {
        icon: IconsTime,
        text: speaker.value?.[`participation_time_${locale.value}`]
      },
      {
        icon: IconsQuote,
        text: speaker.value?.[`participation_title_${locale.value}`]
      }
    ]
  },
  {
    title: t('speaker.quote'),
    text: speaker.value?.[`quote_${locale.value}`]
  }
]);
const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/speakers',
    label: t('nav.speakers')
  },
  {
    to: `/speakers/${route.params.id}`,
    label: speaker.value?.[`name_${locale.value}`]
  }
]);

useGSAPAnimate({ selector: '.speaker__list>*', base: { x: 50 }, initialDelay: 0.3 });
useGSAPAnimate({ selector: '.speaker__person-image', base: { y: 30, scale: 1.1 } });
useGSAPAnimate({
  selector: '.speaker__person-pattern',
  base: { clipPath: 'circle(0%)', duration: 2, opacity: 1 }
});
</script>

<style lang="scss" scoped>
.speaker {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: max(3.1rem, 16px);
  @media screen and (max-width: $bp-lg) {
    gap: max(7rem, 16px);
  }
  @media screen and (max-width: $bp-md) {
    grid-template-columns: 1fr;
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: max(2rem, 16px);
  }
  &__item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: max(1.2rem, 12px);
    align-items: center;
    @media screen and (max-width: $bp-sm) {
      flex-direction: column;
      align-items: flex-start;
    }
    &-image {
      width: max(18.2rem, 127px);
    }
    &-content {
      display: flex;
      flex-direction: column;
      gap: max(1.2rem, 8px);
    }
    &-title {
      font-size: max(3.8rem, 16px);
      font-weight: 900;
      line-height: 1.35;
      color: $clr-very-dark-grey;
    }
  }
}
</style>
