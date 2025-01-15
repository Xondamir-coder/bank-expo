<template>
	<div class="icons">
		<div class="icons__row" v-for="row in list">
			<div class="icons__wrapper" v-for="icon in row">
				<component class="icons__icon" :is="icon" />
			</div>
		</div>
	</div>
</template>

<script setup>
import IconsBank from '~/components/icons/bank.vue';
import IconsBank1 from '~/components/icons/bank-1.vue';
import IconsBank2 from '~/components/icons/bank-2.vue';
import IconsBank3 from '~/components/icons/bank-3.vue';
import IconsBank4 from '~/components/icons/bank-4.vue';
import IconsBank5 from '~/components/icons/bank-5.vue';
import IconsBank6 from '~/components/icons/bank-6.vue';
import IconsBank7 from '~/components/icons/bank-7.vue';
import IconsBank8 from '~/components/icons/bank-8.vue';
import IconsBank9 from '~/components/icons/bank-9.vue';
import IconsBank10 from '~/components/icons/bank-10.vue';
import IconsBank11 from '~/components/icons/bank-11.vue';
import IconsBank12 from '~/components/icons/bank-12.vue';
import IconsBank13 from '~/components/icons/bank-13.vue';
import IconsBank14 from '~/components/icons/bank-14.vue';
import IconsBank15 from '~/components/icons/bank-15.vue';
import IconsBank16 from '~/components/icons/bank-16.vue';
import IconsBank17 from '~/components/icons/bank-17.vue';

const list = [
	[
		IconsBank5,
		IconsBank13,
		IconsBank,
		IconsBank4,
		IconsBank3,
		IconsBank15,
		IconsBank14,
		IconsBank1,
		IconsBank7,
		IconsBank2,
		IconsBank10,
		IconsBank9,
		IconsBank11,
		IconsBank12,
		IconsBank6,
		IconsBank16,
		IconsBank8,
		IconsBank17
	],
	[
		IconsBank1,
		IconsBank10,
		IconsBank12,
		IconsBank4,
		IconsBank8,
		IconsBank14,
		IconsBank2,
		IconsBank11,
		IconsBank7,
		IconsBank9,
		IconsBank13,
		IconsBank16,
		IconsBank15,
		IconsBank6,
		IconsBank17,
		IconsBank,
		IconsBank5,
		IconsBank3
	],
	[
		IconsBank14,
		IconsBank2,
		IconsBank15,
		IconsBank17,
		IconsBank9,
		IconsBank1,
		IconsBank,
		IconsBank6,
		IconsBank13,
		IconsBank3,
		IconsBank5,
		IconsBank10,
		IconsBank7,
		IconsBank12,
		IconsBank16,
		IconsBank4,
		IconsBank11,
		IconsBank8
	],
	[
		IconsBank6,
		IconsBank8,
		IconsBank1,
		IconsBank11,
		IconsBank13,
		IconsBank3,
		IconsBank9,
		IconsBank16,
		IconsBank4,
		IconsBank,
		IconsBank10,
		IconsBank17,
		IconsBank2,
		IconsBank5,
		IconsBank14,
		IconsBank7,
		IconsBank15,
		IconsBank12
	],
	[
		IconsBank13,
		IconsBank17,
		IconsBank10,
		IconsBank15,
		IconsBank14,
		IconsBank12,
		IconsBank6,
		IconsBank1,
		IconsBank8,
		IconsBank9,
		IconsBank16,
		IconsBank3,
		IconsBank,
		IconsBank5,
		IconsBank7,
		IconsBank11,
		IconsBank2,
		IconsBank4
	],
	[
		IconsBank,
		IconsBank6,
		IconsBank15,
		IconsBank14,
		IconsBank11,
		IconsBank3,
		IconsBank16,
		IconsBank2,
		IconsBank1,
		IconsBank8,
		IconsBank9,
		IconsBank13,
		IconsBank17,
		IconsBank7,
		IconsBank12,
		IconsBank10,
		IconsBank4,
		IconsBank5
	],
	[
		IconsBank13,
		IconsBank7,
		IconsBank12,
		IconsBank14,
		IconsBank2,
		IconsBank1,
		IconsBank3,
		IconsBank5,
		IconsBank8,
		IconsBank10,
		IconsBank16,
		IconsBank6,
		IconsBank17,
		IconsBank9,
		IconsBank,
		IconsBank15,
		IconsBank11,
		IconsBank4
	]
];
</script>

<style lang="scss" scoped>
@keyframes move-right {
	from {
		transform: translateX(-25%);
	}
	to {
		transform: translateX(50%);
	}
}
@keyframes move-left {
	from {
		transform: translateX(25%);
	}
	to {
		transform: translateX(-50%);
	}
}
.icons {
	display: flex;
	flex-direction: column;
	gap: clamp(15px, 2vw, 30px);
	transform: rotate(-10deg) translateY(-20%);
	position: absolute;
	inset: 0;
	opacity: 0.5;
	@media only screen and (max-width: $bp-lg) {
		transform: rotate(-10deg) translateY(0%);
	}
	&__wrapper {
		background-color: #ffffff1a;
		border-radius: clamp(10px, 1vw, 16px);
	}
	&__icon {
		aspect-ratio: 1;
		width: clamp(70px, 9vw, 200px);
		fill: #fff;
	}
	&__row {
		gap: clamp(14px, 2vw, 20px);
		display: flex;
		animation-iteration-count: infinite;
		animation-direction: alternate;
		animation-timing-function: linear;
		@for $i from 1 through 10 {
			&:nth-child(#{$i}) {
				animation-duration: #{(8s * $i) + 50s};
				@if ($i % 2 == 0) {
					animation-name: move-left;
				} @else {
					animation-name: move-right;
				}
			}
		}
	}
}
</style>
