<template>
	<header class="header">
		<button
			class="header__hamburger"
			@click="$emit('toggleMenu')"
			:class="{ 'header__hamburger--open': menuOpen }">
			<div class="header__hamburger-wrapper">
				<div class="header__hamburger-container">
					<div class="header__hamburger-line header__hamburger-line--1"></div>
					<div class="header__hamburger-line header__hamburger-line--2"></div>
					<div class="header__hamburger-line header__hamburger-line--3"></div>
				</div>
			</div>
		</button>
		<div class="header__col header__col--left">
			<NuxtLink to="/" class="header__logo-container">
				<Logo :is-white="route.path === '/' || menuOpen" />
			</NuxtLink>
			<nav class="header__nav">
				<NuxtLink
					v-for="link in links"
					:key="link.to"
					:to="link.to"
					class="header__link"
					active-class="header__link--active">
					<span class="header__link-label">
						{{ link.label }}
					</span>
				</NuxtLink>
			</nav>
		</div>
		<div class="header__col header__col--right">
			<div class="flex header__col-inside">
				<a class="header__social" target="_blank" href="#">
					<IconsTelegram class="header__social-icon" />
				</a>
				<a class="header__social" target="_blank" href="#">
					<IconsInstagram class="header__social-icon" />
				</a>
				<a class="header__link" href="mailto:Info@expobanking">
					<span class="header__link-label"> Info@expobanking </span>
				</a>
				<button to="/contact" class="header__button" :data-contact="true">
					Contact Us
				</button>
			</div>
			<button class="header__lang" @click="toggleDropdown">
				<div class="header__lang-inside">
					<IconsGlobe class="header__lang-icon" />
					<span>{{ currentLanguage.toUpperCase() }}</span>
				</div>
				<div
					class="header__lang-dropdown"
					:class="{ 'header__lang-dropdown--active': showLanguageDropdown }">
					<button
						class="header__lang-button"
						v-for="lang in languages"
						:key="lang"
						:class="{ 'header__lang-button--active': lang === currentLanguage }"
						@click="toggleLanguage(lang)">
						{{ lang.toUpperCase() }}
					</button>
				</div>
			</button>
		</div>
	</header>
</template>

<script setup>
const route = useRoute();
const links = [
	{
		to: '/about',
		label: 'About Us'
	},
	{
		to: '/banks',
		label: 'Banks'
	},
	{
		to: '/news',
		label: 'News'
	},
	{
		to: '/partners',
		label: 'Partners'
	}
];
const languages = ['en', 'ru', 'uz'];

const currentLanguage = ref('en');
const showLanguageDropdown = ref(false);

const toggleDropdown = () => (showLanguageDropdown.value = !showLanguageDropdown.value);
const toggleLanguage = lang => {
	currentLanguage.value = lang;
	localStorage.setItem('lang', lang);
};
defineProps({
	menuOpen: Boolean
});
const { $gsap } = useNuxtApp();
onMounted(() => {
	const lang = localStorage.getItem('lang');
	if (lang) currentLanguage.value = lang;
	document.addEventListener('click', e => {
		if (e.target.closest('.header__lang') || !showLanguageDropdown.value) return;
		toggleDropdown();
	});
	// $gsap.to(
	// 	['.header__logo-container', '.header__nav', '.header__col-inside', '.header__lang'],
	// 	{
	// 		background: '#011224CC',
	// 		scrollTrigger: {
	// 			trigger: '.header',
	// 			start: '+=30',
	// 			toggleActions: 'play none none reverse'
	// 		}
	// 	}
	// );
});
</script>

<style lang="scss" scoped>
@keyframes slide-from-top {
	from {
		transform: translateY(-30px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}

@mixin col-item-white {
	background-color: #fff;
	color: #323b49;
	border: 1px solid #e9eaec;
}
@mixin col-item-dark {
	background: #011224cc;
	border: 1px solid #ffffff1a;
	color: #ffffff;
}

@mixin item {
	font-size: 17px;
	background-color: #f1f2f4;
}
@mixin item-dark {
	background-color: #ffffff1a;
}

.header {
	padding-block: 20px;
	display: flex;
	justify-content: space-between;
	position: sticky;
	top: 0;
	gap: 10px;
	z-index: 100;
	animation: slide-from-top 0.7s 0.2s backwards;
	transition: background-color 0.6s;
	@include section-padding-inline;

	@media only screen and (max-width: $bp-md) {
		padding-block: 16px;
		align-items: stretch;
		justify-content: initial;
	}
	&--open {
		background-color: #000c1a;
	}
	&--home,
	&--open {
		.header__social {
			@include social-icon;
		}
		.header__col > * {
			@include col-item-dark;
		}
		.header__link,
		.header__lang-inside {
			@include item-dark;
		}
		.header__hamburger {
			background: #ffffff05;
			&-wrapper {
				background: #ffffff1a;
			}
			&-line {
				background: #fff;
			}
		}
		.header__lang-dropdown {
			background-color: #011224;
			border-color: rgba(255, 255, 255, 0.1);
		}
	}

	&__hamburger {
		padding: 5px;
		border-radius: 7px;
		aspect-ratio: 1;
		background-color: #fff;

		@media only screen and (min-width: $bp-xxl) {
			display: none;
		}

		&--open .header__hamburger-line {
			&--3 {
				opacity: 0;
			}
			&--2 {
				transform: rotate(45deg);
			}
			&--1 {
				transform: rotate(-45deg);
				transform-origin: 91% 125%;
			}
		}
		&-wrapper {
			padding: 8px;
			border-radius: inherit;
			background-color: #e9eaec;
		}

		&-container {
			width: 22px;
			height: 22px;
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
		}

		&-line {
			width: inherit;
			height: 4px;
			background-color: #323b49;
			align-self: center;
			transition: background-color 0.3s, opacity 0.3s, transform 0.4s;
		}
	}

	&__lang {
		padding: 6px;
		font-size: 16px;
		border-radius: 9px;
		position: relative;

		&-dropdown {
			position: absolute;
			z-index: 5;
			width: 100%;
			left: 0;
			top: calc(100% + 7px);
			display: flex;
			flex-direction: column;
			border: 1px solid #e9eaec;
			box-shadow: 0px 2px 32px 0px #0000001f;
			border-radius: 10px;
			background-color: #ffffff;
			transform: translateY(10px);
			opacity: 0;
			pointer-events: none;
			transition: transform 0.3s, opacity 0.3s;
			&--active {
				transform: translateY(0);
				opacity: 1;
				pointer-events: all;
			}
		}
		&-button {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-block: 14px;
			padding-inline: 12px;
			&::after {
				content: url('~/assets/check.svg');
				aspect-ratio: 1;
				display: flex;
				transform: scale(0);
				transition: transform 0.3s;
			}
			&--active::after {
				transform: scale(1);
			}
		}

		&-icon {
			width: clamp(19px, 2vw, 24px);
			aspect-ratio: 1;
			fill: currentColor;
			transition: fill 0.3s;
		}

		&-inside {
			@include item;
			font-weight: 400;
			display: flex;
			align-items: center;
			gap: clamp(5px, 1vw, 10px);
			padding-block: clamp(8px, 1vw, 10px);
			padding-inline: 12px;
			border-radius: 7px;
			transition: color 0.3s;

			&:hover {
				.header__lang-icon {
					fill: $clr-yellow;
				}
				color: $clr-yellow;
			}
		}
	}

	&__social {
		@include social-icon(#f1f2f4);
	}

	&__nav {
		display: flex;
		gap: 8px;

		@media only screen and (max-width: $bp-xxl) {
			display: none;
		}
	}

	&__link {
		padding-block: 12px;
		padding-inline: 24px;
		border-radius: 10px;
		transition: color 0.3s;

		@include item;
		&--active {
			background: $clr-yellow;
			color: #fafafa;
		}
		&:hover:not(.header__link--active) {
			color: $clr-yellow;
			.header__link-label::after {
				height: 4px;
			}
		}

		&-label {
			position: relative;

			&::after {
				content: '';
				position: absolute;
				width: 100%;
				height: 0px;
				background-color: $clr-yellow;
				bottom: -7px;
				left: 50%;
				transform: translateX(-50%);
				transition: height 0.2s;
			}
		}
	}

	&__button {
		border-radius: 10px;
		background-color: $clr-yellow;
		padding-block: 12px;
		padding-inline: 24px;
		color: #fff;
		transition: color 0.3s, background-color 0.3s;
		&:hover {
			color: $clr-yellow;
			background-color: #fff;
		}
	}

	&__col {
		display: flex;
		align-items: center;
		font-weight: 500;

		& > * {
			backdrop-filter: blur(30px);
			padding: 6px;
			border-radius: 12px;

			@include col-item-white();
		}

		&-inside {
			gap: 8px;

			@media only screen and (max-width: $bp-xxl) {
				display: none;
			}
		}

		&--left {
			gap: 24px;

			@media only screen and (max-width: $bp-md) {
				flex: 1;
				align-self: stretch;
				justify-content: center;
			}
		}

		&--right {
			gap: 18px;
		}
	}

	&__logo {
		&-container {
			width: clamp(158px, 15vw, 248px);
			aspect-ratio: 248/28;
			padding-block: 14px;
			padding-inline: 16px;

			@media only screen and (max-width: 476px) {
				@include flex-center;
				align-self: stretch;
				padding-inline: 10px;
				flex: 1;
				backdrop-filter: none;
			}
		}
	}
}
</style>
