<template>
  <BreadcrumbsLayout :breadcrumbs>
    <div class="media">
      <h2 class="heading">
        {{ $t('media-center') }}
      </h2>
      <nav class="media__list">
        <div v-for="(item, index) in items" :key="index" class="media__item-box">
          <NuxtLink class="media__item" :to="$localePath(`/media/${item.slug}`)">
            <div class="media__item-images">
              <div v-for="(image, i) in item.images" :key="i" class="media__item-image-box">
                <img :src="image" alt="banner" class="media__item-image" />
              </div>
            </div>
            <div class="media__item-content">
              <div class="media__item-top">
                <h3 class="heading-24-17">
                  {{ item.title }}
                </h3>
                <p class="text-18-14">
                  {{ item.text }}
                </p>
              </div>
              <div class="media__item-bottom">
                <CalendarDate :date="item.date" />
              </div>
            </div>
          </NuxtLink>
        </div>
      </nav>
    </div>
  </BreadcrumbsLayout>
</template>

<script setup>
import image1 from '/images/avif/media-1.avif';
import image2 from '/images/avif/media-2.avif';
import image3 from '/images/avif/media-3.avif';

const { t } = useI18n();

const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/media',
    label: t('nav.media-library')
  }
]);
const items = Array(20).fill({
  title: 'Bank va moliya tashkilotlarining Expo doirasida namoyish etgan xizmatlari',
  text: 'Innovatsion yechimlar va raqamli xizmatlar taqdimoti',
  images: [image1, image2, image3],
  slug: 'moliya-asd',
  date: '14.01.2025'
});

useGSAPAnimate({ selector: '.media__item-box', base: { y: 50 } });
useGSAPAnimate({ selector: '.media .heading', base: { x: -30 } });
</script>

<style lang="scss" scoped>
.media {
  display: flex;
  flex-direction: column;
  gap: max(3rem, 20px);
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(max(50rem, 300px), 1fr));
    gap: max(3rem, 16px);
  }
  &__item {
    overflow: hidden;
    padding: max(1.6rem, 8px);
    background-color: #fff;
    border-radius: max(2rem, 20px);
    display: flex;
    flex-direction: column;
    gap: max(2.4rem, 16px);
    transition: all 0.35s;
    $hover-val: 5%;
    &:hover {
      box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.12);
      .media__item-image {
        scale: 1.15;
      }
      .media__item-image-box:first-child > * {
        translate: -#{$hover-val} -#{$hover-val};
      }
      .media__item-image-box:nth-child(2) > * {
        translate: $hover-val -#{$hover-val};
      }
      .media__item-image-box:last-child > * {
        translate: -#{$hover-val} $hover-val;
      }
    }
    &-box {
      display: flex;
    }
    &-images {
      display: grid;
      grid-template-columns: 1.36fr 1fr;
      gap: max(1.2rem, 8px);
    }
    &-bottom {
      padding-top: max(2rem, 16px);
      border-top: 1px solid #e9eaec;
    }
    &-image {
      transition: all 0.35s;
      &-box {
        border-radius: max(1.2rem, 7px);
        overflow: hidden;
        display: flex;
        &:nth-child(2) {
          grid-row: 2 / 3;
        }
        &:last-child {
          grid-row: span 2;
        }
      }
    }
    &-top {
      display: flex;
      flex-direction: column;
      gap: max(0.8rem, 8px);
    }
    &-content {
      display: flex;
      flex-direction: column;
      gap: max(2rem, 16px);
    }
  }
}
</style>
