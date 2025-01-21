<template>
	<NuxtLink class="item" :to="`news/${news.title_slug}`">
		<div class="item__image-container">
			<img :src="news.img" alt="news banner" class="item__image" />
		</div>
		<h4 class="item__title">
			{{ title }}
		</h4>
		<div class="item__bottom">
			<div class="item__bottom-col">
				<IconsCalendar class="item__icon" />
				<div><span class="item__word">Published:</span> {{ date }}</div>
			</div>
			<div class="item__bottom-col">
				<IconsEye class="item__icon" />
				<div><span class="item__word">Views:</span> {{ news.views }}</div>
			</div>
		</div>
	</NuxtLink>
</template>

<script setup>
const MAX_TITLE_LENGTH = 100;
const props = defineProps({
	news: Object
});
const title = computed(() =>
	props.news.title.length > MAX_TITLE_LENGTH
		? `${props.news.title.slice(0, MAX_TITLE_LENGTH)}...`
		: props.news.title
);
const date = computed(() => Intl.DateTimeFormat('ru-RU').format(props.news.date));
</script>

<style lang="scss" scoped>
@keyframes slide-from-bottom {
	from {
		transform: translateY(35px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}
.item {
	display: flex;
	flex-direction: column;
	gap: clamp(16px, 2vw, 20px);
	padding: 8px;
	border-radius: 20px;
	border: 1px solid #e9eaec;
	background: #ffffff;
	$duration: 0.3s;
	overflow: hidden;
	// @media only screen and (min-width: $bp-md) {
	animation: slide-from-bottom 0.7s backwards;
	@for $i from 1 through 9 {
		&:nth-child(#{$i}) {
			animation-delay: $i * 0.05s;
			@media only screen and (max-width: $bp-md) {
				animation-delay: $i * 0.2s;
			}
		}
	}
	// }
	&:hover {
		.item__image {
			transform: scale(1.1);
		}
		.item__title {
			color: $clr-yellow;
		}
	}
	&__word {
		@media only screen and (max-width: $bp-xs) {
			display: none;
		}
	}
	&__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		aspect-ratio: 405/210;
		transition: transform $duration;
		@media only screen and (max-width: $bp-md) {
			aspect-ratio: 312/210;
		}
		&-container {
			display: flex;
			overflow: hidden;
			border-radius: 16px;
		}
	}
	&__title {
		font-size: clamp(17px, 2vw, 20px);
		color: #111827;
		line-height: 1.4;
		padding-inline: 20px - 8px;
		transition: color $duration;
		@media only screen and (max-width: $bp-lg) {
			padding-inline: 18px - 8px;
		}
	}
	&__bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 1px solid #e9eaec;
		padding-top: clamp(16px, 2vw, 20px);
		padding-bottom: 22px;
		margin-inline: 20px - 8px;
		@media only screen and (max-width: $bp-lg) {
			margin-inline: 18px - 8px;
		}
		&-col {
			display: flex;
			align-items: center;
			gap: 10px;
			color: #687588;
			font-size: 14px;
			font-weight: 500;
			line-height: 1.4;
		}
	}
	&__icon {
		width: clamp(20px, 2.5vw, 24px);
	}
}
</style>
