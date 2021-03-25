<template>
	<div class="cart__wrapper cart-page">
		<div class="cart__list">
			<div v-for="(dishData, dishName) in cartList" class="cart__item">
				<div class="cart__row cart__row_first">
					<img v-if="dishName"
						 :src="require(`~/assets/dishes/${dishName}.jpg`)"
						 :alt="dishData.title"
						 class="cart__img"
					>
					<div class="cart__title">{{ dishData.title }}</div>
				</div>
				<div class="cart__row cart__row_calories">
					<div class="cart__calories">{{ dishData.calories * dishData.count }} кКал</div>
				</div>
				<div class="cart__row">
					<Counter :dishName="dishName" />
				</div>
				<div class="cart__row cart__row_last">
					<div class="cart__price">{{ dishData.price * dishData.count }} &#8381</div>
					<button @click="removeDish(dishName)" class="cart__remove">
						<img src="~/assets/remove.svg" class="cart__image">
					</button>
				</div>
			</div>
		</div>

		<div class="total">
			<div class="total__row">Сумма: {{ this.total }} &#8381</div>
			<div class="total__row">Калории: {{ this.calories }} кКал</div>
		</div>
	</div>
</template>

<script>
	import CartList from "~/mixins/CartList"

    export default {
        name: "CartList",
		mixins: [
            CartList,
		]
    }
</script>

<style lang="scss">
	.cart-page {
		.cart {
			&__list {
				@media screen and (max-width: 750px) {
					font-size: 14px;
				}
			}

			&__remove {
				border: none;
				background: none;
				cursor: pointer;
			}

			&__item {
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1px solid #ebebeb;
				padding: em(20) 0;

				&:first-child {
					border-top: 1px solid #ebebeb;
				}
			}

			&__row {
				width: em(125);

				&_first {
					display: flex;
					align-items: center;
					flex: 1 1 auto;
					padding-right: em(20);

					@media screen and (max-width: 750px) {
						padding-right: 0;
					}
				}

				&_last {
					display: flex;
					align-items: center;
					justify-content: space-between;
				}

				&_calories {
					@media screen and (max-width: 750px) {
						display: none;
					}
				}
			}

			&__img {
				width: em(110);
				margin-right: em(20);
			}

			&__info {

			}

			&__title {
				@media screen and (max-width: 750px) {
					display: none;
				}
			}

			&__price {

			}

			&__calories {

			}
		}

		.total {
			text-align: right;
			margin: em(20) 0;

			&__row {
				margin: em(8) 0;
			}
		}
	}
</style>