<template>
	<div class="pagination" id="banks-pagination">
		<button
			class="pagination__button"
			:disabled="currentPage === 1"
			@click="changePage(currentPage - 1)">
			<IconsArrowLeft class="pagination__arrow" />
		</button>
		<button
			class="pagination__button pagination__button--number"
			v-for="i in ITEMS_COUNT"
			:class="{
				'pagination__button--active': i === currentPage,
				'pagination__button--hidden': i >= shownButtons
			}"
			:key="i"
			@click="changePage(i)">
			{{ i }}
		</button>
		<button
			class="pagination__button pagination__button--number"
			v-if="shownButtons < ITEMS_COUNT"
			@click="showAllButtons">
			...
		</button>
		<button
			class="pagination__button pagination__button--number"
			:class="{
				'pagination__button--active': ITEMS_COUNT === currentPage
			}"
			@click="changePage(ITEMS_COUNT)">
			{{ ITEMS_COUNT }}
		</button>
		<button
			class="pagination__button"
			:disabled="currentPage === ITEMS_COUNT"
			@click="changePage(currentPage + 1)">
			<IconsArrowLeft class="pagination__arrow pagination__arrow--reverse" />
		</button>
	</div>
</template>

<script setup>
const ITEMS_COUNT = 12;
const currentPage = ref(1);
const shownButtons = ref(3);

const changePage = newPage => {
	currentPage.value = newPage;
	if (currentPage.value !== ITEMS_COUNT && currentPage.value >= shownButtons.value) {
		shownButtons.value++;
	}
};
const showAllButtons = () => (shownButtons.value = ITEMS_COUNT);

const { $gsap } = useNuxtApp();
onMounted(() => {
	const parentId = '#banks-pagination';
	const parentContainer = `${parentId} .pagination`;
	$gsap.from(`${parentContainer}__button:first-child`, {
		x: -20,
		...fadeOnScrollTrigger(`${parentContainer}__button:first-child`, 'bottom bottom')
	});
	$gsap.from(`${parentContainer}__button:last-child`, {
		x: 20,
		...fadeOnScrollTrigger(`${parentContainer}__button:last-child`, 'bottom bottom')
	});
	$gsap.from(`${parentContainer}__button.pagination__button--number`, {
		y: 20,
		...fadeOnScrollTrigger(
			`${parentContainer}__button.pagination__button--number`,
			'90% bottom'
		)
	});
});
</script>

<style lang="scss" scoped>
.pagination {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	@media only screen and (max-width: $bp-sm) {
		justify-content: center;
	}
	&__button {
		@include flex-center;
		border-radius: 8px;
		width: 42px;
		border: 1px solid #cbd5e0;
		background: #ffffff;
		aspect-ratio: 1;
		&:disabled .pagination__arrow {
			fill: #687588;
		}
		&--number {
			font-weight: 700;
			font-size: 16px;
			color: #111827;
			text-align: center;
			transition: background-color 0.3s, border-color 0.3s, color 0.3s;
		}
		&--active {
			background-color: #c89e45;
			border-color: #c89e45;
			color: #fafafa;
		}
		&--hidden {
			display: none;
		}
	}
	&__arrow {
		fill: #111827;
		width: 18px;
		transition: fill 0.3s;
		&--reverse {
			transform: rotate(180deg);
		}
	}
}
</style>
