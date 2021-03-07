<template>
	<div :class="theme" class="buy-panel">
		<Counter v-if="showCounter" :dishName="dishName" />
		<button v-else @click="addToCart" class="button">В корзину</button>
	</div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        name: "DishesListBuyPanel",
        props: {
            dishName: {
                type: String,
                default: () => null,
            },
            theme: {
                type: String,
                default: () => '',
            },
        },
		data() {
            return {
                dishInCart: null,
			}
		},
		computed: {
            ...mapGetters({
                allDishes: 'dishes/allDishes',
                cartList: 'cart/cartList',
            }),
            showCounter() {
                return Object.keys(this.cartList).some((item) => item === this.dishName)
            },
		},
		watch: {

		},
		mounted() {

        },
        methods: {
            ...mapMutations({
                setCartList: 'cart/setCartList',
            }),
            addToCart()  {
                const findItem = Object.entries(this.allDishes).filter(([item, value]) => item === this.dishName)
                const itemToCart = Object.fromEntries(findItem)

                if (this.cartList[this.dishName]) {
                    itemToCart[this.dishName]['count'] += 1;
                } else {
                    itemToCart[this.dishName]['count'] = 1;
                }

                this.writeCartToStore(Object.assign(itemToCart, this.cartList))
            },
            writeCartToStore(cartListMerged) {
                this.setCartList(cartListMerged)
                localStorage.setItem('cartList', JSON.stringify(cartListMerged))
            }
		},
    }
</script>

<style lang="scss">
	.buy-panel {
		&.big {
			.counter {
				&__btn,
				&__count {
					height: 30px;
					min-width: 30px;
				}

				&__btn {
					border: 1px solid #d0d0d0;
					border-radius: em(6);
				}
			}
		}
	}
</style>