<template>
	<div class="shop">
		<div class="container">
			<h1 class="shop__title">Интернет магазин готовых блюд правильного питания.</h1>

			<div class="shop__wrapper">
				<div class="shop__sidebar">
					<DishesSearch />
					<DishesCategories />
				</div>

				<div class="shop__main">
					<ShopDishesList />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "shop",
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

<style lang="scss">
	.shop {
		&__title {
			text-align: center;
		}

		&__sidebar {
			width: em(265);
			flex: 0 0 auto;
			margin-right: em(30);
		}

		&__main {
			width: 100%;
		}

		&__wrapper {
			display: flex;
			justify-content: space-between;
		}

		.container {

		}
	}
</style>
