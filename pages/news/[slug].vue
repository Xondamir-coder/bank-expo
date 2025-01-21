<template>
	<main class="news" id="news-single">
		<Breadcrumbs :breadcrumbs="breadcrumbs" />
		<div class="news__container">
			<div class="news__wrapper">
				<div class="news__top">
					<NuxtLink class="news__top-back" to="/news">
						<IconsArrowLeft />
						<span class="news__word">Go back</span>
					</NuxtLink>
					<div class="news__top-right">
						<div class="news__top-col">
							<IconsCalendar class="news__icon" />
							<div>
								<span class="news__word">Published: </span>
								<span>{{ date }}</span>
							</div>
						</div>
						<div class="news__top-col">
							<IconsEye class="news__icon" />
							<div>
								<span class="news__word">Views: </span>
								<span>{{ views }}</span>
							</div>
						</div>
					</div>
				</div>
				<div class="news__content">
					<img src="~/assets/images/test-news-hero.jpg" alt="banner" />
					<h3>
						What are bay windows: can you eat them, wear them, or take them on a trip?
						Neither. We tell and show you in this text
					</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate natus
						omnis aperiam libero harum illum quidem sed obcaecati autem exercitationem,
						laudantium temporibus accusantium soluta facere, incidunt ratione nobis
						assumenda repellendus sapiente fugiat quaerat laborum. In expedita sed,
						delectus impedit temporibus similique voluptatem aut officia incidunt porro
						rem nulla, amet laudantium.
					</p>
					<div>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad tempora, veniam
						repudiandae eligendi ipsa mollitia, culpa possimus at esse asperiores natus
						officiis, molestiae eius dicta!
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi omnis sint
						aliquid eos sequi voluptates dolor cupiditate atque quas quidem incidunt,
						autem accusantium placeat quasi aperiam provident quaerat alias ex.
					</p>
				</div>
			</div>
			<NewsSidenav title="Popular news" :similars="similarNews" />
		</div>
		<div class="news__bottom">
			<h2 class="news__bottom-title">Other news</h2>
			<ClientOnly>
				<swiper-container class="news__bottom-list" ref="sliderRef" :init="false">
					<swiper-slide v-for="(item, i) in otherNews" :key="i" class="news__bottom-item">
						<NewsItem :news="item" />
					</swiper-slide>
				</swiper-container>
			</ClientOnly>
		</div>
	</main>
</template>

<script setup>
import testNewsImg from '~/assets/images/test-news-similar.jpg';

// Constants
const MAX_TITLE_LENGTH = 100;
const PROTOTYPE_NEWS = {
	img: testNewsImg,
	title: 'What are bay windows: can you eat them, wear them, or take them on a trip? Neither. We tell and show you in this text',
	publishedDate: '2025-01-13T19:00:00.000Z',
	views: 141,
	title_slug: 'some-news'
};

// similars
const PROTOTYPE_SIMILAR_COUNT = 4;
const similarNews = Array(PROTOTYPE_SIMILAR_COUNT).fill(PROTOTYPE_NEWS);

// other news
const PROTOTYPE_OTHERS_COUNT = 12;
const otherNews = Array(PROTOTYPE_OTHERS_COUNT).fill(PROTOTYPE_NEWS);

// Swiper
const sliderRef = ref();
useSwiper(sliderRef, {
	grabCursor: true,
	slidesPerView: 'auto', // Allow dynamic sizing
	breakpoints: {
		0: {
			spaceBetween: 12
		},
		450: {
			spaceBetween: 20
		},
		1024: {
			spaceBetween: 32
		}
	}
});

// Route
const route = useRoute();

// Computed values
const slug = computed(() => route.params.slug);
const breadcrumbs = computed(() => [
	{
		to: '/',
		label: 'Home'
	},
	{
		to: '/news',
		label: 'News'
	},
	{
		to: route.fullPath,
		label:
			slug.value.length > MAX_TITLE_LENGTH
				? `${slug.value.slice(0, MAX_TITLE_LENGTH)}...`
				: slug.value
	}
]);
const date = computed(() =>
	Intl.DateTimeFormat('ru-RU').format(new Date(PROTOTYPE_NEWS.publishedDate))
);
const views = computed(() => PROTOTYPE_NEWS.views);

// Animation
const { $gsap } = useNuxtApp();
onMounted(() => {
	const parentId = '#news-single';
	const parentContainer = `${parentId} .news`;
	$gsap.from(`${parentContainer}__bottom-title`, {
		x: -50,
		...fadeOnScrollTrigger(`${parentContainer}__bottom-title`)
	});
	setTimeout(() => {
		$gsap.from(`${parentContainer}__bottom-item`, {
			y: 50,
			...fadeOnScrollTrigger(`${parentContainer}__bottom-item`, 'center bottom')
		});
	}, 100);
});
</script>

<style lang="scss" scoped>
@keyframes slide-from-left {
	from {
		transform: translateX(-10px);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}
@keyframes slide-from-top {
	from {
		transform: translateY(-10px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}
@keyframes slide-from-bottom-heavy {
	from {
		transform: translateY(60px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}
@keyframes slide-from-bottom {
	from {
		transform: translateY(10px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}
.news {
	display: flex;
	flex-direction: column;
	gap: 13px;
	@include section-margin-inline;
	@media only screen and (max-width: $bp-md) {
		gap: 20px;
	}
	&__bottom {
		display: flex;
		flex-direction: column;
		gap: clamp(16px, 3vw, 30px);
		margin-top: min(80px, 5vw);
		@media only screen and (max-width: $bp-md) {
			margin-top: 0;
		}
		&-list {
			max-width: calc(100% - 400px - 3vw);
			@media only screen and (min-width: 1600px) {
				max-width: calc(100% - 23% - 3vw);
			}
			@media only screen and (max-width: $bp-xl) {
				max-width: initial;
			}
		}
		&-item {
			max-width: 421px;
			@media only screen and (max-width: $bp-md) {
				width: 80%;
			}
		}
		&-title {
			font-size: clamp(20px, 2.5vw, 42px);
			font-weight: 700;
			color: #111827;
		}
	}
	&__wrapper {
		background: #ffffff;
		border: 1px solid #e9eaec;
		backdrop-filter: blur(30px);
		border-radius: clamp(16px, 3vw, 32px);
		padding: clamp(16px, 3vw, 30px);
		display: flex;
		flex-direction: column;
		gap: clamp(16px, 3vw, 30px);
	}
	&__word {
		@media only screen and (max-width: $bp-md) {
			display: none;
		}
	}
	&__container {
		display: grid;
		grid-template-areas: 'content sidenav';
		grid-template-columns: 1fr max(400px, 23%);
		gap: clamp(20px, 3vw, 32px);
		@media only screen and (max-width: $bp-xl) {
			grid-template-columns: 1fr max(350px, 23%);
		}
		@media only screen and (max-width: $bp-lg) {
			grid-template-areas:
				'content'
				'sidenav';
			grid-template-columns: 1fr;
		}
	}
	&__icon {
		width: clamp(20px, 2.5vw, 24px);
	}
	&__content {
		display: flex;
		flex-direction: column;
		gap: 16px;
		animation: slide-from-bottom-heavy 0.7s;
		img:first-child {
			width: 100%;
			border-radius: clamp(12px, 1vw, 16px);
			object-fit: cover;
			aspect-ratio: 1267/510;
		}
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			color: #111827;
			font-size: clamp(17px, 1.5vw, 28px);
			font-weight: 700;
			line-height: 1.35;
		}
		p {
			color: $clr-secondary;
			font-size: clamp(14px, 1.2vw, 17px);
			opacity: 0.8;
			line-height: 1.45;
		}
		div {
			padding: clamp(16px, 2vw, 20px);
			border-radius: 20px;
			font-size: clamp(16px, 2vw, 20px);
			font-weight: 500;
			line-height: 1.45;
			color: #111827;
			background: #f8f8f8;
		}
	}
	&__top {
		$color: #687588;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 14px;
		font-weight: 500;
		color: $color;
		padding-bottom: clamp(16px, 2vw, 20px);
		border-bottom: 1px solid #e9eaec;
		&-col {
			display: flex;
			align-items: center;
			gap: 10px;
			animation-duration: 0.5s;
			&:first-child {
				animation-name: slide-from-top;
			}
			&:last-child {
				animation-name: slide-from-bottom;
			}
		}
		&-right {
			display: flex;
			align-items: center;
			gap: clamp(20px, 3vw, 32px);
		}
		&-back {
			display: flex;
			align-items: center;
			gap: 10px;
			animation-name: slide-from-left;
			animation-duration: 0.5s;
			transition: color 0.3s;
			&:hover {
				color: $clr-yellow;
				svg {
					fill: $clr-yellow;
					transform: translateX(-5px);
				}
			}

			svg {
				transition: fill 0.3s, transform 0.3s;
				fill: $color;
				width: 20px;
			}
		}
	}
}
</style>
