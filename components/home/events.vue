<template>
	<section class="events">
		<h2 class="events__title">Upcoming events</h2>
		<div class="events__container">
			<div class="events__cards">
				<button
					class="events__card"
					v-for="(item, index) in cards"
					:key="index"
					:class="{ active: curId === index }"
					@click="changeCurId(index)">
					<h3 class="events__card-title">{{ item.title }}</h3>
					<p class="events__card-text">
						{{ item.text.length > 100 ? `${item.text.slice(0, 100)}...` : item.text }}
					</p>
				</button>
			</div>
			<div class="events__items">
				<div
					class="events__item"
					v-for="(item, index) in items"
					:key="index"
					:class="{ active: curId === index }">
					<img :src="item.img" alt="banner" class="events__image" />
					<div class="events__item-time">
						<IconsCalendar class="events__icon" />
						<span>{{ item.date }}</span>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import img1 from '~/assets/images/home-events-1.jpg';
import img2 from '~/assets/images/home-about.jpg';
const curId = ref(0);
const cards = [
	{
		title: 'Smart Cities and Banking Summit',
		text: "Aqlli shaharlar va moliyaviy integratsiya haqida global mutaxassislar bilan bahs-munozaralar. Tadbirda banklar va shaharlar o'rtasidagi yangi hamkorlik imkoniyatlari ko'rib chiqiladi."
	},
	{
		title: 'Mobile Banking Revolution Expo',
		text: 'Mobil bankchilikning kelajagi, yangi mobil ilovalar va foydalanuvchi tajribasi. Tadbirda ishtirokchilar mobil banking sohasidagi eng yangi innovatsiyalar bilan tanishishlari mumkin.'
	},
	{
		title: 'Payment Systems Innovation Forum',
		text: "To'lov tizimlari sohasidagi so'nggi yangiliklar va yangi texnologiyalarni muhokama qilish. Tadbirda global to'lov yechimlari va xavfsizlikni ta'minlash usullari taqdim etiladi."
	},
	{
		title: 'Global Fintech Forum 2025',
		text: "Innovatsion fintech echimlar va moliyaviy texnologiyalarni muhokama qilish uchun dunyo bo'ylab yetakchi mutaxassislar yig'iladi. Tadbirda yangi startaplar va investitsiya imkoniyatlari taqdim etiladi."
	}
];
const items = [
	{
		date: '12-16 March 03:36',
		img: img1
	},
	{
		date: '10-20 September 11:20',
		img: img2
	},
	{
		date: '5-9 December 12:50',
		img: img1
	},
	{
		date: '20-31 October 19:20',
		img: img1
	}
];

const changeCurId = newId => (curId.value = newId);
</script>

<style lang="scss" scoped>
@keyframes appear {
	from {
		opacity: 0;
		transform: translateX(5%);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
.events {
	background: linear-gradient(0deg, rgba(4, 73, 136, 0) 0%, rgba(4, 73, 136, 0.12) 61.86%);
	border-top: 1px solid #04498852;
	border-radius: 32px;
	padding: clamp(10px, 5vw, 80px);
	display: flex;
	flex-direction: column;
	gap: clamp(16px, 3vw, 36px);
	margin-top: clamp(24px, 7vw, 80px);
	// margin-bottom: clamp(24px, 4vw, 53px);
	@media only screen and (max-width: $bp-lg) {
		margin-top: clamp(24px, 3vw, 80px);
		padding: clamp(10px, 2vw, 80px);
		border-top: none;
		border-bottom: 1px solid #04498852;
		background: linear-gradient(180deg, rgba(4, 73, 136, 0) 0%, rgba(4, 73, 136, 0.12) 61.86%);
	}
	&__cards {
		display: flex;
		flex-direction: column;
	}
	&__card {
		display: flex;
		flex-direction: column;
		gap: 12px;
		text-align: left;
		padding: clamp(10px, 2vw, 24px);
		border-left: 3px solid transparent;
		transition: border-color 0.4s, background 0.4s;
		&.active {
			border-color: $clr-primary;
			background: linear-gradient(90deg, rgba(4, 73, 136, 0.12) 0%, rgba(4, 73, 136, 0) 100%);
		}
		&-title {
			font-size: clamp(18px, 2vw, 24px);
			font-weight: 700;
		}
		&-text {
			font-size: 16px;
			line-height: 1.5;
		}
	}
	&__container {
		display: grid;
		gap: clamp(16px, 3vw, 32px);
		@media only screen and (min-width: $bp-lg) {
			grid-template-columns: 1fr 1.35fr;
		}
	}
	&__title {
		@include section-title;
	}
	&__image {
		width: 100%;
		height: 100%;
		border-radius: clamp(12px, 2vw, 24px);
		object-fit: cover;
	}
	&__items {
		// display: flex;
		display: grid;
		& > * {
			grid-area: 1/1/2/2;
		}
	}

	&__item {
		overflow: hidden;
		// animation: appear 0.7s;
		display: grid;
		transition-property: opacity, transform;
		transition-duration: 0.7s;
		& > * {
			grid-area: 1/1/2/2;
		}
		&:not(.active) {
			// display: none;
			opacity: 0;
			transform: translateX(5%);
			@media only screen and (max-width: $bp-lg) {
				transform: translateY(10%);
			}
		}
		&-time {
			background-color: #fff;
			color: $clr-secondary;
			padding-block: clamp(11px, 1vw, 13px);
			padding-inline: clamp(10px, 1vw, 12px);
			align-self: flex-end;
			justify-self: flex-start;
			margin: clamp(16px, 2vw, 30px);
			border-radius: 10px;
			display: flex;
			align-items: center;
			gap: 8px;
			font-family: $font-alt, sans-serif;
			text-transform: uppercase;
			font-size: clamp(14px, 1vw, 16px);
		}
	}
	&__icon {
		width: clamp(20px, 2vw, 24px);
		aspect-ratio: 1;
	}
}
</style>
