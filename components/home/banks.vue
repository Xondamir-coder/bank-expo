<template>
	<section class="banks">
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
import IconsTrastBank from '~/components/icons/trast_bank.vue';
import IconsZiraatBank from '~/components/icons/ziraat_bank.vue';
import IconsVisa from '~/components/icons/visa.vue';
import IconsMastercard from '~/components/icons/mastercard.vue';

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
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
		gap: clamp(20px, 3vw, 32px);
		@media only screen and (max-width: $bp-sm) {
			display: grid;
			grid-template-columns: initial;
			grid-auto-flow: column;
			grid-auto-columns: 240px;
			overflow-x: auto;
			scroll-snap-type: x mandatory;
			& > * {
				scroll-snap-align: start;
			}
		}
	}
	&__top {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	&__text {
		font-size: 17px;
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
