<template>
	<div class="cart__wrapper">
		<div class="cart__list">
			<div v-for="(dishData, dishName) in cartList" class="cart__item">
				<img v-if="dishName"
					 :src="require(`~/assets/dishes/${dishName}.jpg`)"
					 :alt="dishData.title"
					 class="cart__img"
				>
				<div class="cart__info">
					<button @click="removeDish(dishName)">x</button>
					<h3 class="cart__title">{{ dishData.title }}</h3>
					<div class="cart__price">{{ dishData.price * dishData.count }}  руб.</div>
					<Counter :dishName="dishName" />
				</div>
			</div>
		</div>

		<div class="cart__total">
			<div>Сумма: {{ this.total }} руб.</div>
		</div>
	</div>
</template>

<script>
	import CartList from "~/mixins/CartList";

    export default {
        name: "CartList",
		mixins: [
            CartList,
		]
    }
</script>