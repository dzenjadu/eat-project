<template>
	<main class="main">
		<Header/>
		<Nuxt/>
	</main>
</template>

<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                cartList: 'cart/cartList',
            }),
		},
        created() {
            this.getAllDishes()

			if (localStorage.getItem('cartList')) {
			    this.setCartList(JSON.parse(localStorage.getItem('cartList')))
			}
        },
        methods: {
            ...mapActions({
                getAllDishes: 'dishes/getAllDishes',
            }),
            ...mapMutations({
                setCartList: 'cart/setCartList',
            }),
        }
    }
</script>

<style lang="scss">
	.main {
		padding-top: em(60);
	}
</style>
