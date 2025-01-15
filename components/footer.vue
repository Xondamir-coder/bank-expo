<template>
	<footer class="footer" id="footer">
		<div class="footer__wrapper">
			<div class="footer__top">
				<Logo class="footer__logo" />
				<div class="footer__top-left">
					<span>Subscribe to news</span>
					<form class="footer__form" @submit.prevent="submitForm">
						<input
							v-model="email"
							required
							type="email"
							class="footer__input"
							placeholder="Enter your email" />
						<button class="footer__form-button" type="submit">Subscribe</button>
						<div class="footer__form-social">
							<button class="footer__form-button" type="submit">Subscribe</button>
							<div class="footer__social">
								<a class="footer__social-item" href="#" target="_blank">
									<IconsInstagram class="footer__social-icon" />
								</a>
								<a class="footer__social-item" href="#" target="_blank">
									<IconsTelegram class="footer__social-icon" />
								</a>
							</div>
						</div>
					</form>
					<div class="footer__divider"></div>
					<div class="footer__social">
						<a class="footer__social-item" href="#" target="_blank">
							<IconsInstagram class="footer__social-icon" />
						</a>
						<a class="footer__social-item" href="#" target="_blank">
							<IconsTelegram class="footer__social-icon" />
						</a>
					</div>
				</div>
			</div>
			<div class="footer__middle">
				<div class="footer__middle-cta">
					<h2 class="footer__title">
						Discover the future <br />
						of banking technology in one place!
					</h2>
					<button class="footer__button">
						Get started
						<IconsUpRightArrow />
					</button>
				</div>
				<div class="footer__cols">
					<div class="footer__col">
						<h4 class="footer__col-label">Link</h4>
						<div class="footer__links">
							<NuxtLink
								class="footer__link"
								v-for="link in links"
								:key="link.to"
								:to="link.to">
								{{ link.label }}
							</NuxtLink>
						</div>
					</div>
					<div class="footer__col">
						<h4 class="footer__col-label">Services</h4>
						<div class="footer__links">
							<NuxtLink
								class="footer__link"
								v-for="service in services"
								:key="service.to"
								:to="service.to">
								{{ service.label }}
							</NuxtLink>
						</div>
					</div>
					<div class="footer__col">
						<h4 class="footer__col-label">Contacts</h4>
						<div class="footer__contacts">
							<div v-for="contact in contacts">
								<a
									class="footer__contact"
									:href="`mailto:${contact.text}`"
									v-if="contact.type === 'mail'">
									<component :is="contact.icon" class="footer__contact-icon" />
									{{ contact.text }}
								</a>
								<a
									class="footer__contact"
									:href="`tel:${contact.text}`"
									v-if="contact.type === 'tel'">
									<component :is="contact.icon" class="footer__contact-icon" />
									{{ contact.text }}
								</a>
								<p class="footer__contact" v-if="contact.type === 'location'">
									<component :is="contact.icon" class="footer__contact-icon" />
									{{ contact.text }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="footer__bottom">
				<p class="footer__copyright">&copy; 2024 Moonigate - All rights reserved</p>
				<div class="footer__bottom-links">
					<NuxtLink to="/terms" class="footer__bottom-link">
						<span>Terms of service</span>
					</NuxtLink>
					<NuxtLink to="/policy" class="footer__bottom-link">
						<span>Privacy policy</span>
					</NuxtLink>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
import telephone from '~/components/icons/telephone.vue';
import mail from '~/components/icons/mail.vue';
import location from '~/components/icons/location.vue';
const links = [
	{
		to: '/target',
		label: 'Our target'
	},
	{
		to: '/how-it-works',
		label: 'How it works'
	},
	{
		to: '/about',
		label: 'About us'
	},
	{
		to: '/pricing-license',
		label: 'Pricing and license'
	}
];
const services = [
	{
		to: '/service',
		label: 'Service name'
	},
	{
		to: '/service',
		label: 'Service name'
	},
	{
		to: '/service',
		label: 'Service name'
	},
	{
		to: '/service',
		label: 'Service name'
	},
	{
		to: '/service',
		label: 'Service name'
	},
	{
		to: '/service',
		label: 'Service name'
	}
];
const contacts = [
	{
		icon: telephone,
		text: '+777 123 88 71',
		type: 'tel'
	},
	{
		icon: mail,
		text: 'Example@gmail.com',
		type: 'mail'
	},
	{
		icon: location,
		text: 'Uzbekistan, Tashkent',
		type: 'location'
	}
];
const { $gsap } = useNuxtApp();
const email = ref();

const submitForm = () => {
	console.log(email.value);
};

onMounted(async () => {
	const parentId = '#footer';
	const parentContainer = `${parentId} .footer__wrapper`;
	const travelDistance = 100;
	const TIMEOUT_SWIPER = 500;

	setTimeout(() => {
		$gsap.utils.toArray(`${parentContainer}>*`).forEach((child, i) => {
			$gsap.from(child, {
				x: i % 2 === 0 ? travelDistance : -travelDistance,
				...fadeOnScrollTrigger(child, null, null, false)
			});
		});
	}, TIMEOUT_SWIPER);
});
</script>

<style lang="scss" scoped>
@mixin button-style {
	background-color: $clr-yellow;
	font-weight: 400;
	border-radius: 12px;
	padding-block: 14px;
	padding-inline: 24px;
	transition: background-color 0.3s, color 0.3s;
	&:hover {
		background-color: #fff;
		color: $clr-yellow;
		svg {
			fill: $clr-yellow;
		}
	}
}
.footer {
	position: relative;
	display: flex;
	overflow: hidden;

	&__title {
		font-size: clamp(18px, 3vw, 36px);
		font-weight: 700;
		text-transform: uppercase;
		@media only screen and (min-width: $bp-md) {
			max-width: 23ch;
		}
		@media only screen and (max-width: $bp-md) {
			line-height: 1.5;
		}
	}
	&__contacts {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	&__contact {
		display: flex;
		align-items: center;
		gap: 8px;
		transition: color 0.3s;
		svg {
			transition: fill 0.3s;
			fill: #fff;
		}
		&:hover {
			color: $clr-yellow;
			svg {
				fill: $clr-yellow;
			}
		}
	}
	&__button {
		@include button-style();
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 17px;

		svg {
			transition: fill 0.3s;
			fill: #fff;
		}
	}
	&__links {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	&__link {
		@include link-hover;
	}
	&__col {
		opacity: 0.8;
		font-size: 18px;
		display: flex;
		flex-direction: column;
		gap: 12px;
		&-label {
			font-weight: 700;
		}
	}
	&__cols {
		flex: 1;
		display: flex;
		gap: 15%;
		flex-wrap: wrap;
		@media only screen and (max-width: $bp-xxl) {
			gap: 7%;
		}
		@media only screen and (max-width: $bp-lg) {
			column-gap: 20px;
			row-gap: 16px;
			justify-content: space-between;
			padding-right: 10px;
		}
	}
	&__copyright {
		opacity: 0.8;
	}
	&__bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 14px;
		flex-wrap: wrap;
		gap: 10px;
		@media only screen and (max-width: $bp-sm) {
			justify-content: center;
		}
		&-links {
			display: flex;
		}
		&-link {
			padding-inline: 12px;
			transition: color 0.3s;
			&:hover {
				color: $clr-yellow;
			}
			&:first-child {
				position: relative;
				&::after {
					content: '';
					width: 4px;
					aspect-ratio: 1;
					background-color: #ffffff;
					opacity: 0.6;
					border-radius: 50%;
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					right: 0;
				}
			}
		}
	}
	&__middle {
		padding-block: clamp(16px, 4vw, 60px);
		border-top: 1px solid #ffffff1f;
		border-bottom: 1px solid #ffffff1f;
		display: flex;
		gap: 10%;
		@media only screen and (max-width: $bp-xxl) {
			gap: 3%;
		}
		@media only screen and (max-width: $bp-lg) {
			flex-direction: column;
			gap: 16px;
			flex-wrap: wrap;
		}
		&-cta {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: clamp(16px, 3vw, 30px);

			@media only screen and (max-width: $bp-md) {
				gap: 16px;
			}
		}
	}
	&__social {
		display: flex;
		gap: 12px;
		&-item {
			@include social-icon;
		}
		&-icon {
			fill: #fff;
			width: 45%;
			height: 45%;
			transition: transform 0.3s;
		}
	}
	&__divider {
		width: 1px;
		background-color: #ffffff;
		opacity: 0.12;
		align-self: stretch;
		transform: scaleY(0.5);
		margin-inline: -20px;
		@media only screen and (max-width: $bp-lg) {
			display: none;
		}
	}
	&__input {
		background: #ffffff;
		border: 1px solid #00000033;
		padding-block: 14px;
		padding-inline: 16px;
		border-radius: 12px;
		font-size: 14px;
		color: $clr-secondary;
		font-weight: 400;
		transition: outline 0.1s;
		min-width: 280px;
		&:focus {
			outline: 2px solid $clr-yellow;
		}
		&::placeholder {
			opacity: 0.6;
			color: inherit;
		}
	}
	&__form {
		display: flex;
		column-gap: 12px;
		row-gap: 10px;
		@media only screen and (max-width: $bp-sm) {
			flex-direction: column;
			flex: 1;
		}
		&-social {
			display: flex;
			gap: 12px;
			.footer__form-button {
				flex: 1;
			}
			@media only screen and (min-width: $bp-sm) {
				display: none;
			}
		}
		&-button {
			@include button-style();
			font-size: 14px;
		}
		& > &-button {
			@media only screen and (max-width: $bp-sm) {
				display: none;
			}
		}
	}
	&__top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 16px;

		&-left {
			display: flex;
			align-items: center;
			gap: clamp(10px, 3vw, 40px);
			font-size: clamp(14px, 1vw, 16px);
			font-weight: 700;
			flex-wrap: wrap;
			@media only screen and (max-width: $bp-sm) {
				flex-direction: column;
				flex: 1;
				align-items: stretch;
				& > *.footer__social {
					display: none;
				}
			}

			span {
				text-transform: uppercase;
			}
		}
	}
	&__logo {
		width: clamp(177px, 20vw, 248px);
		@media only screen and (max-width: $bp-md) {
			margin-inline: auto;
		}
	}
	&__wrapper {
		flex: 1;
		border-top-left-radius: 24px;
		border-top-right-radius: 24px;
		background-color: $clr-accent-dark-blue;
		z-index: 3;
		font-family: $font-alt;
		padding-block: clamp(16px, 3vw, 30px);
		display: flex;
		flex-direction: column;
		gap: clamp(16px, 2vw, 30px);
		@include section-padding-inline;
	}
	&::before {
		content: '';
		position: absolute;
		inset: 0;
		background-color: #fff;
		z-index: 2;
	}
}
</style>
