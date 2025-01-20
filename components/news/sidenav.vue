<template>
	<div class="sidenav" ref="sidenavRef">
		<h3 class="sidenav__title">
			{{ title }}
		</h3>
		<div class="sidenav__list">
			<NuxtLink
				class="sidenav__item"
				v-for="(similar, i) in similars"
				:key="i"
				:to="`/news/${similar.title_slug}`">
				<div class="sidenav__image-container">
					<img :src="similar.img" alt="similar news banner" class="sidenav__image" />
				</div>
				<h4 class="sidenav__text">
					{{
						similar.title.length > titleMaxLength
							? `${similar.title.slice(0, titleMaxLength)}...`
							: similar.title
					}}
				</h4>
				<div class="sidenav__bottom">
					<div class="sidenav__bottom-col">
						<IconsCalendar class="sidenav__icon" />
						<span>{{ Intl.DateTimeFormat('ru-RU').format(similar.date) }}</span>
					</div>
					<div class="sidenav__bottom-col">
						<IconsEye class="sidenav__icon" />
						<span>{{ similar.views }}</span>
					</div>
				</div>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
// Props
const props = defineProps({
	title: String,
	similars: Array
});

const titleMaxLength = ref(50);
const sidenavRef = ref();

const { $gsap } = useNuxtApp();
const animateElements = () => {
	[...sidenavRef.value.querySelectorAll('.sidenav__item')].forEach((item, i) => {
		$gsap.from(item, {
			x: -40,
			...fadeOnScrollTrigger(item, 'bottom 95%')
		});
	});
};
onMounted(() => {
	if (window.innerWidth < 768) {
		animateElements();
	}
	if (window.innerWidth <= 992) {
		titleMaxLength.value = 500;
	}
	if (window.innerWidth <= 425) {
		titleMaxLength.value = 50;
	}
});
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
@keyframes slide-from-right {
	from {
		transform: translateX(35px);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}
.sidenav {
	grid-area: sidenav;
	align-self: flex-start;
	display: flex;
	flex-direction: column;
	gap: clamp(12px, 2vw, 20px);
	padding: clamp(16px, 3vw, 30px);
	border: 1px solid #e9eaec;
	background: #ffffff;
	backdrop-filter: blur(30px);
	color: #111827;
	border-radius: clamp(16px, 3vw, 32px);
	$duration: 0.3s;
	@media only screen and (max-width: $bp-lg) {
	}
	&__item {
		display: grid;
		grid-template-areas:
			'image text'
			'image bottom';
		grid-template-columns: 27% 1fr;
		row-gap: clamp(12px, 1.1vw, 16px);
		column-gap: 16px;
		padding-block: clamp(12px, 2vw, 20px);
		border-block: 1px solid #e9eaec;
		@media only screen and (min-width: $bp-md) {
			animation: slide-from-left 0.7s backwards;
			@for $i from 1 through 9 {
				&:nth-child(#{$i}) {
					animation-delay: $i * 0.1s;
				}
			}
		}
		&:first-child {
			border-top: none;
			padding-top: 0;
		}
		&:last-child {
			border-bottom: none;
			padding-bottom: 0;
		}
		&:hover {
			.sidenav__image {
				transform: translate(-5%, -5%);
			}
			.sidenav__text {
				color: $clr-yellow;
			}
		}
	}
	&__image {
		width: 105%;
		height: 105%;
		object-fit: cover;
		transition: transform $duration;

		&-container {
			aspect-ratio: 1;
			display: flex;
			align-self: flex-start;
			grid-area: image;
			overflow: hidden;
			border-radius: clamp(8px, 1vw, 12px);
		}
	}
	&__title {
		font-size: clamp(20px, 2.2vw, 24px);
		font-weight: 700;
		animation: slide-from-right 0.7s;
	}
	&__text {
		grid-area: text;
		font-size: clamp(14px, 1.5vw, 16px);
		line-height: 1.4;
		transition: color $duration;
	}
	&__bottom {
		grid-area: bottom;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 1px solid #e9eaec;
		padding-top: clamp(8px, 1vw, 12px);
		&-col {
			display: flex;
			align-items: center;
			gap: 8px;
			color: #687588;
			font-size: 12px;
			font-weight: 500;
			line-height: 1.4;
		}
	}
	&__icon {
		width: 20px;
	}
	&__list {
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}
}
</style>
