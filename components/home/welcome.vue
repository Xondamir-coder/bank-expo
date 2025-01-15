<template>
	<section class="welcome" data-no-margin id="home-welcome">
		<div class="welcome__container">
			<HomePattern class="welcome__pattern" />
			<div class="welcome__content">
				<h3 class="welcome__subtitle">Welcome to</h3>
				<h2 class="welcome__title">UZBEKISTAN</h2>
				<p class="welcome__text">
					Get detailed insights into your data with our advanced reporting tools, which
					allow you to create custom reports, visualize data, and spot trends.Get detailed
					insights into your data with our advanced reporting tools, which allow you to
					create custom reports, visualize data, and spot trends.
				</p>
			</div>
		</div>
		<img src="~/assets/images/home-welcome.jpg" alt="uzbekistan" class="welcome__image" />
	</section>
</template>

<script setup>
const { $gsap } = useNuxtApp();

onMounted(() => {
	const parentId = '#home-welcome';
	const parentContainer = `${parentId} .welcome`;
	const travelDistance = 100;

	$gsap.from(`${parentContainer}__subtitle`, {
		x: -travelDistance,
		...fadeOnScrollTrigger(`${parentContainer}__subtitle`)
	});
	$gsap.from(`${parentContainer}__title`, {
		x: travelDistance,
		...fadeOnScrollTrigger(`${parentContainer}__title`)
	});
	$gsap.from(`${parentContainer}__text`, {
		x: -travelDistance,
		...fadeOnScrollTrigger(`${parentContainer}__text`)
	});
	$gsap.from(`${parentContainer}__image`, {
		scale: 1.1,
		...fadeOnScrollTrigger(`${parentContainer}__image`)
	});
	$gsap.utils.toArray(`${parentContainer}__pattern path`).forEach(path => {
		const color = path.getAttribute('fill');
		const totalLength = path.getTotalLength();

		$gsap.set(path, {
			strokeDasharray: totalLength,
			strokeDashoffset: 0,
			fill: 'transparent',
			stroke: color
		});
		$gsap
			.timeline({
				scrollTrigger: {
					trigger: `${parentContainer}__pattern`,
					scrub: 1,
					end: 'bottom bottom',
					start: '+=20 75%'
					// markers: true
				}
			})
			.from(path, {
				strokeDashoffset: totalLength
			})
			.to(path, {
				stroke: 'transparent',
				fill: color
			});
	});
});
</script>

<style lang="scss" scoped>
.welcome {
	overflow: hidden;
	background-color: $clr-primary-dark;
	border-top-right-radius: 45px;
	border-top-left-radius: 45px;
	padding-top: min(80px, 6vw);
	display: flex;
	flex-direction: column;
	padding-bottom: 40px;
	@include section-padding-inline;
	@media only screen and (max-width: $bp-lg) {
		padding: 0;
		padding-bottom: 40px;
		border-radius: 0;
	}
	&__title {
		font-size: clamp(40px, 8vw, 100px);
		font-weight: 900;
		letter-spacing: 10px;
		color: #f7463d;
		@media only screen and (max-width: $bp-md) {
			letter-spacing: 0;
		}
	}
	&__subtitle {
		font-size: clamp(14px, 2vw, 32px);
		font-weight: 500;
		letter-spacing: 6px;
		color: $clr-primary-dark;
	}
	&__text {
		color: #000;
		font-size: clamp(10px, 1vw, 18px);
		line-height: 1.5;
		letter-spacing: 0.01em;
		max-width: 100ch;
		padding-top: 16px;
		position: relative;
		&::after {
			content: '';
			position: absolute;
			background-color: rgba($clr-primary-dark, 0.3);
			top: 0;
			left: 0;
			width: 100%;
			height: 2px;
			@media only screen and (max-width: $bp-md) {
				height: 0.45px;
				transform: scaleX(0.6);
			}
		}
	}
	&__content {
		place-self: center;
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: clamp(10px, 1vw, 16px);
		transform: translateY(25%);
		padding-inline: 16px;
	}
	&__container {
		display: grid;
		min-height: max(100vh, 800px);
		background: #fff;
		border-bottom-right-radius: 45px;
		border-bottom-left-radius: 45px;
		position: relative;
		@media only screen and (max-width: $bp-lg) {
			min-height: 350px;
			border-radius: 0;
		}
		& > * {
			grid-area: 1/1/2/2;
		}
	}
	&__image {
		align-self: center;
		width: 90%;
		object-fit: cover;
		border-radius: clamp(14px, 3vw, 36px);
		transform: translateY(-25%);
		margin-bottom: -5%;
		@media only screen and (max-width: $bp-md) {
			aspect-ratio: 328/200;
		}
	}
}
</style>
