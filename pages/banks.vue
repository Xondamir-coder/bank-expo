<template>
	<main class="banks">
		<Breadcrumbs :breadcrumbs="breadcrumbs" />
		<div class="banks__container">
			<BanksSearch v-model="query" class="banks__box" @submit.prevent="submitQuery" />
			<div class="banks__list" id="banks-list">
				<BanksItem v-for="(bank, i) in banks" :key="i" :bank="bank" />
			</div>
			<BanksSidebar class="banks__box" />
		</div>
		<Pagination id="banks-pagination" />
	</main>
</template>

<script setup>
//  imports
import IconsBank from '~/components/icons/bank.vue';

//  provide for pagination
const PAGES_COUNT = 12;
const fetchNewItems = () => {
	console.log('hello from banks');
};
provide('pagesCount', PAGES_COUNT);
provide('fetchNewItems', fetchNewItems);

//  data
const breadcrumbs = [
	{
		to: '/',
		label: 'Home'
	},
	{
		to: '/banks',
		label: 'Banks'
	}
];
const BANKS_COUNT = 10;
const banks = Array(BANKS_COUNT).fill({
	icon: IconsBank,
	name: 'Infin Bank',
	tel: '+998 78 111 001',
	loanInterest: 29,
	depositInterest: 25,
	website: 'https://google.com'
});

//  reactive state
const query = ref('');

//  animation
const { $gsap } = useNuxtApp();
const animateItems = () => {
	const items = $gsap.utils.toArray('#banks-list .bank');
	items.forEach(item => {
		const iconContainer = item.querySelector('.bank__icon-container');
		const title = item.querySelector('.bank__title');
		const details = item.querySelectorAll('.bank__detail');

		$gsap.from(iconContainer, {
			x: -25,
			...fadeOnScrollTrigger(iconContainer, 'bottom 90%')
		});
		$gsap.from(title, {
			x: 25,
			...fadeOnScrollTrigger(title, 'bottom 90%')
		});
		$gsap.from(details, {
			y: 15,
			stagger: 0.1,
			...fadeOnScrollTrigger(details, 'bottom 90%')
		});
	});
};
onMounted(() => {
	if (window.innerWidth < 768) animateItems();
});

//  submit query
const submitQuery = () => {};

//  seo
useHead({
	title: 'Explore Banks - Compare Loan & Deposit Rates | Bank Expo',
	meta: [
		{
			name: 'description',
			content:
				'Discover comprehensive banking data on Bank Expo. Compare loan and deposit rates, find bank contact information, and explore a directory of banks tailored to your needs.'
		},
		{
			name: 'keywords',
			content:
				'banks, loan rates, deposit rates, bank directory, banking data, bank contact information'
		},
		{
			property: 'og:title',
			content: 'Explore Banks - Compare Loan & Deposit Rates | Bank Expo'
		},
		{
			property: 'og:description',
			content:
				'Search and explore banks with detailed data on loan and deposit rates. Find the right bank for you on Bank Expo.'
		},
		{
			property: 'og:type',
			content: 'website'
		},
		{
			property: 'og:url',
			content: 'https://bankexpo.uz/banks'
		},
		// {
		// 	property: 'og:image',
		// 	content: 'https://bankexpo.uz/assets/banks-directory.jpg' // Replace with an actual image URL
		// },
		{
			name: 'twitter:card',
			content: 'summary_large_image'
		},
		{
			name: 'twitter:title',
			content: 'Explore Banks - Compare Loan & Deposit Rates | Bank Expo'
		},
		{
			name: 'twitter:description',
			content:
				'Compare loan and deposit rates across banks. Find contact information and explore our bank directory on Bank Expo.'
		}
		// {
		// 	name: 'twitter:image',
		// 	content: 'https://bankexpo.uz/assets/banks-directory.jpg' // Replace with an actual image URL
		// }
	],
	link: [{ rel: 'canonical', href: 'https://bankexpo.uz/banks' }]
});
</script>

<style lang="scss" scoped>
@keyframes slide-from-bottom {
	from {
		transform: translateY(20px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}
.banks {
	display: flex;
	flex-direction: column;
	gap: clamp(20px, 1.3vw, 30px);
	&__container {
		display: grid;
		column-gap: clamp(20px, 2vw, 32px);
		row-gap: clamp(20px, 1.6vw, 30px);
		grid-template-areas:
			'search sidebar'
			'banks sidebar';
		@media only screen and (min-width: $bp-lg) {
			grid-template-columns: 1fr 32%;
		}
		@media only screen and (max-width: $bp-lg) {
			grid-template-areas:
				'search'
				'sidebar'
				'banks';
		}
	}
	&__list {
		grid-area: banks;
		display: flex;
		flex-direction: column;
		gap: 12px;
		@media only screen and (max-width: $bp-md) {
			gap: 16px;
			animation: slide-from-bottom 0.7s backwards 0.5s;
		}
	}
	&__box {
		border: 1px solid #e9eaec;
		background: #ffffff;
		backdrop-filter: blur(30px);
		border-radius: clamp(16px, 2vw, 32px);
		padding: clamp(16px, 2vw, 30px);
	}
	& > *:not([data-no-margin]) {
		@include section-margin-inline;
	}
}
</style>
