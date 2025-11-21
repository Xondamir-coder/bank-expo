<template>
  <BreadcrumbsLayout :breadcrumbs>
    <ClientOnly>
      <div class="media">
        <h2 class="heading">
          {{ $t('media-center') }}
        </h2>
        <SpinnerLoader v-if="!media" />
        <nav v-else-if="media.data.length" class="media__list">
          <div v-for="item in media.data" :key="item?.id" class="media__item-box">
            <NuxtLink class="media__item" :to="$localePath(`/media/${item?.id}`)">
              <div class="media__item-images">
                <div
                  v-for="(image, i) in JSON.parse(item?.gallery)?.slice(0, 3)"
                  :key="i"
                  class="media__item-image-box"
                >
                  <img :src="`${DOMAIN_URL}/${image}`" alt="banner" class="media__item-image" />
                </div>
              </div>
              <div class="media__item-content">
                <div class="media__item-top">
                  <h3 class="heading-24-17">
                    {{ item?.[`title_${$i18n.locale}`] }}
                  </h3>
                  <p class="text-18-14">
                    {{ item?.[`body_${$i18n.locale}`] }}
                  </p>
                </div>
                <div class="media__item-bottom">
                  <CalendarDate :date="item?.date" />
                </div>
              </div>
            </NuxtLink>
          </div>
        </nav>
        <h3 v-else>{{ $t('no-results') }}</h3>
      </div>
      <AppPagination
        :pages-count="media?.last_page || 1"
        page-name="media"
        @change-page="changePage"
      />
    </ClientOnly>
  </BreadcrumbsLayout>
</template>

<script setup>
const route = useRoute();
const apiStore = useApiStore();
const { media } = storeToRefs(apiStore);
const { fetchMedia } = apiStore;

if (import.meta.client) {
  fetchMedia({ take: 10, page: route.query.page || 1 });
}

const changePage = async () => {
  await fetchMedia(route.query.page || 1);
};

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

useGSAPAnimate({ selector: '.media__item-box', base: { y: 50 } });
useGSAPAnimate({ selector: '.media .heading', base: { x: -30 } });

useMySEO('media');
</script>

<style lang="scss" scoped>
.media {
  display: flex;
  flex-direction: column;
  gap: max(3rem, 20px);
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max(50rem, 300px), 1fr));
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
