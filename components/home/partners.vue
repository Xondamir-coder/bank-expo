<template>
	<section class="partners" id="home-partners">
		<div class="partners__top">
			<h2 class="partners__title">Partners & Sponsors</h2>
			<p class="partners__text">
				Expo Banking – the premier platform for banks and financial institutions to showcase
				the latest technologies, services, and business opportunities. Join us to explore
				the
			</p>
		</div>
		<div class="partners__list">
			<div class="partners__item" v-for="(partner, i) in partners" :key="i">
				<img :src="partner.img" :alt="partner.text" class="partners__image" />
				<p class="partners__item-text">{{ partner.text }}</p>
			</div>
		</div>
	</section>
</template>

<script setup>
import partners1 from '~/assets/images/partners-1.png';
import partners2 from '~/assets/images/partners-2.png';
import partners3 from '~/assets/images/partners-3.png';
const { $gsap } = useNuxtApp();
const partners = [
	{
		img: partners1,
		text: 'Oʻzbekiston Respublikasi Raqamli Texnologiyalar Vazirligi'
	},
	{
		img: partners2,
		text: 'Oʻzbekiston Respublikasi Milliy Gvardiyasi'
	},
	{
		img: partners1,
		text: 'Oʻzbekiston Respublikasi Raqamli Texnologiyalar Vazirligi'
	},
	{
		img: partners3,
		text: 'Oʻzbekiston Respublikasi Adliya Vazirligi'
	}
];

onMounted(async () => {
	const parentId = '#home-partners';
	const parentContainer = `${parentId} .partners`;
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
			y: i % 2 ? -travelDistance * 0.25 : travelDistance * 0.25,
			...fadeOnScrollTrigger(item, 'bottom 90%', 'top bottom')
		});
	});
});
</script>

<style lang="scss" scoped>
.partners {
	display: flex;
	flex-direction: column;
	gap: clamp(16px, 3vw, 36px);
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: clamp(10px, 3vw, 32px);
		@media only screen and (max-width: $bp-sm) {
			grid-template-columns: initial;
			grid-auto-flow: column;
			grid-auto-columns: 311px;
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
	&__image {
		width: 80px;
		aspect-ratio: 1;
	}
	&__item {
		display: flex;
		flex-direction: column;
		gap: 50px;
		border: 1px solid #0000001f;
		background: #ffffff;
		border-radius: clamp(20px, 3vw, 32px);
		padding: clamp(16px, 3vw, 30px);
		&-text {
			font-size: clamp(14px, 1vw, 17px);
			font-weight: 600;
			line-height: 1.5;
			opacity: 0.8;
		}
	}
	&__top {
		@include section-top;
	}
	&__title {
		@include section-title;
	}
	&__text {
		font-size: clamp(14px, 1vw, 17px);
		line-height: 1.5;
		max-width: 60ch;
		opacity: 0.8;
	}
}
</style>
