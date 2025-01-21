<template>
	<main class="terms">
		<Breadcrumbs :breadcrumbs="breadcrumbs" />
	</main>
</template>

<script setup>
const breadcrumbs = [
	{
		to: '/',
		label: 'Home'
	},
	{
		to: '/terms',
		label: 'Terms and Conditions'
	}
];
</script>

<style lang="scss" scoped>
.terms {
	@include section-margin-inline;
}
</style>
