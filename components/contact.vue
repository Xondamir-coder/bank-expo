<template>
	<div class="contact" :class="{ 'contact--open': isActive }">
		<div class="contact__top">
			<div class="contact__top-top">
				<h2 class="contact__title">Contact us</h2>
				<button class="contact__close" :data-contact="true">
					<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_225_8576)">
							<path
								d="M4 4L20 20"
								stroke="#111827"
								stroke-width="2.4"
								stroke-linecap="round"
								stroke-linejoin="round" />
							<path
								d="M4 20L20 4"
								stroke="#111827"
								stroke-width="2.4"
								stroke-linecap="round"
								stroke-linejoin="round" />
						</g>
						<defs>
							<clipPath id="clip0_225_8576">
								<rect width="24" height="24" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</button>
			</div>
			<p class="contact__text">
				Discover the leading banks and financial institutions in the industry. Their logos
				showcase innovation and excellence
			</p>
		</div>
		<form class="contact__form" @submit.prevent="">
			<div class="contact__row">
				<span class="contact__label">Full name</span>
				<input
					type="text"
					required
					v-model="name"
					class="contact__input"
					placeholder="Enter your name" />
			</div>
			<div class="contact__row">
				<span class="contact__label">Mobile phone</span>
				<input
					type="tel"
					required
					v-model="tel"
					class="contact__input"
					placeholder="Enter your number"
					@input="checkTel" />
			</div>
			<div class="contact__row">
				<span class="contact__label">Your city</span>
				<input
					type="text"
					required
					v-model="city"
					class="contact__input"
					placeholder="Select your city" />
			</div>
			<button class="contact__button" type="submit">
				<span>Send request</span>
				<IconsUpRightArrow class="contact__arrow" />
			</button>
			<div class="contact__bottom">
				Регистрируясь, вы подтверждаете, что прочитали и согласны с
				<br />
				<NuxtLink to="/policy">Политикой конфиденциальности.</NuxtLink>
			</div>
		</form>
	</div>
	<div class="overlay" :class="{ 'overlay--open': isActive }" :data-contact="true"></div>
</template>

<script setup>
const name = ref('');
const tel = ref('');
const city = ref('');

const isActive = ref(false);

const checkTel = () => {
	const regex = /^[+0-9]+$/;
	if (!regex.test(tel.value)) {
		tel.value = tel.value.replace(/[a-zA-Z]/g, '');
	}
};
const toggleIsActive = () => (isActive.value = !isActive.value);

const { $lenis } = useNuxtApp();
onMounted(() => {
	document.addEventListener('click', e => {
		if (e.target.closest('[data-contact]')?.dataset.contact) {
			toggleIsActive();
			isActive.value ? $lenis.stop() : $lenis.start();
		}
	});
});
</script>

<style lang="scss" scoped>
.contact {
	position: fixed;
	right: 0;
	top: 0;
	height: 100%;
	width: 39.5%;
	z-index: 102;
	background: #ffffff;
	padding-block: clamp(20px, 5vw, 70px);
	padding-inline: clamp(16px, 5vw, 70px);
	color: $clr-secondary;
	transition: transform 0.5s;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	gap: clamp(30px, 4vw, 60px);
	@media only screen and (max-width: $bp-lg) {
		width: 100%;
	}
	&:not(.contact--open) {
		transform: translateX(100%);
	}
	&__close {
		width: clamp(42px, 3vw, 50px);
		aspect-ratio: 1;
		background: #fafafa;
		border: 1px solid #cbd5e0;
		border-radius: clamp(8px, 1vw, 12px);
		@include flex-center;
		svg {
			width: 50%;
		}
	}
	&__bottom {
		font-size: clamp(12px, 1vw, 16px);
		font-weight: 500;
		line-height: 1.2;
		color: #687588;
		a {
			text-decoration: underline;
			color: #005fcc;
		}
	}
	&__top {
		display: flex;
		flex-direction: column;
		gap: clamp(8px, 1.3vw, 16px);
		&-top {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
	&__input {
		font-weight: 400;
		font-size: 16px;
		padding-block: clamp(12px, 1.1vw, 18px);
		padding-inline: clamp(16px, 2vw, 20px);
		border: 1px solid #cbd5e0;
		border-radius: clamp(10px, 1vw, 12px);
		&::placeholder {
			opacity: 0.6;
		}
	}
	&__button {
		background-color: $clr-yellow;
		padding-block: clamp(12px, 1vw, 17px);
		color: #fff;
		font-size: clamp(16px, 1.2vw, 17px);
		font-weight: 500;
		display: flex;
		align-items: center;
		gap: 10px;
		justify-content: center;
		border-radius: clamp(10px, 1vw, 12px);
		transition: background-color 0.3s, color 0.3s;
		&:hover {
			background-color: #fff;
			color: $clr-yellow;
			svg {
				fill: $clr-yellow;
			}
		}
	}
	&__arrow {
		width: 24px;
		fill: #fff;
		transition: fill 0.3s;
	}
	&__form {
		display: flex;
		flex-direction: column;
		gap: clamp(20px, 2vw, 24px);
	}
	&__row {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	&__label {
		font-weight: 700;
		font-size: clamp(14px, 1vw, 17px);
		opacity: 0.8;
	}
	&__text {
		font-size: clamp(14px, 1vw, 16px);
		line-height: 1.45;
		opacity: 0.8;
	}
	&__title {
		font-weight: 700;
		font-size: clamp(20px, 3.3vw, 36px);
	}
}
.overlay {
	position: fixed;
	inset: 0;
	background-color: #000;
	opacity: 0.8;
	z-index: 101;
	transition: opacity 0.5s;
	cursor: pointer;
	&:not(.overlay--open) {
		pointer-events: none;
		opacity: 0;
	}
}
</style>
