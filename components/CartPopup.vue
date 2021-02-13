<template>
	<div class="cart-popup">
		<div @click="hideCartPopup" class="cart-popup__overlay"></div>
		<div class="cart-popup__wrapper">
			<template v-if="!isEmptyCartList">
				<CartPopupList />
				<button @click="handleClickBtn" to="/cart">Купить</button>
			</template>
			<div v-else>Корзина пуста</div>
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
		}

		.cart {
			&__item {
				display: flex;
				align-items: flex-start;
			}

			&__img {
				width: em(110);
			}
		}
	}
</style>