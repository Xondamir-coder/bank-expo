export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "~/assets/styles/abstracts/variables" as *;
          @use "~/assets/styles/abstracts/mixins" as *;
          `
        }
      }
    }
  },
  css: ['~/assets/styles/main.scss'],
  modules: ['nuxt-swiper', '@nuxt/eslint', '@nuxtjs/seo', '@nuxtjs/i18n'],
  app: {
    head: {
      titleTemplate: '%s | Bank Expo'
    }
  },
  seo: {
    meta: {
      author: 'https://spacelabs.studio',
      publisher: 'Spacelabs'
    }
  },
  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    baseUrl: 'https://bankexpo.uz',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    locales: [
      {
        code: 'en',
        language: 'en-US',
        file: 'en.json'
      },
      {
        code: 'ru',
        language: 'ru-RU',
        file: 'ru.json'
      },
      {
        code: 'uz',
        language: 'uz-UZ',
        file: 'uz.json'
      }
    ]
  }
});
