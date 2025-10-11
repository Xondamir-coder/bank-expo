<template>
  <BreadcrumbsLayout :breadcrumbs>
    <h1 class="heading-42-20">{{ $t('nav.partners') }}</h1>
    <div class="slug">
      <div class="slug__icon-container">
        <img :src="`${DOMAIN_URL}/${partner?.logo}`" class="slug__icon" />
      </div>
      <div class="slug__container">
        <div class="info-card">
          <h2 class="heading-38-16">{{ partner?.[`name_${$i18n.locale}`] }}</h2>
          <p>Leading bank in Uzbekistan</p>
        </div>
        <div class="info-card">
          <h3 class="info-card__title">{{ $t('nav.about') }}</h3>
          <ul class="info-card__details">
            <li v-for="(text, i) in texts" :key="i" class="info-card__detail">
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
            <li
              v-for="(text, i) in [
                'IoT va Smart Home yechimlari — aqlli uy qurilmalari integratsiyasi',
                'Barqaror texnologiyalar — ekologik toza ishlab chiqarish va qayta ishlash dasturlari'
              ]"
              :key="i"
              class="info-card__detail"
            >
              {{ text }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <FormSection />
  </BreadcrumbsLayout>
</template>

<script setup>
import IconsTelephone from '~/components/icons/telephone.vue';
import IconsMail from '~/components/icons/mail.vue';

const route = useRoute();
const { t, locale } = useI18n();

const partners = useState('partners');

const fetchPartners = async () => {
  try {
    const { data, status } = await useFetch(`${API_URL}/partners`);
    if (status.value === 'error') throw new Error('error fetching partners');
    partners.value = data.value;
  } catch (error) {
    console.error(error);
  }
};
if (!partners.value) await fetchPartners();

const partner = computed(() => partners.value?.find(i => +i.id === +route.params.id));
const texts = [
  'Ziraat Bank Uzbekistan JSC is a lending institution established in accordance with the applicable legislation of the Republic of Uzbekistan and registered with the Central Bank of the Republic of Uzbekistan.',
  'In accordance with the Charter, the full official name of the Bank in Russian is: Акционерное общество «Ziraat Bank Uzbekistan».',
  'In accordance with the Charter, the abbreviated name of the Bank in Russian is: АО «Ziraat Bank Uzbekistan»'
];
const details = computed(() => [
  {
    icon: IconsTelephone,
    href: 'tel:+998 (71) 202 50 50',
    label: t('phone'),
    text: '+998 (71) 202 50 50'
  },
  {
    icon: IconsMail,
    href: 'mailto:info@ziraatbank.uz',
    label: t('mail'),
    text: 'info@ziraatbank.uz'
  }
]);

const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/partners',
    label: t('nav.partners')
  },
  {
    to: `/partners/${route.params.id}`,
    label: partner.value?.[`name_${locale.value}`]
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
