<template>
	<nav class="breadcrumbs">
		<NuxtLink
			class="breadcrumbs__link"
			v-for="breadcrumb in breadcrumbs"
			:key="breadcrumb.to"
			:to="breadcrumb.to">
			<span>{{ breadcrumb.label }}</span>
			<span class="breadcrumbs__divider">/</span>
		</NuxtLink>
	</nav>
</template>

<script setup>
const props = defineProps({
	breadcrumbs: Array
});
</script>

<style lang="scss" scoped>
.breadcrumbs {
	display: flex;
	gap: 4px;
	&__link {
		display: flex;
		gap: 4px;
		align-items: center;
		font-family: $font-alt, sans-serif;
		font-size: 14px;
		color: $clr-grey;
		&:last-child {
			.breadcrumbs__divider {
				display: none;
			}
		}
	}
}
</style>
