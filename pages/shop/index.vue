<template>
	<div class="shop">
		<div class="container">
			<h1 class="shop__title">Интернет магазин</h1>

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
    export default {
        name: "shop",
    }
</script>

<style lang="scss">
	.shop {
		&__title {
			text-align: center;
			margin-bottom: em(20);
		}

		&__sidebar {
			width: em(265);
			flex: 0 0 auto;
			margin: 0 em(30) em(30) 0;

			@media screen and (max-width: 880px) {
				width: 100%;
			}
		}

		&__main {
			width: 100%;
		}

		&__wrapper {
			position: relative;
			display: flex;
			justify-content: space-between;

			@media screen and (max-width: 880px) {
				display: block;
			}
		}

		.container {

		}
	}
</style>
