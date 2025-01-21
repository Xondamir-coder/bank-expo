<template>
	<div class="menu">
		<div class="menu__links">
			<NuxtLink
				class="menu__link"
				v-for="link in links"
				:key="link.to"
				:to="link.to"
				@click="$emit('toggleMenu')">
				{{ link.label }}
			</NuxtLink>
		</div>
		<div class="menu__bottom">
			<a class="menu__social" target="_blank" href="#">
				<IconsTelegram class="menu__social-icon" />
			</a>
			<a class="menu__social" target="_blank" href="#">
				<IconsInstagram class="menu__social-icon" />
			</a>
			<a class="menu__link menu__link--email" href="mailto:Info@expobanking"
				>Info@expobanking</a
			>
			<button to="/contact" class="menu__button" :data-contact="true">Contact Us</button>
		</div>
	</div>
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
.menu {
	$duration: 0.6s;
	position: fixed;
	inset: 0;
	top: 81.6px;
	background-color: #000c1a;
	z-index: 99;
	padding-inline: 16px;
	padding-top: 30px - 16px;
	padding-bottom: 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	transition: opacity $duration;
	&:not(.menu--open) {
		opacity: 0;
		pointer-events: none;
		.menu__links,
		.menu__bottom {
			transform: translateY(50px);
			opacity: 0;
		}
	}
	&__button {
		padding-block: 12px;
		text-align: center;
		background-color: $clr-yellow;
		font-size: 17px;
		font-weight: 500;
		border-radius: 10px;
		grid-column: 1 / span 3;
	}
	&__bottom {
		display: grid;
		grid-auto-columns: max-content max-content 1fr;
		row-gap: 10px;
		column-gap: 8px;
		transition-property: transform, opacity;
		transition-duration: $duration;
		transition-delay: 0.3s;
	}
	&__social {
		@include social-icon;
	}
	&__link {
		font-size: 17px;
		font-weight: 500;
		background: #ffffff1a;
		padding-block: 12px;
		text-align: center;
		border-radius: inherit;
		&--email {
			border-radius: 10px;
		}
	}
	&__links {
		background: #011224cc;
		border: 1px solid #ffffff1a;
		backdrop-filter: blur(30px);
		padding: 16px;
		display: flex;
		flex-direction: column;
		gap: 16px;
		border-radius: 10px;
		transition-property: transform, opacity;
		transition-duration: $duration;
	}
}
</style>
