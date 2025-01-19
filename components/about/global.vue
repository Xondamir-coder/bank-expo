<template>
	<section class="global" id="about-global">
		<h2 class="global__title">
			Your Gateway to Global <br />
			Connections
		</h2>
		<div class="global__list">
			<div class="global__item" v-for="(item, i) in items" :key="i">
				<Pattern class="global__item-pattern" />
				<div class="global__item-content">
					<h3 class="global__item-amount">
						{{ item.amount }}
					</h3>
					<h4 class="global__item-title">
						{{ item.title }}
					</h4>
				</div>
				<p class="global__item-text">
					{{ item.text }}
				</p>
			</div>
		</div>
	</section>
</template>

<script setup>
const items = [
	{
		amount: '50+',
		title: 'Countries',
		text: 'Epo Bank unites participants from over 50 countries, creating a truly international platform.'
	},
	{
		amount: '1000+',
		title: 'Visitors',
		text: 'The event welcomes top bank representatives, business leaders, and general attendees, fostering valuable connections'
	},
	{
		amount: '10+',
		title: 'Industries',
		text: 'The exhibition offers opportunities in financial technology, lending, insurance, and various other sectors, encouraging cross-industry collaboration'
	}
];
const { $gsap } = useNuxtApp();

onMounted(() => {
	const parentId = '#about-global';
	const parentContainer = `${parentId} .global`;
	$gsap.from(`${parentContainer}__title`, {
		x: -100,
		...fadeOnScrollTrigger(`${parentContainer}__title`)
	});
	$gsap.utils.toArray(`${parentContainer}__item`).forEach((item, i) => {
		$gsap.from(item.firstElementChild, {
			scale: 1.5,
			...fadeOnScrollTrigger(item)
		});
		$gsap.from(item.firstElementChild.nextElementSibling, {
			x: -50,
			stagger: 0.1,
			...fadeOnScrollTrigger(item)
		});
		$gsap.from(item.lastElementChild, {
			x: 50,
			...fadeOnScrollTrigger(item)
		});
	});
});
</script>

<style lang="scss" scoped>
.global {
	display: flex;
	flex-direction: column;
	gap: clamp(16px, 3vw, 30px);
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: clamp(8px, 2vw, 24px);
		@media only screen and (max-width: $bp-sm) {
			grid-template-columns: initial;
			grid-auto-flow: column;
			grid-auto-columns: 110%;
			overflow-x: auto;
			scroll-snap-type: x mandatory;
			& > * {
				scroll-snap-align: start;
			}
			&::-webkit-scrollbar {
				display: none;
			}
		}
	}
	&__item {
		overflow: hidden;
		background: #f8f8f8;
		border: 1px solid #0000001f;
		padding: clamp(16px, 2vw, 30px);
		border-radius: clamp(20px, 2vw, 24px);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: clamp(16px, 7vw, 80px);
		font-weight: 700;
		position: relative;
		@media only screen and (max-width: $bp-md) {
			gap: 16px;
		}
		&-content {
			z-index: 2;
		}
		&-pattern {
			fill: #e9eaec;
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
		}
		&-amount {
			font-size: clamp(38px, 2.4vw, 42px);
			color: $clr-yellow;
		}
		&-title {
			color: #cbd5e0;
			font-size: clamp(20px, 2vw, 36px);
		}
		&-text {
			color: #323b49;
			font-size: clamp(14px, 1vw, 20px);
			line-height: 1.4;
			font-weight: 400;
		}
	}
	&__title {
		@include section-title;
	}
}
</style>
