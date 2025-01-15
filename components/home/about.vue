<template>
	<section class="about" id="home-about">
		<div class="about__top">
			<h2 class="about__title">About the Event</h2>
			<p class="about__text">
				Expo Banking – the premier platform for banks and financial institutions to showcase
				the latest technologies, services, and business opportunities. Join us to explore
				the heart of modern finance
			</p>
		</div>
		<div class="about__video">
			<img src="~/assets/images/home-about.jpg" alt="banking people" class="about__img" />
			<button class="about__play">
				<IconsPlay class="about__play-icon" />
			</button>
			<div class="about__time">03:36</div>
		</div>
		<div class="about__bottom">
			<div class="about__bottom-item">
				<IconsVisitors class="about__bottom-icon" />
				<span class="about__bottom-label">Visitors: 20k+</span>
			</div>
			<div class="about__bottom-divider"></div>
			<div class="about__bottom-item">
				<IconsWhiteboard class="about__bottom-icon" />
				<span class="about__bottom-label">Exhibitors: 200+</span>
			</div>
			<div class="about__bottom-divider"></div>
			<div class="about__bottom-item">
				<IconsFlag class="about__bottom-icon" />
				<span class="about__bottom-label">Countries: 50+</span>
			</div>
		</div>
	</section>
</template>

<script setup>
const { $gsap } = useNuxtApp();

onMounted(() => {
	const aboutTopX = 100;
	const parentId = '#home-about';
	const parentContainer = `${parentId} .about`;

	$gsap.from(`${parentContainer}__title`, {
		x: -aboutTopX,
		...fadeOnScrollTrigger(`${parentContainer}__title`)
	});
	$gsap.from(`${parentContainer}__text`, {
		x: aboutTopX,
		...fadeOnScrollTrigger(`${parentContainer}__title`)
	});
	$gsap.from(`${parentContainer}__video`, {
		scale: 1.1,
		...fadeOnScrollTrigger(`${parentContainer}__video`)
	});
	$gsap.from(`${parentContainer}__bottom`, {
		y: 50,
		...fadeOnScrollTrigger(`${parentContainer}__bottom`, 'bottom 90%')
	});
});
</script>

<style lang="scss" scoped>
.about {
	display: flex;
	flex-direction: column;
	gap: clamp(16px, 3vw, 36px);
	&__title {
		@include section-title;
	}
	&__text {
		font-size: clamp(14px, 1.1vw, 20px);
		line-height: 1.5;
	}
	&__top {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		@media only screen and (max-width: $bp-sm) {
			row-gap: 10px;
			grid-template-columns: initial;
		}
	}
	&__bottom {
		font-family: $font-alt, sans-serif;
		display: flex;
		gap: clamp(9px, 3vw, 32px);
		@media only screen and (max-width: $bp-md) {
			gap: 9px;
		}
		&-label {
			font-size: clamp(10px, 1.5vw, 18px);
		}
		&-divider {
			width: 1px;
			background-color: #ffffff3d;
		}
		&-item {
			display: flex;
			align-items: center;
			position: relative;
			gap: clamp(4px, 1vw, 12px);
		}
		&-icon {
			width: clamp(18px, 3vw, 28px);
			aspect-ratio: 1;
		}
	}
	&__video {
		display: grid;
		border-radius: 24px;
		overflow: hidden;
		& > * {
			grid-area: 1/1/2/2;
		}
	}
	&__time {
		font-family: $font-alt, sans-serif;
		font-size: 18px;
		color: $clr-secondary;
		background-color: #fff;
		align-self: flex-start;
		justify-self: flex-end;
		padding-block: 5px;
		padding-inline: 16px;
		border-radius: 8px;
		margin: clamp(10px, 2vw, 30px);
		@media only screen and (max-width: $bp-md) {
			place-self: flex-end;
		}
	}
	&__img {
		width: 100%;
		object-fit: cover;
		@media only screen and (max-width: $bp-md) {
			aspect-ratio: 372/248;
		}
	}
	&__play {
		@include flex-center;
		border-radius: 16px;
		background-color: $clr-yellow;
		width: clamp(50px, 5vw, 70px);
		aspect-ratio: 1;
		place-self: center;
		transition: background-color 0.3s;
		&:hover {
			background-color: #fff;
			__play-icon {
				fill: $clr-yellow;
			}
		}
		&-icon {
			width: clamp(20px, 3vw, 32px);
			aspect-ratio: 1;
			fill: #fff;
			transition: fill 0.3s;
		}
	}
}
</style>
