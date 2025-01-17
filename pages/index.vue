<template>
	<main class="home">
		<HomeHero />
		<div class="content">
			<HomeAbout />
			<HomeMission />
		</div>
		<HomeEvents />
		<HomeWelcome />
		<div class="wrapper" data-no-margin>
			<div class="wrapper__box">
				<HomeExperts />
				<HomeBanks />
				<HomePartners />
			</div>
		</div>
	</main>
</template>

<script setup></script>

<style lang="scss" scoped>
.home {
	& > * {
		overflow: hidden;
	}
	& > *:not([data-no-margin]) {
		@include section-margin-inline;
	}
}
.wrapper {
	position: relative;
	&__box {
		background-color: #fff;
		padding-block: clamp(22px, 6vw, 80px);
		color: $clr-secondary;
		border-top-left-radius: clamp(20px, 4vw, 45px);
		border-top-right-radius: clamp(20px, 4vw, 45px);
		display: flex;
		flex-direction: column;
		gap: clamp(40px, 7vw, 80px);
		z-index: 2;
		position: relative;
		& > *:not([data-no-margin]) {
			@include section-margin-inline;
		}
	}
	&::after {
		content: '';
		position: absolute;
		inset: 0;
		background-color: $clr-primary-dark;
		z-index: 1;
	}
}
.content {
	display: flex;
	flex-direction: column;
	gap: clamp(16px, 10vw, 120px);
	@include content-style;
	@media only screen and (max-width: $bp-md) {
		gap: 16px;
	}
}
</style>
