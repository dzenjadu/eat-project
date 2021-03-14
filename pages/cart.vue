<template>
	<div class="cart-page">
		<div class="container">
			<h2 class="cart-page__title">Корзина</h2>
			<CartList />
		</div>
	</div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "cart",
		computed: {
            ...mapGetters({
                cartList: 'cart/cartList',
            }),
		}
    }
</script>

<style lang="scss">
	.cart-page {
		&__title {
			text-align: center;
		}
	}
</style>