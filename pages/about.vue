<template>
	<main class="about">
		<Breadcrumbs :breadcrumbs="breadcrumbs" />
		<AboutHero />
		<div class="about__wrapper">
			<AboutGlobal />
			<AboutTeam />
		</div>
	</main>
</template>

<script setup>
const breadcrumbs = [
	{
		to: '/',
		label: 'Home'
	},
	{
		to: '/about',
		label: 'About'
	}
];

useHead({
	title: 'About Us - Leading Banking Platform | Bank Expo',
	meta: [
		{
			name: 'description',
			content:
				'Learn about Bank Expo, the leading platform connecting visitors from over 50 countries with comprehensive banking data. Meet our team and explore the industries we serve.'
		},
		{
			name: 'keywords',
			content:
				'About banking platform, banking industries, global banking, team, countries, banking data'
		},
		{
			property: 'og:title',
			content: 'About Us - Leading Banking Platform | Bank Expo'
		},
		{
			property: 'og:description',
			content:
				'Discover how Bank Expo connects visitors from 50+ countries with banking data. Learn about our industries and team.'
		},
		{
			property: 'og:type',
			content: 'website'
		},
		{
			property: 'og:url',
			content: 'https://bankexpo.uz/about'
		},
		// {
		// 	property: 'og:image',
		// 	content: 'https://bankexpo.uz/assets/about-page-image.jpg' // Update with your actual image URL
		// },
		{
			name: 'twitter:card',
			content: 'summary_large_image'
		},
		{
			name: 'twitter:title',
			content: 'About Us - Leading Banking Platform | Bank Expo'
		},
		{
			name: 'twitter:description',
			content:
				'Bank Expo connects global visitors with comprehensive banking data. Explore our team, countries served, and industries.'
		}
		// {
		// 	name: 'twitter:image',
		// 	content: 'https://bankexpo.uz/assets/about-page-image.jpg' // Update with your actual image URL
		// }
	],
	link: [{ rel: 'canonical', href: 'https://bankexpo.uz/about' }]
});
</script>

<style lang="scss" scoped>
.about {
	color: $clr-secondary;
	& > *:not([data-no-margin]) {
		@include section-margin-inline;
	}
	&__wrapper {
		background-color: #fff;
		border-radius: clamp(16px, 3vw, 32px);
		padding: clamp(16px, 6vw, 80px);
		margin-top: clamp(20px, 6vw, 80px);
		display: flex;
		flex-direction: column;
		gap: clamp(20px, 6vw, 86px);
	}
}
</style>
