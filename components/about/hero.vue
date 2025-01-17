<template>
	<section class="hero">
		<div class="hero__circles">
			<div class="hero__circle" v-for="i in slidesLength"></div>
		</div>
		<div class="hero__top">
			<div class="hero__icons">
				<div class="hero__icon-container">
					<IconsBank class="hero__icon" data-original />
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
					:class="{ active: curSlide === i }"
					:src="img"
					:key="i" />
			</div>
			<div class="hero__action">
				<div class="hero__bar--outer" v-for="i in slidesLength">
					<div class="hero__bar--inner"></div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const slidesLength = 4;
const CHANGE_TIME = 3000;
const curSlide = ref(0);
const { $gsap } = useNuxtApp();
import img1 from '~/assets/images/about-hero.png';

const images = [img1, img1, img1, img1];
let interval;
const animateBar = () => {
	$gsap.to(`.hero__bar--outer:nth-child(${curSlide.value + 1}) .hero__bar--inner`, {
		scaleX: 1, // Include unit
		duration: CHANGE_TIME / 1000 // Convert to seconds for GSAP
	});
};

onBeforeUnmount(() => {
	clearInterval(interval);
});
onMounted(() => {
	animateBar();
	interval = setInterval(() => {
		curSlide.value++;
		if (curSlide.value >= slidesLength) {
			$gsap.set('.hero__bar--inner', { scaleX: 0 });
			curSlide.value = 0;
		}
		animateBar();
	}, CHANGE_TIME);
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
.hero {
	background-color: #fff;
	border-radius: clamp(16px, 3vw, 32px);
	margin-top: clamp(20px, 3vw, 30px);
	position: relative;
	overflow: hidden;
	$duration: 1s;
	&__circle {
		$scales: (0.85, 0.65, 0.45, 0.25);

		border: 1px solid #cbd5e0;
		border-radius: 50%;
		grid-area: 1 / 1 / 2 / 2;

		@for $i from 1 through list.length($scales) {
			&:nth-child(#{$i}) {
				transform: scale(#{list.nth($scales, $i)});
			}
		}
	}
	&__circles {
		position: absolute;
		inset: 0;
		display: grid;
		top: 3%;
		transform: scale(1);
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
		z-index: 5;
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
	&__icon {
		width: 40px;
		&-container {
			width: 60px;
			aspect-ratio: 1;
			background: #ffffff;
			box-shadow: 0px 1.2px 27px 0px #0000001a;
			border-radius: 16px;
			@include flex-center;
		}
	}
}
</style>
