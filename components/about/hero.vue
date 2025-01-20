<template>
	<section class="hero">
		<div class="hero__circles">
			<div class="hero__circle" v-for="i in SLIDES_COUNT" :key="i"></div>
		</div>
		<div class="hero__top">
			<div class="hero__icons">
				<div class="hero__icon-container" v-for="icon in icons" :key="icon">
					<component :is="icon" class="hero__icon" data-original />
				</div>
			</div>
			<div class="hero__content">
				<p class="hero__text">
					Expo Banking – the premier platform for banks and financial institutions
				</p>
				<h1 class="hero__title">
					<span class="hero__title--grey">Expo Banking – the premier</span>
					<span class="hero__title--yellow">platform for banks</span>
				</h1>
			</div>
		</div>
		<div class="hero__bottom">
			<div class="hero__images">
				<img
					alt="banner"
					class="hero__image"
					v-for="(img, i) in images"
					:class="{ active: currentSlide === i }"
					:src="img"
					:key="i" />
			</div>
			<div class="hero__action">
				<div class="hero__bar--outer" v-for="i in SLIDES_COUNT" :key="i">
					<div class="hero__bar--inner"></div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
// Imports =
// Assets
import img1 from '~/assets/images/about-hero.png';
// Components
import IconsBank from '~/components/icons/bank.vue';
import IconsBank6 from '~/components/icons/bank-6.vue';
import IconsBank10 from '~/components/icons/bank-10.vue';
import IconsBank11 from '~/components/icons/bank-11.vue';
import IconsBank13 from '~/components/icons/bank-13.vue';
import IconsBank14 from '~/components/icons/bank-14.vue';
import IconsBank17 from '~/components/icons/bank-17.vue';
import TrastBank from '~/components/icons/trast-bank.vue';
import ZiraatBank from '~/components/icons/ziraat-bank.vue';

// Constants
const SLIDES_COUNT = 4; // Total number of slides
const CHANGE_INTERVAL = 3000; // Time (ms) for each slide change

// Reactive State
const currentSlide = ref(0);

// Nuxt App Context
const { $gsap } = useNuxtApp();

// Data Arrays
const images = Array(SLIDES_COUNT).fill(img1); // Repeated slide images
const icons = [
	IconsBank,
	IconsBank6,
	IconsBank10,
	IconsBank11,
	IconsBank13,
	IconsBank14,
	IconsBank17,
	TrastBank,
	ZiraatBank
];

// Functions
// Animate the progress bar for the current slide
const animateProgressBar = () => {
	$gsap.to(`.hero__bar--outer:nth-child(${currentSlide.value + 1}) .hero__bar--inner`, {
		scaleX: 1, // Full progress
		duration: CHANGE_INTERVAL / 1000 // Duration in seconds
	});
};

// Reset all progress bars
const resetProgressBars = () => {
	$gsap.set('.hero__bar--inner', { scaleX: 0 });
};

// Lifecycle Hooks
let slideInterval;

onMounted(() => {
	// Initialize the first slide's progress bar
	animateProgressBar();

	// Start the automatic slide interval
	slideInterval = setInterval(() => {
		// Move to the next slide
		currentSlide.value = (currentSlide.value + 1) % SLIDES_COUNT;

		// Reset progress bars if looping back to the first slide
		if (currentSlide.value === 0) {
			resetProgressBars();
		}

		// Animate the progress bar for the current slide
		animateProgressBar();
	}, CHANGE_INTERVAL);
});

onBeforeUnmount(() => {
	// Clear the interval when the component is unmounted
	clearInterval(slideInterval);
});
</script>

<style lang="scss" scoped>
@use 'sass:list';
@keyframes slide-from-right {
	from {
		transform: translateX(100px);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}
@keyframes slide-from-left {
	from {
		transform: translateX(-100px);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}
@keyframes scale-up {
	from {
		transform: scale(0);
		opacity: 0;
	}
	to {
		transform: scale(1);
		opacity: 1;
	}
}
.hero {
	background-color: #fff;
	border-radius: clamp(16px, 3vw, 32px);
	margin-top: clamp(20px, 3vw, 30px);
	position: relative;
	overflow: hidden;
	$duration: 1s;
	&__circles {
		position: absolute;
		inset: 0;
		display: grid;
		z-index: 1;
		@media only screen and (max-width: $bp-lg) {
			transform: scale(1);
			inset: auto;
			left: 50%;
			transform: translateX(-50%);
			width: max(766px, 150vw);
			aspect-ratio: 1;
		}
		@media only screen and (max-width: $bp-sm) {
			transform: translate(-50%, -3%) scaleX(1.2);
		}
	}
	&__circle {
		$scales: (0.83, 0.65, 0.45, 0.3);

		border: 1px solid #cbd5e0;
		border-radius: 50%;
		grid-area: 1 / 1 / 2 / 2;

		@for $i from 1 through list.length($scales) {
			&:nth-child(#{$i}) {
				transform: scale(#{list.nth($scales, $i)});
			}
		}

		@media only screen and (max-width: $bp-sm) {
			$scales: (0.9, 0.75, 0.6, 0.45);

			@for $i from 1 through list.length($scales) {
				&:nth-child(#{$i}) {
					transform: scale(#{list.nth($scales, $i)});
				}
			}
		}
	}
	&__top {
		display: grid;
		& > * {
			grid-area: 1/1/2/2;
		}
	}

	&__text {
		font-size: clamp(12px, 1.5vw, 20px);
		text-align: center;
		color: #323b49;
		animation: slide-from-left 1s;
	}
	&__bottom {
		display: grid;
		border-radius: clamp(12px, 3vw, 32px);
		overflow: hidden;
		& > * {
			grid-area: 1/1/2/2;
		}
	}
	&__images {
		display: grid;
		& > * {
			grid-area: 1/1/2/2;
		}
	}
	&__content {
		display: flex;
		flex-direction: column;
		gap: clamp(16px, 2vw, 24px);
		padding-block: clamp(30px, 9vw, 150px);
		padding-inline: 10px;
		z-index: 2;
		position: relative;
		@media only screen and (max-width: $bp-lg) {
			padding-top: 190px;
		}
	}
	&__title {
		font-size: clamp(18px, 3vw, 54px);
		font-weight: 900;
		text-align: center;
		text-transform: uppercase;
		line-height: 1.2;
		display: flex;
		flex-direction: column;
		@media only screen and (max-width: $bp-sm) {
			line-height: 24px;
		}
		&--grey {
			color: #111827;
			display: inline-block;
			animation: slide-from-right $duration;
		}
		&--yellow {
			display: inline-block;
			animation: slide-from-left $duration;
			color: $clr-yellow;
		}
	}
	&__action {
		align-self: flex-end;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-auto-rows: 8px;
		padding: clamp(16px, 3vw, 36px);
		gap: clamp(16px, 2vw, 24px);
		z-index: 10;
	}
	&__bar {
		&--outer {
			background-color: #ffffff29;
			backdrop-filter: blur(32px);
			position: relative;
			border-radius: 37px;
			overflow: hidden;
		}
		&--inner {
			position: absolute;
			inset: 0;
			background-color: #fff;
			transform: scaleX(0);
			transform-origin: left;
		}
	}
	&__image {
		width: 100%;
		object-fit: cover;
		aspect-ratio: 1780/800;
		opacity: 0;
		transition: opacity 0.5s;
		&.active {
			opacity: 1;
			z-index: 5;
		}
		@media only screen and (max-width: $bp-md) {
			aspect-ratio: 328/200;
		}
	}
	&__icons {
		position: relative;
		z-index: 3;
	}
	&__icon {
		width: 66%;
		&-container {
			@include flex-center;
			position: absolute;
			width: 60px;
			aspect-ratio: 1;
			background: #ffffff;
			box-shadow: 0px 1.2px 27px 0px #0000001a;
			border-radius: 16px;
			animation-name: scale-up;
			animation-duration: 0.4s;
			animation-fill-mode: backwards;
			@for $i from 1 through 9 {
				&:nth-child(#{$i}) {
					animation-delay: $i * 0.07s;
				}
			}
			&:first-child {
				left: 15%;
				top: 20%;
				@media only screen and (max-width: $bp-lg) {
					right: 40%;
					left: auto;
				}
				@media only screen and (max-width: $bp-sm) {
					top: 22px;
					right: 130px - 16px;
				}
			}
			&:nth-child(2) {
				right: 16%;
				top: 27%;
				width: clamp(60px, 5vw, 80px);
				border-radius: clamp(18px, 2vw, 24px);
				@media only screen and (max-width: $bp-lg) {
					top: 61%;
				}
				@media only screen and (max-width: $bp-sm) {
					right: -20px;
					bottom: 35px;
					top: auto;
				}
			}
			&:nth-child(3) {
				right: 11%;
				bottom: 5%;
				width: clamp(80px, 7vw, 100px);
				border-radius: clamp(20px, 2vw, 32px);
				@media only screen and (max-width: $bp-lg) {
					display: none;
				}
			}
			&:nth-child(4) {
				right: 44.3%;
				top: 17%;
				@media only screen and (max-width: $bp-lg) {
					right: auto;
					left: 5%;
					top: 56%;
				}
				@media only screen and (max-width: $bp-sm) {
					left: 5px;
					top: 116px;
				}
			}
			&:nth-child(5) {
				left: 35%;
				bottom: 6%;
				width: clamp(60px, 5vw, 80px);
				border-radius: clamp(18px, 2vw, 24px);
				@media only screen and (max-width: $bp-lg) {
					display: none;
				}
			}
			&:nth-child(6) {
				left: 40%;
				top: 7%;
				width: 71px;
				border-radius: 24px;
				@media only screen and (max-width: $bp-lg) {
					display: none;
				}
			}
			&:nth-child(7) {
				border-radius: 32px;
				left: 20%;
				top: 56%;
				width: 100px;
				@media only screen and (max-width: $bp-lg) {
					left: 20%;
					top: 20%;
				}
				@media only screen and (max-width: $bp-sm) {
					left: -25px;
					top: -25px;
				}
			}
			&:nth-child(8) {
				border-radius: 24px;
				left: 7.5%;
				bottom: 14%;
				width: clamp(80px, 5vw, 90px);
				@media only screen and (max-width: $bp-lg) {
					display: none;
				}
			}
			&:last-child {
				border-radius: 24px;
				right: 30%;
				bottom: 12px;
				width: 74px;

				@media only screen and (max-width: $bp-sm) {
					top: 69px;
					bottom: auto;
					right: -20px;
				}
			}
		}
	}
}
</style>
