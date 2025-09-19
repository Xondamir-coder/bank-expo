<template>
  <BreadcrumbsLayout :breadcrumbs>
    <div class="speaker">
      <div class="speaker__person">
        <svg
          class="speaker__person-pattern"
          viewBox="0 0 452 640"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 24C0 10.7452 10.7452 0 24 0H398.17C410.959 0 421.501 10.0285 422.14 22.8015L451.74 614.802C452.426 628.51 441.496 640 427.77 640H24C10.7452 640 0 629.255 0 616V24Z"
            fill="#034EA2"
          />
        </svg>
        <img src="~/assets/images/person.png" alt="speaker banner" class="speaker__person-image" >
      </div>
      <ul class="speaker__list">
        <li class="info-card speaker__item">
          <div class="speaker__item-content">
            <h2 class="speaker__item-title">Ahmadjon Rahmatjonov</h2>
            <p>Founder and CEO at Samsung</p>
          </div>
          <img src="~/assets/images/samsung.png" alt="sasung" class="speaker__item-image" >
        </li>
        <InfoCard v-for="(card, index) in cards" :key="index" :info="card" />
      </ul>
    </div>
  </BreadcrumbsLayout>
</template>

<script setup>
import IconsTime from '~/components/icons/time.vue';
import IconsQuote from '~/components/icons/quote.vue';

const { t } = useI18n();
const route = useRoute();

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
    to: `/speakers/${route.params.slug}`,
    label: 'Ahmadjon Rahmatjonov'
  }
]);

const cards = [
  {
    title: 'About',
    text: 'Samsung — dunyodagi yetakchi texnologik kompaniyalardan biri bo‘lib, smartfonlar, televizorlar, maishiy texnika va yarimo‘tkazgich sanoatida global yetakchi hisoblanadi. Kompaniya innovatsion mahsulotlari va xizmatlari bilan 80 dan ortiq mamlakatlarda faoliyat yuritadi.'
  },
  {
    title: 'Exhibition Focus / Highlights',
    details: [
      '2025-yil uchun yangi AI asosidagi smartfonlar va Galaxy ekotizimi taqdimoti',
      'IoT va Smart Home yechimlari — aqlli uy qurilmalari integratsiyasi',
      'Barqaror texnologiyalar — ekologik toza ishlab chiqarish va qayta ishlash dasturlari'
    ]
  },
  {
    title: 'Agenda Participation',
    list: [
      {
        icon: IconsTime,
        text: '16-sentabr, 11:00 — “Global Tech & Banking Innovations” panelida chiqish qiladi.'
      },
      {
        icon: IconsQuote,
        text: 'Mavzu: “AI va IoT asosida moliya xizmatlarini yangi bosqichga olib chiqish”'
      }
    ]
  },
  {
    title: 'Quote',
    text: 'Bizning maqsadimiz — texnologiyani inson hayotini yanada qulay va samarali qilishga xizmat qildirish." Ahmadjon Rahmatjonov, CEO Samsung Uzbekistan'
  }
];
</script>

<style lang="scss" scoped>
.speaker {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: max(15rem, 16px);
  @media screen and (max-width: $bp-lg) {
    gap: max(7rem, 16px);
  }
  @media screen and (max-width: $bp-md) {
    grid-template-columns: 1fr;
  }
  &__person {
    position: relative;
    display: grid;
    aspect-ratio: 453/640;
    overflow: hidden;
    @media screen and (max-width: $bp-md) {
      max-width: 80%;
    }
    & > * {
      grid-area: 1/1/2/2;
    }
    &-image {
      z-index: 1;
    }
    &-pattern {
      width: 100%;
    }
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
