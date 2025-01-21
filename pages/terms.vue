<template>
	<main class="terms">
		<Breadcrumbs :breadcrumbs="breadcrumbs" />
		<Legal
			title="Terms & Conditions"
			subtitle="Welcome to Bank Expo! By accessing or using this website, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please refrain from using our site."
			:content="content" />
	</main>
</template>

<script setup>
const breadcrumbs = [
	{
		to: '/',
		label: 'Home'
	},
	{
		to: '/terms',
		label: 'Terms and Conditions'
	}
];
const content = [
	{
		title: 'Use of the Website',
		subtitle:
			'The Expo Bank Exhibition is a premier international event uniting banking institutions from Uzbekistan and around the globe under one roof. As a dynamic platform for collaboration, innovation, and growth, the exhibition serves as a gateway to the future of banking and financial services.',
		texts: [
			'You must be at least [Insert Age, e.g., 18 years] to use this website.',
			'You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit the use of this website by any third party.',
			'Unauthorized use of this website may give rise to a claim for damages or be a criminal offense.'
		]
	},
	{
		title: 'Intellectual Property Rights',
		subtitle: null,
		texts: [
			'All content on this website, including but not limited to text, images, logos, and code, is owned by or licensed to Bank Expo.',
			'You may not reproduce, distribute, or otherwise exploit any content on this website without prior written consent from us.'
		]
	},
	{
		title: 'User Account',
		subtitle: null,
		texts: [
			'If you create an account on our website, you are responsible for maintaining the confidentiality of your account credentials.',
			'You agree to notify us immediately of any unauthorized use of your account.',
			'We reserve the right to terminate accounts that violate these terms.'
		]
	},
	{
		title: 'User Account',
		subtitle: null,
		texts: [
			'If you create an account on our website, you are responsible for maintaining the confidentiality of your account credentials.',
			'You agree to notify us immediately of any unauthorized use of your account.',
			'We reserve the right to terminate accounts that violate these terms.'
		]
	},
	{
		title: 'User Account',
		subtitle: null,
		texts: [
			'If you create an account on our website, you are responsible for maintaining the confidentiality of your account credentials.',
			'You agree to notify us immediately of any unauthorized use of your account.',
			'We reserve the right to terminate accounts that violate these terms.'
		]
	},
	{
		title: 'User Account',
		subtitle: null,
		texts: [
			'If you create an account on our website, you are responsible for maintaining the confidentiality of your account credentials.',
			'You agree to notify us immediately of any unauthorized use of your account.',
			'We reserve the right to terminate accounts that violate these terms.'
		]
	}
];
import { useHead } from '@vueuse/head';

useHead({
	title: 'Terms and Conditions | Bank Expo',
	meta: [
		{
			name: 'description',
			content:
				'Review the Terms and Conditions of Bank Expo to understand the rules and guidelines for using our website and services.'
		},
		{
			property: 'og:title',
			content: 'Terms and Conditions | Bank Expo'
		},
		{
			property: 'og:description',
			content:
				'Understand the terms of use for Bank Expo, including guidelines for accessing and using our resources and services.'
		},
		{
			property: 'og:url',
			content: 'https://bankexpo.uz/terms'
		},
		{
			property: 'og:type',
			content: 'website'
		},
		// {
		// 	property: 'og:image',
		// 	content: 'https://bankexpo.uz/images/terms-banner.jpg'
		// },
		{
			name: 'twitter:card',
			content: 'summary_large_image'
		},
		{
			name: 'twitter:title',
			content: 'Terms and Conditions | Bank Expo'
		},
		{
			name: 'twitter:description',
			content:
				'Learn more about the terms and conditions of Bank Expo and how they govern the use of our website and services.'
		}
		// {
		// 	name: 'twitter:image',
		// 	content: 'https://bankexpo.uz/images/terms-banner.jpg'
		// }
	]
});
</script>

<style lang="scss" scoped>
.terms {
	display: flex;
	gap: clamp(20px, 3vw, 30px);
	flex-direction: column;
	@include section-margin-inline;
}
</style>
