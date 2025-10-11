<template>
  <BreadcrumbsLayout :breadcrumbs>
    <div class="participant__box">
      <div class="participant__wrapper">
        <div class="participant__card participant__header">
          <img :src="`${DOMAIN_URL}/${bank?.logo}`" alt="" class="participant__logo" />
          <div class="participant__header-content">
            <h1 class="participant__header-title">{{ bank?.[`name_${$i18n.locale}`] }}</h1>
            <p v-if="bank?.[`info_short_${$i18n.locale}`]">
              {{ bank?.[`info_short_${$i18n.locale}`] }}
            </p>
          </div>
        </div>
        <div class="info-card participant__info">
          <h3 class="info-card__title">
            {{ $t('contact-info') }}
          </h3>
          <ul class="info-card__list">
            <li
              v-for="(detail, i) in details"
              :key="i"
              class="info-card__item"
              :class="{ hidden: !detail?.text }"
            >
              <div class="info-card__item-box">
                <component :is="detail?.icon" class="info-card__item-icon" />
              </div>
              <p>
                <span>{{ detail?.label }}: </span>
                <a :href="detail?.href">
                  {{ detail?.text }}
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="participant__container">
        <ClientOnly>
          <swiper-container
            v-if="bank.gallery?.length"
            class="participant__card participant__swiper"
            :grab-cursor="true"
            :breakpoints="{
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 12
              },
              480: {
                slidesPerView: 1.85,
                spaceBetween: 12
              },
              0: {
                slidesPerView: 1.5,
                spaceBetween: 8
              }
            }"
          >
            <swiper-slide v-for="(image, i) in bank?.gallery" :key="i" class="participant__slide">
              <img :src="`${DOMAIN_URL}/${image}`" alt="banner" class="participant__image" />
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
        <div class="participant__cards">
          <InfoCard v-for="(item, index) in $tm('participant.items')" :key="index" :info="item" />
        </div>
      </div>
    </div>
  </BreadcrumbsLayout>
</template>

<script setup>
import IconsLocation from '~/components/icons/location.vue';
import IconsTelephone from '~/components/icons/telephone.vue';
import IconsMail from '~/components/icons/mail.vue';
import IconsGlobe from '~/components/icons/globe.vue';

const { t, locale } = useI18n();
const route = useRoute();

const banks = useState('banks');

const fetchBanks = async () => {
  try {
    const { data, status } = await useFetch(`${API_URL}/banks`);
    if (status.value === 'error') throw new Error('error fetching banks');
    banks.value = data.value?.data;
  } catch (error) {
    console.error(error);
  }
};
if (!banks.value) await fetchBanks();

const bank = computed(() => banks.value?.find(bank => +bank.id === +route.params.id));
const details = computed(() => [
  {
    icon: IconsLocation,
    href: bank.value?.map_link,
    label: t('address'),
    text: bank.value?.[`address_${locale.value}`]
  },
  {
    icon: IconsTelephone,
    href: bank.value?.phoneNumber,
    label: t('phone'),
    text: bank.value?.phoneNumber
  },
  {
    icon: IconsMail,
    href: `mailto:${bank.value?.email}`,
    label: t('mail'),
    text: bank.value?.email
  },
  {
    icon: IconsGlobe,
    href: bank.value?.url,
    label: t('website'),
    text: bank.value?.url.split('//')[1]
  }
]);
const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/participants',
    label: t('nav.participants')
  },
  {
    to: `/participants/${route.params.id}`,
    label: bank.value?.[`name_${locale.value}`]
  }
]);

useGSAPAnimate({ selector: '.participant__wrapper>*', base: { y: 50 } });
useGSAPAnimate({ selector: '.participant__swiper', base: { y: 50 }, initialDelay: 0.2 });
useGSAPAnimate({ selector: '.participant__cards>*', base: { x: -50 }, initialDelay: 0.2 });
</script>

<style lang="scss" scoped>
.participant {
  @include section-padding-inline;
  display: flex;
  flex-direction: column;
  gap: max(3rem, 20px);
  &__box {
    display: grid;
    grid-template-columns: 1fr 2fr;
    row-gap: max(2rem, 16px);
    column-gap: max(3.2rem, 20px);
    @media screen and (max-width: $bp-lg) {
      grid-template-columns: 1fr;
    }
  }
  @media screen and (max-width: $bp-lg) {
    grid-template-columns: 1fr;
  }
  &__container,
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: max(2rem, 16px);
  }
  &__cards {
    display: flex;
    flex-direction: column;
    row-gap: max(2rem, 16px);
  }
  &__slide {
    border-radius: max(8px, 1.6rem);
    overflow: hidden;
    display: flex;
  }
  &__image {
    aspect-ratio: 1;
  }
  &__logo {
    width: max(18rem, 60px);
  }
  &__swiper {
    display: grid;
  }
  &__card {
    background-color: #fff;
    padding: max(16px, 3.2rem);
    border-radius: max(2rem, 16px);
  }
  &__header {
    display: flex;
    flex-direction: column;
    gap: max(1.6rem, 12px);
    @media screen and (max-width: $bp-lg) {
      flex-direction: row;
      align-items: center;
    }
    &-content {
      display: flex;
      flex-direction: column;
      gap: max(1.2rem, 4px);
    }
    &-title {
      font-size: max(3.8rem, 24px);
      color: $clr-very-dark-grey;
      font-weight: 700;
    }
  }
}
</style>
