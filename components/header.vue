<template>
	<header class="header">
		<button class="header__hamburger">
			<div class="header__hamburger-wrapper">
				<div class="header__hamburger-container">
					<div class="header__hamburger-line"></div>
				</div>
			</div>
		</button>
		<div class="header__col header__col--left">
			<NuxtLink to="/" class="header__logo-container">
				<Logo />
			</NuxtLink>
			<nav class="header__nav">
				<NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="header__link">
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
				<button class="header__button">Contact Us</button>
			</div>
			<button class="header__lang">
				<div class="header__lang-inside">
					<IconsGlobe class="header__lang-icon" />
					<span>EN</span>
				</div>
			</button>
		</div>
	</header>
</template>

<script setup>
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
</script>

<style lang="scss" scoped>
@mixin bg-br {
	border-radius: 10px;
	background-color: #ffffff1a;
}
@mixin col-style {
	background: #ffffff0d;
	border: 1px solid #ffffff1a;
	backdrop-filter: blur(30px);
	padding: 6px;
	border-radius: 12px;
}
@mixin link-style {
	font-weight: 500;
	font-size: 17px;
	transition: color 0.3s;
	&:hover {
		color: $clr-yellow;
	}
}
.header {
	padding-block: 20px;
	display: flex;
	justify-content: space-between;
	position: sticky;
	top: 0;
	gap: 10px;

	@media only screen and (max-width: $bp-md) {
		padding-block: 0;
		padding-top: 16px;
		align-items: stretch;
		justify-content: initial;
	}
	&__hamburger {
		border: 1px solid #ffffff1a;
		padding: 5px;
		border-radius: 7px;
		aspect-ratio: 1;
		@media only screen and (min-width: $bp-xxl) {
			display: none;
		}
		&:hover {
			.header__hamburger-line {
				background-color: $clr-yellow;
			}
		}
		&-wrapper {
			padding: 8px;
			background-color: #ffffff1a;
			border-radius: inherit;
		}
		&-container {
			width: 22px;
			height: 22px;
			position: relative;
			display: flex;
		}
		&-line {
			width: inherit;
			height: 4px;
			background-color: #fff;
			align-self: center;
			transition: background-color 0.3s;
			&::after,
			&::before {
				content: '';
				background-color: inherit;
				width: inherit;
				height: 4px;
				position: absolute;
				left: 0;
			}
			&::before {
				top: 2px;
			}
			&::after {
				bottom: 2px;
			}
		}
	}
	&__lang {
		@include col-style();
		padding: 6px;
		font-size: 16px;
		border-radius: 9px;
		transition: color 0.3s;
		&:hover {
			.header__lang-icon {
				fill: $clr-yellow;
			}
			color: $clr-yellow;
		}
		&-icon {
			width: clamp(19px, 2vw, 24px);
			aspect-ratio: 1;
			fill: #fff;
			transition: fill 0.3s;
		}
		&-inside {
			display: flex;
			align-items: center;
			gap: clamp(5px, 1vw, 10px);
			padding-block: clamp(8px, 1vw, 10px);
			padding-inline: 12px;
			background-color: #ffffff1a;
			border-radius: 7px;
		}
	}
	&__social {
		@include bg-br();
		@include flex-center;
		aspect-ratio: 1;
		width: 44px;
		&-icon {
			fill: #fff;
			transition: fill 0.3s, transform 0.3s;
		}
		&:hover {
			.header__social-icon {
				fill: $clr-yellow;
			}
		}
	}
	&__nav {
		@include col-style();
		display: flex;
		gap: 8px;
		@media only screen and (max-width: $bp-xxl) {
			display: none;
		}
	}
	&__link {
		@include bg-br();
		@include link-style();
		padding-block: 12px;
		padding-inline: 24px;
		&:hover {
			.header__link-label {
				&::after {
					height: 4px;
				}
			}
		}
		&-label {
			position: relative;
			&::after {
				content: '';
				position: absolute;
				width: 100%;
				height: 0px;
				background-color: #fff;
				bottom: -7px;
				left: 50%;
				transform: translateX(-50%);
				transition: height 0.2s;
			}
		}
	}
	&__button {
		@include bg-br();
		@include link-style();
		background-color: $clr-yellow;
		padding-block: 12px;
		padding-inline: 24px;
		transition: color 0.3s, background-color 0.3s;
		&:hover {
			background-color: #fff;
		}
	}
	&__col {
		display: flex;
		align-items: center;
		color: #fff;

		&-inside {
			@include col-style();
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
			border: 1px solid #ffffff1a;
			// background-color: #011224cc;
			backdrop-filter: blur(30px);
			border-radius: 12px;
			@media only screen and (max-width: $bp-xxl) {
				@include flex-center;
				align-self: stretch;
				padding-inline: 10px;
				flex: 1;
				background-color: transparent;
				backdrop-filter: none;
				background-color: #ffffff05;
			}
		}
	}
}
</style>
