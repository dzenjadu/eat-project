<template>
	<div class="dishes">
		<div v-for="(item, name) in items" :key="name" class="dishes__item">
			<img :src="require(`~/assets/dishes/${name}.jpg`)"
				 :alt="item.title"
				 class="dishes__img"
			>

			<div class="dishes__block">
				<h3 class="dishes__title">{{ item.title }} - {{item.category}}</h3>

				<div class="dishes__row">
					<div class="dishes__cell">кКал: {{item.calories}}</div>
					<div class="dishes__cell">Белки: {{item.proteins}}</div>
					<div class="dishes__cell">Жиры: {{item.fats}}</div>
					<div class="dishes__cell">Углев: {{item.carbo}}</div>
				</div>

				<div class="dishes__row">
					<div class="dishes__price">{{item.priсe}} &#8381;</div>
					<div class="dishes__width">{{item.width}}г.</div>
				</div>
			</div>

			<DishesListBuyPanel v-if="buyPanel" :name-item="name" />
		</div>
	</div>
</template>

<script>
    export default {
        name: "DishesList",
		props: {
            items: {
                type: Object,
                default: () => {},
            },
            buyPanel: {
                type: Boolean,
                default: () => false,
			}
		},
    }
</script>

<style lang="scss">
	.dishes {
		display: flex;
		flex-wrap: wrap;

		&__item {
			width: 31%;

			&:not(:nth-child(3n+3)) {
				margin-right: em(20);
			}
		}

		&__img {
			width: 100%;
		}
	}
</style>