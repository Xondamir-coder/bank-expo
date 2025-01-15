<template>
	<div class="container">
		<Header @toggle-menu="toggleMenu" :style="headerStyle" :menu-open="isMenuOpen" />
		<Menu :class="{ 'menu--open': isMenuOpen }" />
		<main class="content">
			<slot />
		</main>
		<Footer />
	</div>
</template>

<script setup>
const isMenuOpen = ref(false);
const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
	document.body.classList.toggle('overflow-hidden', isMenuOpen.value);
};
const headerStyle = computed(() => ({ backgroundColor: isMenuOpen.value ? '#000c1a' : '' }));
</script>

<style lang="scss" scoped>
.container {
	color: #fff;
	background-color: $clr-accent-dark-blue;
}
.content {
	background-color: $clr-accent-dark-blue;
	& > *:not([data-no-margin]) {
		@include section-margin-inline;
	}
}
</style>
