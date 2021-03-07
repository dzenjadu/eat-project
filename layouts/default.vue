<template>
	<main class="main">
		<Header/>
		<div class="content">
			<Nuxt/>
		</div>
		<Footer/>
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
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.content {
		flex: 1 0 auto;
	}
</style>
