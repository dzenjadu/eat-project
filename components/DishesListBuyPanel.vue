<template>
	<div class="buy-panel">
		<BaseButton :on-click="handleClickCartBtn">В корзину</BaseButton>
		<Counter v-if="showCounter" :dishName="dishName" />
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
        },
		data() {
            return {
                dishInCart: null,
                showCounter: false,
			}
		},
		computed: {
            ...mapGetters({
                allDishes: 'dishes/allDishes',
                cartList: 'cart/cartList',
            }),
		},
		watch: {
            cartList() {
                this.setShowCounter()
			}
		},
		mounted() {
            if (Object.keys(this.cartList).length) {
                this.setShowCounter()
            }
        },
        methods: {
            ...mapMutations({
                setCartList: 'cart/setCartList',
            }),
			setShowCounter() {
                Object.entries(this.cartList).forEach(([item, value]) => {

				})
			},
			handleClickCartBtn() {
                this.addToCart()
			},
            addToCart() {
                const findItem = Object.entries(this.allDishes).filter(([item, value]) => item === this.dishName)
                const itemToCart = Object.fromEntries(findItem)

                if (this.cartList[this.dishName]) {
                    itemToCart[this.dishName]['count'] += 1;
				} else {
                    itemToCart[this.dishName]['count'] = 1;
				}

                const cartListMerged = Object.assign(itemToCart, this.cartList)

				this.setCartList(cartListMerged)
                localStorage.setItem('cartList', JSON.stringify(cartListMerged));

				console.log('cartList', this.cartList)
			},

		},
    }
</script>

<style lang="scss">
	.buy-panel {

	}
</style>