<template>
	<main class="about">
		<Breadcrumbs :breadcrumbs="breadcrumbs" />
		<AboutHero />
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
}
</style>
