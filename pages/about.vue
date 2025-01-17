<template>
	<main class="about">
		<Breadcrumbs :breadcrumbs="breadcrumbs" />
		<AboutHero />
		<div class="about__wrapper">
			<AboutGlobal />
			<AboutTeam />
		</div>
	</main>
</template>

<script setup>
const breadcrumbs = [
	{
		to: '/',
		label: 'Home'
	},
	{
		to: '/about',
		label: 'About'
	}
];
</script>

<style lang="scss" scoped>
.about {
	color: $clr-secondary;
	margin-bottom: clamp(20px, 5vw, 80px);
	& > *:not([data-no-margin]) {
		@include section-margin-inline;
	}
	&__wrapper {
		background-color: #fff;
		border-radius: clamp(16px, 3vw, 32px);
		padding: clamp(16px, 6vw, 80px);
		margin-top: clamp(20px, 6vw, 80px);
		display: flex;
		flex-direction: column;
		gap: clamp(20px, 6vw, 86px);
	}
}
</style>
