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
                let dishData = {...this.cartList[this.dishName]}
                dishData.count += 1;

				const newDishData = {...this.cartList, [this.dishName]: {...dishData}}

				this.setCartList(newDishData)
                localStorage.setItem('cartList', JSON.stringify(newDishData))

			},
            subCount() {
                let dishData = {...this.cartList[this.dishName]}
                let newDishData = {}

                if (dishData.count > 1) {
                    dishData.count -= 1
                    newDishData = {...this.cartList, [this.dishName]: {...dishData}}
                } else {
                    let cartList = {...this.cartList}
                    delete cartList[this.dishName]
                    newDishData = {...cartList}
				}

                this.setCartList(newDishData)
                localStorage.setItem('cartList', JSON.stringify(newDishData))
			},
		}
    }
</script>

<style>

</style>