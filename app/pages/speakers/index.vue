<template>
  <BreadcrumbsLayout :breadcrumbs>
    <div class="speakers">
      <div class="speakers__top">
        <h1 class="heading">{{ $t('speakers.title') }}</h1>
        <p>{{ $t('speakers.text') }}</p>
      </div>
      <nav class="speakers__list">
        <li v-for="(speaker, index) in speakers" :key="index" class="speakers__item-container">
          <NuxtLink :to="$localePath(`/speakers/${index + 1}`)" class="speakers__item">
            <div class="speakers__item-image-container">
              <MyPicture :src="speaker.image" :alt="speaker.name" class="speakers__item-image" />
            </div>
            <div class="speakers__item-content">
              <h3 class="heading-28-18">
                {{ speaker.name }}
              </h3>
              <p>{{ speaker.job }}</p>
            </div>
          </NuxtLink>
        </li>
      </nav>
    </div>
  </BreadcrumbsLayout>
</template>

<script setup>
const { t } = useI18n();
useGSAPAnimate({ selector: '.speakers__top>*', base: { x: -25 } });
useGSAPAnimate({ selector: '.speakers__item-container', base: { y: 20, rotateY: -35 } });
useMySEO('speakers');

const speakers = [
  // Row 1
  { image: 'speaker-1.jpg', name: 'Ahmadjon Rahmatjonov', job: 'Founder and CEO' },
  { image: 'speaker-2.jpg', name: 'Dilshod Karimov', job: 'CTO' },
  { image: 'speaker-3.jpg', name: 'Saida Nurmatova', job: 'COO' },
  { image: 'speaker-4.jpg', name: 'Javlonbek Usmonov', job: 'Head of Marketing' },

  // Row 2 (shift images so columns differ)
  { image: 'speaker-2.jpg', name: 'Nigora Yuldasheva', job: 'Project Manager' },
  { image: 'speaker-3.jpg', name: 'Sherzod Tursunov', job: 'Lead Designer' },
  { image: 'speaker-4.jpg', name: 'Malika Akhmedova', job: 'HR Director' },
  { image: 'speaker-1.jpg', name: 'Rustam Abdukarimov', job: 'Finance Manager' },

  // Row 3 (shift again)
  { image: 'speaker-3.jpg', name: 'Umida Rasulova', job: 'Business Analyst' },
  { image: 'speaker-4.jpg', name: 'Azizbek Toirov', job: 'Software Engineer' },
  { image: 'speaker-1.jpg', name: 'Shahnoza Qodirova', job: 'Legal Counsel' },
  { image: 'speaker-2.jpg', name: 'Bekzod Ergashev', job: 'Data Scientist' }
];
const breadcrumbs = computed(() => [
  {
    label: t('nav.home'),
    to: '/'
  },
  {
    label: t('nav.speakers'),
    to: '/speakers'
  }
]);
</script>

<style lang="scss" scoped>
.speakers {
  display: flex;
  flex-direction: column;
  gap: max(3rem, 20px);
  &__top {
    display: flex;
    flex-direction: column;
    gap: max(2rem, 10px);
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: max(2rem, 8px);
    align-items: flex-start;
    pointer-events: none;
    & > * {
      pointer-events: all;
    }
    &:hover {
      .speakers__item-image {
        transform: scale(1.1);
      }
    }
    &-container {
      display: flex;
    }
    &-image {
      transition: transform 0.3s;
      &-container {
        width: 64.1%;
        border-radius: max(1.6rem, 16px);
        overflow: hidden;
        display: flex;
        align-items: flex-start;
        @media screen and (max-width: $bp-sm) {
          width: 45.7%;
        }
      }
    }
    &-content {
      display: flex;
      flex-direction: column;
      gap: max(1.1rem, 4px);
    }
  }
  &__list {
    list-style: none;
    display: grid;
    gap: max(3rem, 20px);
    grid-template-columns: repeat(auto-fit, minmax(max(40rem, 250px), 1fr));
  }
}
</style>
