<template>
	<div class="layout" :style="containerStyle">
		<!-- preloader  -->
		<Preloader :is-loaded="isLoaded" @loaded="toggleLoading" />
		<!-- cookies modal -->
		<Cookies />
		<!-- content -->
		<Header
			v-if="isLoaded"
			@toggle-menu="toggleMenu"
			:menu-open="isMenuOpen"
			:class="{ 'header--home': route.path === '/', 'header--open': isMenuOpen }" />
		<Menu :class="{ 'menu--open': isMenuOpen }" @toggle-menu="toggleMenu" />
		<div v-if="isLoaded">
			<slot />
		</div>
		<Footer />
		<!-- contact modal from right -->
		<Contact />
	</div>
</template>

<script setup>
const isMenuOpen = ref(false);
const isLoaded = ref(false);
const route = useRoute();

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
	document.body.classList.toggle('overflow-hidden', isMenuOpen.value);
};
const getBgColor = path => {
	if (path === '/') return '#001833';
	if (path === '/about') return '#F1F2F4';
	if (path === '/banks') return '#F8F8F8';
	if (path === '/partners') return '#F8F8F8';
};
const toggleLoading = () => {
	isLoaded.value = !isLoaded.value;
	console.log(isLoading.value);
};

const containerStyle = computed(() => ({ backgroundColor: getBgColor(route.path) }));
</script>

<style lang="scss" scoped>
.layout {
	color: #fff;
}
</style>
