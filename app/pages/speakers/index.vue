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
              <img :src="speaker.image" :alt="speaker.name" class="speakers__item-image" />
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
import image1 from '/images/avif/speaker-1.avif';
import image2 from '/images/avif/speaker-2.avif';
import image3 from '/images/avif/speaker-3.avif';
import image4 from '/images/avif/speaker-4.avif';

const { t } = useI18n();
useAnimation({ selector: '.speakers__top>*', base: { x: -25 } });
useAnimation({ selector: '.speakers__item-container', base: { y: 20, rotateY: -35 } });

const speakers = [
  // Row 1
  { image: image1, name: 'Ahmadjon Rahmatjonov', job: 'Founder and CEO' },
  { image: image2, name: 'Dilshod Karimov', job: 'CTO' },
  { image: image3, name: 'Saida Nurmatova', job: 'COO' },
  { image: image4, name: 'Javlonbek Usmonov', job: 'Head of Marketing' },

  // Row 2 (shift images so columns differ)
  { image: image2, name: 'Nigora Yuldasheva', job: 'Project Manager' },
  { image: image3, name: 'Sherzod Tursunov', job: 'Lead Designer' },
  { image: image4, name: 'Malika Akhmedova', job: 'HR Director' },
  { image: image1, name: 'Rustam Abdukarimov', job: 'Finance Manager' },

  // Row 3 (shift again)
  { image: image3, name: 'Umida Rasulova', job: 'Business Analyst' },
  { image: image4, name: 'Azizbek Toirov', job: 'Software Engineer' },
  { image: image1, name: 'Shahnoza Qodirova', job: 'Legal Counsel' },
  { image: image2, name: 'Bekzod Ergashev', job: 'Data Scientist' }
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
    &:hover {
      .speakers__item-image {
        transform: scale(1.1);
      }
    }
    &-image {
      transition: transform 0.3s;
      &-container {
        width: 64.1%;
        border-radius: max(1.6rem, 16px);
        overflow: hidden;
        display: flex;
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
