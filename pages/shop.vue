<template>
	<div class="shop">
		<h1 class="shop__title">Интернет магазин готовых блюд правильного питания.</h1>

		<div class="shop__sidebar">
			<DishesSearch />
			<DishesCategories />
		</div>

		<div class="shop__main">
			<DishesList />
		</div>
	</div>
</template>

<script>
    import {mapActions} from 'vuex'
    import DishesSearch from '~/components/DishesSearch'
    import DishesCategories from '~/components/DishesCategories'
    import DishesList from '~/components/DishesList'

    export default {
        name: "shop",
        components: {
            DishesSearch,
            DishesCategories,
            DishesList,
		},
        created() {
            this.getAllDishes()
        },
        methods: {
            ...mapActions({
                getAllDishes: 'dishes/getAllDishes'
            })
        }
    }
</script>

<style>

</style>
