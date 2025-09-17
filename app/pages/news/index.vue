<template>
  <main id="news" class="news">
    <NavBreadcrumbs :breadcrumbs="breadcrumbs" />
    <div class="news__container">
      <Filter
        :filters="filters"
        :current-type="currentType"
        title="Expo News"
        @filter="filterItems"
      />
      <div class="news__wrapper">
        <div class="news__list">
          <NewsItem v-for="(item, i) in news" :key="i" :news="item" />
        </div>
        <Pagination
          id="news-pagination"
          :pages-count="pagesCount"
          :current-page="currentPage"
          @change-page="fetchItems"
        />
      </div>
      <NewsSidenav title="Most viewed news" :similars="similarNews" />
    </div>
  </main>
</template>

<script setup>
import testNewsImg from '~/assets/images/test-news.jpg';

const breadcrumbs = [
  {
    to: '/',
    label: 'Home'
  },
  {
    to: '/news',
    label: 'News'
  }
];

// test data without API
const PROTOTYPE_NEWS_COUNT = 9;
const PROTOTYPE_NEWS_ITEM = {
  img: testNewsImg,
  title:
    'What are bay windows: can you eat them, wear them, or take them on a trip? Neither. We tell and show you in this text',
  publishedDate: '2025-01-13T19:00:00.000Z',
  views: 141,
  title_slug: 'some-news'
};
const news = Array(PROTOTYPE_NEWS_COUNT).fill(PROTOTYPE_NEWS_ITEM);
const filters = [
  {
    label: 'All news',
    type: 'all'
  },
  {
    label: 'Industry news',
    type: 'industry'
  },
  {
    label: 'Expert insights',
    type: 'expert'
  },
  {
    label: 'Only banks systems',
    type: 'only banks'
  },
  {
    label: 'What’s news banks',
    type: 'news banks'
  }
];
const pagesCount = 12;

// similars
const PROTOTYPE_SIMILAR_COUNT = 4;
const similarNews = Array(PROTOTYPE_SIMILAR_COUNT).fill(PROTOTYPE_NEWS_ITEM);

//  refs
const currentType = ref('all');
const currentPage = ref(1);

//  methods
const setCurrentType = type => (currentType.value = type);
const setCurrentPage = page => (currentPage.value = page);
const fetchItems = page => {
  setCurrentPage(page);
  console.log('fetching new news ...');
};
const filterItems = type => {
  setCurrentType(type);
  console.log('filtering items ...');
};

// seo
useHead({
  title: 'Banking News & Updates | Bank Expo',
  meta: [
    {
      name: 'description',
      content:
        'Stay updated with the latest banking news, industry trends, and financial insights. Bank Expo brings you accurate and timely updates from the banking sector.'
    },
    {
      name: 'keywords',
      content: 'banking news, financial updates, banking industry trends, latest banking news'
    },
    {
      property: 'og:title',
      content: 'Banking News & Updates | Bank Expo'
    },
    {
      property: 'og:description',
      content:
        'Explore the latest news and updates from the banking industry. Stay informed with Bank Expo.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://bankexpo.uz/news'
    },
    // {
    // 	property: 'og:image',
    // 	content: 'https://bankexpo.uz/assets/news-banner.jpg' // Replace with the actual image URL
    // },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Banking News & Updates | Bank Expo'
    },
    {
      name: 'twitter:description',
      content:
        'Get the latest insights and updates from the banking sector. Stay informed with Bank Expo.'
    }
    // {
    // 	name: 'twitter:image',
    // 	content: 'https://bankexpo.uz/assets/news-banner.jpg' // Replace with the actual image URL
    // }
  ],
  link: [{ rel: 'canonical', href: 'https://bankexpo.uz/news' }]
});
</script>

<style lang="scss" scoped>
.news {
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 3vw, 30px);
  @include section-margin-inline;

  &__wrapper {
    grid-area: list;
    display: flex;
    flex-direction: column;
    gap: clamp(16px, 3vw, 30px);
  }
  &__container {
    display: grid;
    grid-template-areas:
      'filter sidenav'
      'list sidenav';
    grid-template-columns: 1fr max(400px, 23%);
    row-gap: clamp(28px, 3vw, 30px);
    column-gap: clamp(28px, 3.5vw, 32px);
    @media only screen and (max-width: $bp-lg) {
      grid-template-areas:
        'filter'
        'list'
        'sidenav';
      grid-template-columns: 100%;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    row-gap: clamp(16px, 2vw, 30px);
    column-gap: clamp(16px, 2.2vw, 32px);
    @media only screen and (max-width: $bp-md) {
      grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    }
  }
}
</style>
