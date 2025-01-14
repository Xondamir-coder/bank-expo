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
