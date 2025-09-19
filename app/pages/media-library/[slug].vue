<template>
  <BreadcrumbsLayout :breadcrumbs>
    <div class="media">
      <IconButton class="media__button" @click="$router.back()">
        <IconsArrowLeft />
      </IconButton>
      <div class="media__content">
        <div class="media__content-top">
          <h1 class="heading-28-18">
            Bank va moliya tashkilotlarining Expo doirasida namoyish etgan xizmatlari
          </h1>
          <p class="text-18-14">Innovatsion yechimlar va raqamli xizmatlar taqdimoti</p>
        </div>
        <div class="media__content-bottom">
          <CalendarDate date="14.01.2025" />
        </div>
      </div>
      <Transition name="fade">
        <img :key="currentImage" :src="images[currentImage]" alt="banner" class="media__banner" >
      </Transition>
      <div class="media__images">
        <button
          v-for="(image, index) in images"
          :key="index"
          class="media__image-button"
          :class="{ active: index === currentImage }"
          @click="currentImage = index"
        >
          <img :src="image" alt="banner" class="media__image" >
        </button>
      </div>
    </div>
  </BreadcrumbsLayout>
</template>

<script setup>
import image1 from '~/assets/images/media-1.jpg';
import image2 from '~/assets/images/media-2.jpg';
import image3 from '~/assets/images/media-3.jpg';
import imageBanner from '~/assets/images/media-banner.jpg';

const { t } = useI18n();
const route = useRoute();

const breadcrumbs = computed(() => [
  {
    to: '/',
    label: t('nav.home')
  },
  {
    to: '/media-library',
    label: t('nav.media-library')
  },
  {
    to: `/media-library/${route.params.slug}`,
    label: route.params.slug
  }
]);

const images = [
  imageBanner,
  image1,
  image2,
  image3,
  imageBanner,
  image1,
  image2,
  image3,
  imageBanner,
  image1,
  image2,
  image3,
  imageBanner,
  image1
];

const currentImage = ref(0);
</script>

<style lang="scss" scoped>
.media {
  display: grid;
  grid-template-columns: 1fr 2.07fr 1fr;
  grid-template-areas:
    'iconbutton banner images'
    'content banner images';
  grid-auto-rows: max-content 1fr;
  gap: max(3.2rem, 20px);
  align-items: flex-start;
  @media screen and (max-width: $bp-md) {
    grid-auto-rows: max-content 1fr auto;
    grid-template-columns: 1fr;
    grid-template-areas:
      'iconbutton'
      'banner'
      'images'
      'content';
  }
  &__button {
    grid-area: iconbutton;
  }
  &__banner {
    grid-area: banner;
    aspect-ratio: 874/737;
  }
  &__image {
    transition: transform 0.2s;
    &-button {
      aspect-ratio: 1;
      display: flex;
      overflow: hidden;
      position: relative;
      @media screen and (max-width: $bp-md) {
        aspect-ratio: 1.25;
      }
      &.active::after {
        opacity: 1;
      }
      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: #00000059;
        border: 3px solid #c89e45;
        opacity: 0;
        transition: opacity 0.5s;
      }
      &:hover {
        .media__image {
          transform: scale(1.1);
        }
      }
    }
  }
  &__images {
    grid-area: images;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-content: flex-start;
    gap: max(1.2rem, 8px);
    @media screen and (max-width: $bp-md) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  &__content {
    grid-area: content;
    display: flex;
    flex-direction: column;
    gap: max(2.4rem, 16px);
    &-bottom {
      padding-top: max(2rem, 16px);
      border-top: 1px solid #e9eaec;
    }
    &-top {
      display: flex;
      flex-direction: column;
      gap: max(1.6rem, 8px);
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
