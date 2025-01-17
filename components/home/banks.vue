<template>
	<section class="banks" id="home-banks">
		<div class="banks__top">
			<h2 class="banks__title">Participating Banks</h2>
			<p class="banks__text">
				Discover the leading banks and financial institutions in the industry. Their logos
				showcase innovation and excellence
			</p>
		</div>
		<div class="banks__list">
			<div class="banks__item" v-for="(bank, index) in banks" :key="index">
				<component :is="bank" class="banks__icon" data-original />
			</div>
		</div>
	</section>
</template>

<script setup>
import IconsBank from '~/components/icons/bank.vue';
import IconsBank17 from '~/components/icons/bank-17.vue';
import IconsBank6 from '~/components/icons/bank-6.vue';
import IconsBank9 from '~/components/icons/bank-9.vue';
import IconsBank10 from '~/components/icons/bank-10.vue';
import IconsBank11 from '~/components/icons/bank-11.vue';
import IconsBank13 from '~/components/icons/bank-13.vue';
import IconsBank14 from '~/components/icons/bank-14.vue';
import IconsTrastBank from '~/components/icons/trast-bank.vue';
import IconsZiraatBank from '~/components/icons/ziraat-bank.vue';
import IconsVisa from '~/components/icons/visa.vue';
import IconsMastercard from '~/components/icons/mastercard.vue';
const { $gsap } = useNuxtApp();

const banks = [
	IconsTrastBank,
	IconsBank17,
	IconsBank14,
	IconsBank13,
	IconsBank11,
	IconsBank10,
	IconsBank6,
	IconsZiraatBank,
	IconsVisa,
	IconsMastercard,
	IconsBank,
	IconsBank9
];

onMounted(async () => {
	const parentId = '#home-banks';
	const parentContainer = `${parentId} .banks`;
	const travelDistance = 100;
	$gsap.from(`${parentContainer}__title`, {
		x: -travelDistance,
		...fadeOnScrollTrigger(`${parentContainer}__title`)
	});
	$gsap.from(`${parentContainer}__text`, {
		x: travelDistance,
		...fadeOnScrollTrigger(`${parentContainer}__text`)
	});
	$gsap.utils.toArray(`${parentContainer}__item`).forEach((item, i) => {
		$gsap.from(item, {
			x: i % 2 ? travelDistance * 0.25 : -travelDistance * 0.25,
			...fadeOnScrollTrigger(item, 'bottom 90%', 'top bottom')
		});
	});
});
</script>

<style lang="scss" scoped>
.banks {
	display: flex;
	flex-direction: column;
	gap: 36px;
	&__item {
		@include flex-center;
		aspect-ratio: 1;
		background-color: #f8f8f8;
		border: 1px solid #cbd5e0;
		border-radius: 32px;
	}
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: clamp(20px, 3vw, 32px);
		@media only screen and (max-width: $bp-sm) {
			display: grid;
			grid-template-columns: initial;
			grid-auto-flow: column;
			grid-auto-columns: 240px;
			overflow-x: auto;
			scroll-snap-type: x mandatory;
			&::-webkit-scrollbar {
				display: none;
			}
			& > * {
				scroll-snap-align: start;
			}
		}
	}
	&__top {
		@include section-top;
	}
	&__text {
		font-size: clamp(14px, 1vw, 17px);
		line-height: 1.5;
		max-width: 55ch;
		opacity: 0.8;
	}
	&__title {
		@include section-title;
	}
	&__icon {
		width: 70%;
	}
}
</style>
