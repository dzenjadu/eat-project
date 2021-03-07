<template>
	<div class="counter">
		<button @click="subCount" class="counter__btn">-</button>
		<div class="counter__count">{{ dishCount }}</div>
		<button @click="addCount" class="counter__btn">+</button>
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

<style lang="scss">
	.counter {
		display: flex;
		align-items: center;

		&__btn,
		&__count {
			display: flex;
			justify-content: center;
			align-items: center;
			box-sizing: border-box;
			height: 20px;
			min-width: 20px;
		}

		&__btn {
			background: none;
			border: 1px solid #d0d0d0;
			cursor: pointer;
			border-radius: em(4);
		}

		&__count {
			font-size: em(14);
		}
	}
</style>