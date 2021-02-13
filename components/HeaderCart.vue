<template>
	<div class="header-cart">
		<button @click="toggleCartPopup" class="header-cart__btn">cart</button>
		<CartPopup v-if="showCartPopup" :hideCartPopup='hideCartPopup' />
	</div>
</template>

<script>
    export default {
        name: "HeaderCart",
        data() {
            return {
                showCartPopup: false,
            }
        },
        methods: {
            toggleCartPopup() {
                this.showCartPopup = !this.showCartPopup
            },
            hideCartPopup() {
                this.showCartPopup = false
            },
        },
    }
</script>

<style lang="scss">
	.header-cart {
		position: relative;
	}
</style>