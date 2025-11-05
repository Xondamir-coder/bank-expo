<template>
  <BreadcrumbsLayout :breadcrumbs>
    <h1 class="heading-42-20">{{ $t('nav.sponsors') }}</h1>
    <div class="slug">
      <div class="slug__icon-container">
        <img :src="`${DOMAIN_URL}/${sponsor?.logo}`" class="slug__icon" />
      </div>
      <div class="slug__container">
        <div class="info-card">
          <h2 class="heading-38-16">{{ sponsor?.[`name_${$i18n.locale}`] }}</h2>
          <p>{{ sponsor?.[`short_info_${$i18n.locale}`] }}</p>
        </div>
        <div class="info-card">
          <h3 class="info-card__title">{{ $t('nav.about') }}</h3>
          <ul class="info-card__details">
            <li v-for="(text, i) in aboutTexts" :key="i" class="info-card__detail">
              {{ text }}
            </li>
          </ul>
        </div>
        <div class="info-card">
          <h3 class="info-card__title">{{ $t('address') }} / {{ $t('info') }}</h3>
          <ul class="info-card__list">
            <li v-for="(detail, i) in details" :key="i" class="info-card__item">
              <div class="info-card__item-box">
                <component :is="detail.icon" class="info-card__item-icon" />
              </div>
              <p>
                <span>{{ detail.label }}: </span>
                <a :href="detail.href">
                  {{ detail.text }}
                </a>
              </p>
            </li>
          </ul>
          <ul class="info-card__details">
            <li v-for="(text, i) in infoTexts" :key="i" class="info-card__detail">
              {{ text }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <FormSection :title="$t('become-sponsor')" />
  </BreadcrumbsLayout>
</template>

<script setup>
import IconsTelephone from '~/components/icons/telephone.vue';
import IconsMail from '~/components/icons/mail.vue';

const route = useRoute();
const { t, locale } = useI18n();

const sponsors = useState('sponsors');

const fetchPartners = async () => {
  try {
    const { data, status } = await useFetch(`${API_URL}/partners`);
    if (status.value === 'error') throw new Error('error fetching partners');
    sponsors.value = data.value;
  } catch (error) {
    console.error(error);
  }
};
if (!sponsors.value) await fetchPartners();

const sponsor = computed(() => sponsors.value?.find(i => +i.id === +route.params.id));
const aboutTexts = computed(() => extractItemsFromList(sponsor.value?.[`about_${locale.value}`]));
const infoTexts = computed(() => extractItemsFromList(sponsor.value?.[`info_${locale.value}`]));
const details = computed(() => [
  {
    icon: IconsTelephone,
    href: `tel:${sponsor.value?.phoneNumber}`,
    label: t('phone'),
    text: sponsor.value?.phoneNumber
  },
  {
    icon: IconsMail,
    href: `mailto:${sponsor.value?.email}`,
    label: t('mail'),
    text: sponsor.value?.email
  }
]);
const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/sponsors',
    label: t('nav.sponsors')
  },
  {
    to: `/sponsors/${route.params.id}`,
    label: sponsor.value?.[`name_${locale.value}`]
  }
]);

useGSAPAnimate({
  selector: '.info-card',
  base: {
    x: 50
  }
});
useGSAPAnimate({
  selector: '.slug__icon-container',
  base: {
    scale: 0.85
  }
});

const getSeoData = () => {
  const sponsorName = sponsor.value?.[`name_${locale.value}`];

  const en = {
    title: `${sponsorName} - Company Info and Contact`,
    description: `Learn about ${sponsorName}: overview, key details, and contact information. Get in touch through the form below.`
  };

  const ru = {
    title: `${sponsorName} – Информация о компании и Контакты`,
    description: `Узнайте о ${sponsorName}: краткая информация, основные сведения и контакты. Свяжитесь через форму ниже.`
  };

  const uz = {
    title: `${sponsorName} – Kompaniya ma’lumotlari va Aloqa`,
    description: `${sponsorName} haqida bilib oling: qisqacha ma’lumot, asosiy tafsilotlar va aloqa ma’lumotlari. Quyidagi forma orqali bog‘laning.`
  };

  const data = { en, ru, uz };

  return data[locale.value];
};

useSeoMeta({
  ...getSeoData(),
  ogSiteName: 'Bank Expo',
  ogImage: '/og-banner.jpg'
});
</script>

<style lang="scss" scoped>
.slug {
  display: grid;
  grid-template-columns: 1fr 2.03fr;
  gap: max(2.6rem, 16px);
  align-items: flex-start;
  overflow: hidden;
  @media screen and (max-width: $bp-md) {
    grid-template-columns: 1fr;
  }
  &__container {
    display: flex;
    flex-direction: column;
    gap: max(2rem, 16px);
  }
  &__text {
    font-size: max(2rem, 14px);
    color: #56616c;
  }
  &__icon {
    width: 70%;
    &-container {
      @include flex-center;
      aspect-ratio: 578/640;
      background-color: #ffffff;
      border: 1px solid #2c3a4733;
      border-radius: max(2rem, 16px);
      @media screen and (max-width: $bp-md) {
        aspect-ratio: 328/380;
      }
    }
  }
}
</style>
