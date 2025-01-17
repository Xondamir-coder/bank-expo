<template>
	<div class="layout" :style="containerStyle">
		<Header
			@toggle-menu="toggleMenu"
			:menu-open="isMenuOpen"
			:class="{ 'header--home': route.path === '/', 'header--open': isMenuOpen }" />
		<Menu :class="{ 'menu--open': isMenuOpen }" @toggle-menu="toggleMenu" />
		<slot />
		<Footer />
	</div>
</template>

<script setup>
const isMenuOpen = ref(false);
const route = useRoute();

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
	document.body.classList.toggle('overflow-hidden', isMenuOpen.value);
};
const getBgColor = path => {
	if (path === '/') return '#001833';
	if (path === '/about') return '#F1F2F4';
	if (path === '/banks') return '#F8F8F8';
};

const containerStyle = computed(() => ({ backgroundColor: getBgColor(route.path) }));
</script>

<style lang="scss" scoped>
.layout {
	color: #fff;
}
.content {
	& > *:not([data-no-margin]) {
		@include section-margin-inline;
	}
}
</style>
