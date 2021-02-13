<template>
	<div class="dish-popup">
		<div @click="$emit('close')" class="dish-popup__close">Закрыть</div>

		<div class="dish-popup__wrapper">
			<img :src="require(`~/assets/dishes/${dishName}.jpg`)"
				 :alt="dishData.title"
			>
			<div class="dish-popup__block">
				<h3 class="dishes__title">{{ dishData.title }}</h3>

				<div class="dishes__row">
					<div class="dishes__cell">кКал: {{dishData.calories}}</div>
					<div class="dishes__cell">Белки: {{dishData.proteins}}</div>
					<div class="dishes__cell">Жиры: {{dishData.fats}}</div>
					<div class="dishes__cell">Углев: {{dishData.carbo}}</div>
				</div>

				<div class="dishes__row">
					<div class="dishes__price">{{dishData.price}} &#8381;</div>
					<div class="dishes__width">{{dishData.width}}г.</div>
				</div>

				<p class="dishes__desc">{{dishData.desc}}</p>

				<DishesListBuyPanel :dish-name="dishName" />
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "DishPopup",
		props: {
            dishName: {
                type: String,
				default: () => null,
			},
            dishData: {
                type: Object,
				default: () => {},
			},
		},
    }
</script>

<style lang="scss">
	.dish-popup {

	}
</style>