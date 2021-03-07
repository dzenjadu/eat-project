<template>
	<div class="cart-popup">
		<div @click="hideCartPopup" class="cart-popup__overlay"></div>
		<div class="cart-popup__wrapper">
			<template v-if="!isEmptyCartList">
				<CartPopupList />
				<button @click="handleClickBtn" to="/cart" class="button">Купить</button>
			</template>
			<div v-else class="cart-popup__empty">Корзина пуста</div>
		</div>
	</div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "CartPopup",
        props: ['hideCartPopup'],
        computed: {
            ...mapGetters({
                cartList: 'cart/cartList',
            }),
            isEmptyCartList() {
                return !Object.keys(this.cartList).length
            },
        },
        methods: {
            handleClickBtn() {
                this.hideCartPopup()
                this.$router.push('/cart/')
			},

		}
    }
</script>

<style lang="scss">
	.cart-popup {
		position: absolute;
		right: 0;

		&__empty {
			white-space: nowrap;
			font-size: em(14);
		}

		&__overlay {
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background-color: rgba(0,0,0,.2);
		}

		&__wrapper {
			background: #fff;
			position: relative;
			padding: em(20);
			border-radius: em(6) 0 em(6) em(6);
		}

		.button {
			width: 100%;
		}

		.cart {
			&__remove {
				position: absolute;
				top: 0;
				right: 0;
				background: none;
				border: none;
				cursor: pointer;
			}

			&__list {
				overflow-y: auto;
				max-height: em(345);

				&::-webkit-scrollbar {
					width: 3px;
				}

				&::-webkit-scrollbar-track {
					background: #f1f1f1;
				}

				&::-webkit-scrollbar-thumb {
					background: #c7c7c7;
				}

				&::-webkit-scrollbar-thumb:hover {
					background: #b7b7b7;
				}
			}

			&__item {
				position: relative;
				display: flex;
				align-items: flex-start;
				width: em(310);
				padding: em(10) 0;
				border-bottom: 1px solid #eaeaea;

				@media screen and (max-width: 390px) {
					font-size: 12.5px;
				}
			}

			&__img {
				width: em(110);
			}

			&__info {
				margin-left: em(20);
			}

			&__title {
				font-size: em(16);
				margin: 0 0 em(10);
			}

			&__price {
				font-size: em(14);
				margin-bottom: em(10);
			}

			&__total {
				text-align: center;
				padding: em(10) 0;
			}
		}
	}
</style>