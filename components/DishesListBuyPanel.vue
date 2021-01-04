<template>
	<div class="buy-panel">
		<BaseButton :on-click="addToCart">В корзину</BaseButton>
		<Counter />
	</div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        name: "DishesListBuyPanel",
        props: {
            nameItem: {
                type: String,
                default: () => null,
            },
        },
		computed: {
            ...mapGetters({
                allDishes: 'dishes/allDishes',
                cartList: 'cart/cartList',
            }),
		},
		methods: {
            ...mapMutations({
                setCartList: 'cart/setCartList',
            }),
            addToCart() {
                const findItem = Object.entries(this.allDishes).filter(([item, value]) => item === this.nameItem)

                const itemToCart = Object.fromEntries(findItem)

                if (this.cartList[this.nameItem]) {
                    itemToCart[this.nameItem]['count'] += 1;
				} else {
                    itemToCart[this.nameItem]['count'] = 1;
				}

				this.setCartList(Object.assign(itemToCart, this.cartList))

				console.log('cartList', this.cartList)
			},
		},
    }
</script>

<style lang="scss">
	.buy-panel {

	}
</style>