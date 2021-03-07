<template>
	<div class="header-cart">
		<button @click="toggleCartPopup" class="header-cart__btn">
			<img src="~/assets/cart.svg" alt="Cart" class="header-cart__img">
			<div v-if="sum" class="header-cart__sum">
				{{ sum }} &#8381
			</div>
		</button>
		<CartPopup v-if="showCartPopup" :hideCartPopup='hideCartPopup' />
	</div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "HeaderCart",
        data() {
            return {
                showCartPopup: false,
				sum: 0,
            }
        },
		computed: {
            ...mapGetters({
                cartList: 'cart/cartList',
            }),
		},
        watch: {
            cartList() {
                this.getSum()
            },
        },
        mounted() {
            this.getSum()
        },
        methods: {
            toggleCartPopup() {
                this.showCartPopup = !this.showCartPopup
            },
            hideCartPopup() {
                this.showCartPopup = false
            },
			getSum() {
				this.sum = Object.values(this.cartList).reduce((sum, dishData) => sum += dishData.price * dishData.count, 0)
			}
        },
    }
</script>

<style lang="scss">
	.header-cart {
		position: relative;

		&__btn {
			position: relative;
			background-color: #fff;
			z-index: 1;
			border: none;
			display: flex;
			align-items: center;
			padding: em(5);
			cursor: pointer;
			transition: background-color .2s;

			&:hover {
				background-color: #f1f1f1;
			}
		}
		
		&__sum {
			font-size: em(13);
			background-color: #e80000;
			border-radius: em(12);
			white-space: nowrap;
			padding: em(2) em(5);
			color: #fff;
			margin-left: em(10);
		}
	}
</style>