<template>
	<div class="bank">
		<div class="bank__left">
			<div class="bank__icon-container">
				<component :is="bank.icon" class="bank__icon" data-original />
			</div>
			<h3 class="bank__title">
				{{ bank.name }}
			</h3>
		</div>
		<div class="bank__details">
			<div class="bank__detail" v-for="detail in details" :key="detail.name">
				<h4 class="bank__detail-title">
					{{ detail.name }}
				</h4>
				<p class="bank__detail-text" v-if="Number.isInteger(detail.data)">
					{{ detail.data }}{{ Number.isInteger(detail.data) ? '%' : '' }}
				</p>
				<a :href="`tel:${detail.data}`" class="bank__detail-text" v-else>
					{{ detail.data }}
				</a>
			</div>
		</div>
		<a :href="bank.website" target="_blank" class="bank__link">
			<span>Go to site</span>
			<IconsUpRightArrow class="bank__arrow" />
		</a>
	</div>
</template>

<script setup>
const props = defineProps({
	bank: Object
});

const details = [
	{
		name: 'Phone number',
		data: props.bank.tel
	},
	{
		name: 'Interest on the loan',
		data: props.bank.loanInterest
	},
	{
		name: 'Interest on deposit',
		data: props.bank.depositInterest
	}
];
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
.bank {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #ffffff;
	border: 1px solid #e9eaec;
	backdrop-filter: blur(30px);
	border-radius: clamp(16px, 2vw, 24px);
	padding: 16px;
	gap: 10px;
	@media only screen and (min-width: $bp-lg) {
		animation: slide-from-bottom 0.7s backwards;
		@for $i from 1 through 10 {
			&:nth-child(#{$i}) {
				animation-delay: $i * 0.07s;
			}
		}
	}
	@media only screen and (max-width: $bp-md) {
		gap: 16px;
		flex-direction: column;
		align-items: flex-start;
	}
	&__left {
		display: flex;
		align-items: center;
		gap: 16px;
	}
	&__arrow {
		fill: inherit;
		width: clamp(20px, 2vw, 24px);
	}
	&__details {
		display: flex;
		align-items: center;
		gap: 10px;
		flex-basis: 60%;
		justify-content: space-between;
		@media only screen and (max-width: $bp-md) {
			flex-basis: initial;
			align-self: stretch;
			flex-wrap: wrap;
		}
		@media only screen and (max-width: $bp-sm) {
			flex-direction: column;
			align-items: stretch;
		}
	}
	&__link {
		align-self: center;
		font-weight: 600;
		font-size: 16px;
		color: #0f8bfd;
		fill: #0f8bfd;
		text-decoration: underline;
		display: flex;
		align-items: center;
		gap: 10px;
	}
	&__detail {
		display: flex;
		flex-direction: column;
		gap: 8px;
		@media only screen and (max-width: $bp-sm) {
			flex-direction: row;
			justify-content: space-between;
		}
		&-title {
			font-weight: 400;
			color: #687588;
			font-size: 14px;
			@media only screen and (max-width: $bp-sm) {
				font-weight: 500;
			}
		}
		&-text {
			font-size: 16px;
			font-weight: 700;
		}
	}
	&__title {
		font-size: 20px;
		font-weight: 700;
	}
	&__icon-container {
		width: 60px;
		aspect-ratio: 1;
		background: #ffffff;
		border: 1px solid #e9eaec;
		border-radius: 12px;
		@include flex-center;
	}
}
</style>
