<template>
	<div class="counter">
		<button @click="subCount">-</button>
		<div>{{ dishCount }}</div>
		<button @click="addCount">+</button>
	</div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        name: "Counter",
        props: {
            dishName: {
                type: String,
                default: () => null,
            },
        },
		data() {
            return {
                count: 1,
			}
		},
        computed: {
            ...mapGetters({
                cartList: 'cart/cartList',
            }),
			dishCount() {
                return this.cartList[this.dishName].count
			}
        },
		methods: {
            ...mapMutations({
                setCartList: 'cart/setCartList',
            }),
            addCount() {
                let cartList = {...this.cartList}
                cartList[this.dishName].count += 1

				this.setCartList(cartList)
                localStorage.setItem('cartList', JSON.stringify(cartList))

			},
            subCount() {
                let cartList = {...this.cartList}

                if (cartList[this.dishName].count > 1) {
                    cartList[this.dishName].count -= 1
                } else {
                    delete cartList[this.dishName] 
				}

                this.setCartList(cartList)
                localStorage.setItem('cartList', JSON.stringify(cartList))
			},
		}
    }
</script>

<style>

</style>