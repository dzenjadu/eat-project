<template>
	<div class="dish-page">
		<div class="container">
			<div class="dish-page__dish">
				<img v-if="dishName"
					 :src="require(`~/assets/dishes/${dishName}.jpg`)"
					 :alt="dishData.title"
					 class="dish-page__img"
				>
				<div class="dish-page__block">
					<h3 class="dish-page__title">{{ dishData.title }}</h3>

					<div class="dish-page__row">
						<div class="dish-page__price">{{dishData.price}} &#8381;</div>
						<DishesListBuyPanel :dish-name="dishName" :theme="THEME_BIG" />
					</div>

					<DishesDetails :dish="dishData" />

					<h4 class="dish-page__subtitle">Состав:</h4>
					<div class="dish-page__width">{{dishData.width}}г.</div>
					<p class="dish-page__desc">{{dishData.desc}}</p>
				</div>
			</div>

<!--			сделать похожие товары-->
<!--			<DishesList :items="currentItems" :buy-panel="true"/>-->
		</div>
	</div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import config from '~/config/index.js'

    export default {
        name: "DishPage",
		props: {
            dishId: {
                type: String,
				default: () => null
			}
        },
		data() {
            return {
                dishData: {},
				dishName: null,
                THEME_BIG: config.THEME_BIG,
                currentItems: {},
			}
		},
		computed: {
            ...mapGetters({
                allDishes: 'dishes/allDishes',
            }),
		},
		watch: {
            allDishes() {
                this.getCurrentDish()
			},
		},
		mounted() {
            if (Object.keys(this.allDishes).length) {
                this.getCurrentDish()
            }
        },
        methods: {
            getCurrentDish() {
                const [currentDish] = Object.entries(this.allDishes).filter(([item, value]) => value.id == this.dishId)
				this.dishName = currentDish[0];
				this.dishData = currentDish[1];
			}
		}
    }
</script>

<style lang="scss">
	.dish-page {
		margin-top: em(40);

		&__dish {
			display: flex;
			align-items: flex-start;

			@media screen and (max-width: 800px) {
				display: block;
			}
		}

		&__img {
			margin-right: em(30);

			@media screen and (max-width: 800px) {
				width: 100%;
			}
		}

		&__row {
			display: flex;
			align-items: center;
			margin-bottom: em(20);
		}

		&__title {
			font-size: em(26);
			margin-top: 0;
			font-weight: 400;

			@media screen and (max-width: 800px) {
				margin-top: em(10);
			}
		}

		&__subtitle {
			margin: em(20) 0 em(10);
		}

		&__price {
			font-weight: bold;
			font-size: em(36);
			color: #000;
			margin-right: em(10);
		}

		.dishes-details {
			justify-content: flex-start;

			&__cell {
				margin-right: em(15);
			}

			&__name {
				font-size: 14px;
			}
		}
	}
</style>