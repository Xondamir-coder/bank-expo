<template>
	<div class="layout overflow-hidden" :style="containerStyle">
		<!-- preloader  -->
		<Preloader :is-loaded="isLoaded" @loaded="toggleLoading" />
		<!-- cookies modal -->
		<Cookies />
		<!-- content -->
		<Header
			@toggle-menu="toggleMenu"
			:menu-open="isMenuOpen"
			:class="{ 'header--home': route.path === '/', 'header--open': isMenuOpen }" />
		<Menu :class="{ 'menu--open': isMenuOpen }" @toggle-menu="toggleMenu" />
		<slot />
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

const toggleElements = () => {
	const main = document.querySelector('main');
	const header = document.querySelector('header');
	main.classList.add('dis-none');
	header.classList.add('dis-none');

	setTimeout(() => {
		main.classList.remove('dis-none');
		header.classList.remove('dis-none');
	}, 50);
};
const removeOverflow = () => {
	document.body.style.overflow = 'visible';
	document.querySelector('.layout').classList.remove('overflow-hidden');
};
const toggleLoading = () => {
	isLoaded.value = !isLoaded.value;
	toggleElements();
	removeOverflow();
};

const containerStyle = computed(() => ({ backgroundColor: getBgColor(route.path) }));
</script>

<style lang="scss" scoped>
.layout {
	color: #fff;
}
</style>
