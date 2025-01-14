<template>
	<HomeHero />
	<div class="content">
		<HomeAbout />
		<HomeMission />
	</div>
	<HomeEvents />
	<HomeWelcome />
	<div class="wrapper" data-no-margin>
		<HomeExperts />
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.wrapper {
	background-color: #fff;
	color: $clr-secondary;
	border-top-left-radius: clamp(20px, 4vw, 45px);
	border-top-right-radius: clamp(20px, 4vw, 45px);
	padding-block: clamp(22px, 6vw, 80px);
	transform: translateY(-40px);
	& > *:not([data-no-margin]) {
		@include section-margin-inline;
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
