<template>
	<form class="search">
		<h2 class="search__title">Banks</h2>
		<div class="search__input-container">
			<button type="submit">
				<IconsSearch class="search__icon" />
			</button>
			<input
				type="text"
				class="search__input"
				required
				v-model="model"
				placeholder="Search..." />
		</div>
	</form>
</template>

<script setup>
const model = defineModel();
</script>

<style lang="scss" scoped>
@keyframes slide-from-left {
	from {
		transform: translateX(-35px);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}
.search {
	grid-area: search;
	display: flex;
	flex-direction: column;
	gap: clamp(16px, 1.5vw, 20px);
	animation: slide-from-left 0.7s;

	&__title {
		font-size: clamp(20px, 2vw, 32px);
		font-weight: 700;
	}
	&__icon {
		width: clamp(20px, 2vw, 24px);
	}
	&__input {
		flex: 1;
		padding-block: clamp(10px, 2vw, 20px);
		&-container {
			display: flex;
			align-items: center;
			border-radius: clamp(10px, 1vw, 16px);
			gap: 12px;
			background: #ffffff0a;
			border: 1px solid #e9eaec;
			padding-inline: clamp(16px, 2vw, 20px);
			transition: border-color 0.3s;
			&:has(input:focus) {
				border-color: #111827;
			}
		}
	}
}
</style>
