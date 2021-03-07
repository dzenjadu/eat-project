<template>
	<div class="dishes-details">
		<div class="dishes-details__cell">
			<div class="dishes-details__name">кКал:</div>
			<div class="dishes-details__num">{{ dish.calories }}</div>
		</div>
		<div class="dishes-details__cell">
			<div class="dishes-details__name">Белки:</div>
			<div class="dishes-details__num">{{ dish.proteins }}</div>
		</div>
		<div class="dishes-details__cell">
			<div class="dishes-details__name">Жиры:</div>
			<div class="dishes-details__num">{{ dish.fats }}</div>
		</div>
		<div class="dishes-details__cell">
			<div class="dishes-details__name">Углев:</div>
			<div class="dishes-details__num">{{ dish.carbo }}</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "DishesDetails",
		props: {
            dish: {
                type: Object,
                default: () => {},
			}
		}
    }
</script>

<style lang="scss">
	.dishes-details {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		text-align: center;
		margin-bottom: em(20);

		&__name {
			letter-spacing: em(1);
			font-size: em(12);
			color: #555;
			margin-bottom: em(5);
		}
	}
</style>