<template>
	<div class="container">
		<Header />
		<main class="content">
			<slot />
		</main>
		<Footer />
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
	padding-inline: clamp(15px, 5vw, 70px);
	background-color: $clr-accent-dark-blue;

	@media only screen and (max-width: 1500px) {
		padding-inline: 15px;
	}
}
</style>
