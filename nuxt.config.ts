// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 compatibilityDate: '2024-11-01',
 devtools: { enabled: true },

 googleFonts: {
					families: {
									Roboto: [400, 500, 700, 900]
					}
	},

 vite: {
					css: {
									preprocessorOptions: {
													scss: {
																	additionalData:
																					'@use "~/assets/styles/abstracts/_variables.scss" as *; @use "~/assets/styles/abstracts/_mixins.scss" as *;'
													}
									}
					}
	},

 css: [
					'~/assets/styles/main.scss' // Replace with the path to your SCSS file
	],

 modules: ['nuxt-swiper']
});