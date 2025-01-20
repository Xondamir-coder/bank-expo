<template>
	<section class="experts" id="home-experts">
		<div class="experts__top">
			<h2 class="experts__title">Experts Shaping the Future of Finance</h2>
			<p class="experts__text">
				Our speakers will share insights on modern banking technologies and the development
				trends of international financial markets
			</p>
		</div>
		<ClientOnly>
			<swiper-container class="experts__slider" ref="sliderRef" :init="false">
				<swiper-slide v-for="(image, id) in images" :key="id" class="experts__slide">
					<img :src="image" alt="person" class="experts__image" />
				</swiper-slide>
			</swiper-container>
		</ClientOnly>
		<div class="experts__divider"></div>
		<div class="experts__bottom">
			<div class="experts__bottom-item" v-for="(item, index) in items" :key="index">
				<div class="experts__icon-container">
					<component :is="item.icon" class="experts__icon" />
				</div>
				<div class="experts__bottom-content">
					<h3 class="experts__bottom-title">
						{{ item.title }}
					</h3>
					<p class="experts__bottom-text">{{ item.text }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
//  imports
import expert from '~/assets/images/expert.jpg';
import expert1 from '~/assets/images/expert-1.jpg';
import expert2 from '~/assets/images/expert-2.jpg';
import expert3 from '~/assets/images/expert-3.jpg';
import expert4 from '~/assets/images/expert-4.jpg';
import expert5 from '~/assets/images/expert-5.jpg';

//  components
import IconsShuriken from '~/components/icons/shuriken.vue';
import IconsLamp from '~/components/icons/lamp.vue';
import IconsSpeaking from '~/components/icons/speaking.vue';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

//  swiper ref
const sliderRef = ref();

//  data
const images = [expert, expert1, expert2, expert3, expert4, expert5];
const items = [
	{
		icon: IconsShuriken,
		title: 'Xalqaro moliya ekspertizasi',
		text: 'Global moliya bozorlarida strategik yondashuvlar va innovatsiyalar'
	},
	{
		icon: IconsLamp,
		title: 'Innovatsion yechimlar',
		text: 'Zamonaviy bank texnologiyalarini muvaffaqiyatli joriy etgan'
	},
	{
		icon: IconsSpeaking,
		title: 'Ommaviy nutq mahorati',
		text: 'Ko‘plab xalqaro konferensiya va forumlarning mashhur spikerlari'
	}
];

//  animations
const { $gsap } = useNuxtApp();
const initAnimations = () => {
	const parentId = '#home-experts';
	const parentContainer = `${parentId} .experts`;
	const travelDistance = 100;

	$gsap.from(`${parentContainer}__title`, {
		x: -travelDistance,
		...fadeOnScrollTrigger(`${parentContainer}__title`)
	});
	$gsap.from(`${parentContainer}__text`, {
		x: travelDistance,
		...fadeOnScrollTrigger(`${parentContainer}__text`)
	});
	$gsap.utils.toArray(`${parentContainer}__slide`).forEach((slide, i) => {
		$gsap.from(slide, {
			y: i % 2 ? travelDistance : -travelDistance,
			...fadeOnScrollTrigger(slide.parentElement, 'bottom 90%')
		});
	});
	$gsap.utils.toArray(`${parentContainer}__bottom-item`).forEach(item => {
		$gsap.from(item.firstElementChild, {
			x: -travelDistance / 4,
			...fadeOnScrollTrigger(item, 'bottom 90%', 'top 90%')
		});
		$gsap.from(item.lastElementChild, {
			x: travelDistance / 4,
			...fadeOnScrollTrigger(item, 'bottom 90%', 'top 90%')
		});
	});

	// Delay refresh to ensure Swiper DOM is ready
	setTimeout(() => {
		ScrollTrigger.refresh();
	}, 50);
};

//  init swiper
useSwiper(sliderRef, {
	grabCursor: true,
	breakpoints: {
		0: {
			slidesPerView: 1.5,
			spaceBetween: 16
		},
		768: {
			slidesPerView: 3.5,
			spaceBetween: 20
		},
		1024: {
			slidesPerView: 5.5,
			spaceBetween: 24
		}
	},
	on: {
		afterInit: initAnimations
	}
});
</script>

<style lang="scss" scoped>
.experts {
	border: 1px solid #cbd5e0;
	background: #f8f8f8;
	border-radius: clamp(14px, 3vw, 32px);
	display: flex;
	flex-direction: column;
	gap: clamp(16px, 3vw, 42px);
	padding-block: clamp(10px, 5vw, 60px);
	@media only screen and (max-width: $bp-lg) {
		padding-block: 16px;
	}
	& > *:not(.experts__divider) {
		margin-inline: clamp(10px, 5vw, 60px);
		@media only screen and (max-width: $bp-lg) {
			margin-inline: clamp(10px, 2vw, 60px);
		}
	}
	&__icon {
		width: clamp(50px, 9vw, 105px);
		aspect-ratio: 1;
		transform: translate(10%, 10%);
		&-container {
			border-radius: clamp(9px, 2vw, 22px);
			background-color: $clr-primary-dark;
			overflow: hidden;
			align-self: flex-start;
		}
	}
	&__bottom {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		column-gap: 32px;
		row-gap: 16px;
		&-title {
			font-size: clamp(18px, 2vw, 24px);
			font-weight: 700;
		}
		&-text {
			font-size: clamp(14px, 1vw, 17px);
			line-height: 1.5;
		}
		&-content {
			display: flex;
			flex-direction: column;
			gap: clamp(6px, 1vw, 12px);
		}
		&-item {
			display: grid;
			grid-template-columns: max-content 1fr;
			align-items: center;
			gap: clamp(10px, 1vw, 20px);
		}
	}
	&__divider {
		height: 1px;
		width: 100%;
		background-color: #e2e4e5;
		@media only screen and (max-width: $bp-md) {
			width: calc(100% - 20px);
			align-self: center;
		}
	}
	&__top {
		@include section-top;
	}
	&__text {
		font-size: clamp(14px, 1vw, 17px);
		line-height: 1.5;
		max-width: 60ch;
		opacity: 0.8;
	}
	&__title {
		@include section-title;
		font-weight: 700;
	}
	&__image {
		border-radius: 16px;
		width: 100%;
		object-fit: cover;
	}
}
</style>
