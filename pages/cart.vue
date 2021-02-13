<template>
	<div class="cart">
		<CartList />
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

<style>

</style>