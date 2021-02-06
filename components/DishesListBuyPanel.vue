<template>
	<div class="buy-panel">
		<Counter v-if="showCounter" :dishName="dishName" />
		<BaseButton v-else :on-click="addToCart">В корзину</BaseButton>
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

	}
</style>