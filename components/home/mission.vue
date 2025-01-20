<template>
	<section class="mission" id="home-mission">
		<h2 class="mission__title">Our mission</h2>
		<div class="mission__cards">
			<div class="mission__card">
				<h4 class="mission__card-title">Moliyaviy Innovatsiyalar</h4>
				<p class="mission__card-text">
					Expo Banking so'nggi moliyaviy texnologiyalarni va raqamli xizmatlarni taqdim
					etadi. Ishtirokchilar yangi tendentsiyalar va rivojlanayotgan texnologiyalar
					bilan tanishish imkoniyatiga ega.
				</p>
			</div>
			<div class="mission__card">
				<h4 class="mission__card-title">Global Tadbir</h4>
				<p class="mission__card-text">
					Har yili dunyoning turli burchaklaridan kelgan minglab ishtirokchilarni
					birlashtiradi. Bu tadbirda global moliya sanoatining eng yangi innovatsiyalari
					va texnologiyalari namoyish etiladi.
				</p>
			</div>
			<div class="mission__card" :data-y-spanned="true">
				<img src="~/assets/images/globe.png" alt="globe" class="mission__img" />
				<h4 class="mission__card-title">Xalqaro Ishtirokchilar</h4>
				<p class="mission__card-text">
					Dunyoning yetakchi banklari va moliya institutlari bu korgazmada ishtirok etadi.
					Tadbir yangi biznes imkoniyatlari va tarmoq qurish imkoniyatini taqdim etadi.
				</p>
			</div>
		</div>
	</section>
</template>

<script setup>
const { $gsap } = useNuxtApp();
onMounted(() => {
	const travelDistance = 100;
	const parentId = '#home-mission';
	const parentContainer = `${parentId} .mission`;

	$gsap.from(`${parentContainer}__title`, {
		x: -travelDistance,
		...fadeOnScrollTrigger(`${parentContainer}__title`)
	});
	$gsap.utils.toArray(`${parentContainer}__card`).forEach(card => {
		if (card.dataset.ySpanned) {
			$gsap.from(card, {
				y: travelDistance,
				...fadeOnScrollTrigger(card, 'bottom 90%')
			});
		} else {
			$gsap.from(card, {
				x: -travelDistance,
				...fadeOnScrollTrigger(card, 'bottom 90%')
			});
		}
	});
});
</script>

<style lang="scss" scoped>
.mission {
	display: grid;
	grid-template-columns: 1fr 2.5fr;
	align-items: flex-start;
	@media only screen and (max-width: $bp-lg) {
		grid-template-columns: initial;
		gap: 16px;
	}
	&__img {
		width: 180px;
		aspect-ratio: 1;
		@media only screen and (max-width: $bp-md) {
			width: 120px;
		}
	}
	&__cards {
		display: grid;
		gap: clamp(16px, 3vw, 32px);
		@media only screen and (min-width: $bp-md) {
			grid-template-columns: 1.25fr 1fr;
		}
	}
	&__card {
		background-color: $clr-accent-medium-blue;
		border-radius: clamp(16px, 2vw, 24px);
		padding: clamp(16px, 2vw, 30px);
		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: 24px;
		@media only screen and (min-width: $bp-md) {
			gap: 5vw;
			padding-bottom: 4px;
		}
		&-title {
			font-size: clamp(22px, 2vw, 28px);
			font-weight: 700;

			@media only screen and (min-width: $bp-md) {
			}
		}
		&-text {
			font-size: clamp(16px, 1vw, 18px);
			line-height: 1.5;
			font-family: $font-base;
			@media only screen and (max-width: $bp-md) {
				font-weight: 300;
			}
		}
		&:last-child {
			align-items: center;
			text-align: center;
			gap: 16px;
			@media only screen and (max-width: $bp-md) {
				gap: 24px;
			}
			@media only screen and (min-width: $bp-md) {
				grid-column: 2 / span 1;
				grid-row: 1 / span 2;
			}
		}
		&:not(:last-child) {
			justify-content: space-between;
		}
	}
	&__title {
		@include section-title;
	}
}
</style>
