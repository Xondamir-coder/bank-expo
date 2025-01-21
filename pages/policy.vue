<template>
	<main class="policy">
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
		to: '/policy',
		label: 'Privacy Policy'
	}
];
</script>

<style lang="scss" scoped>
.policy {
	@include section-margin-inline;
}
</style>
