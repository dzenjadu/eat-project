<template>
	<div class="dishes" ref="dishes">
		<div v-for="(item, name) in items" :key="name" class="dishes__item">
			<div class="dishes__wrapper">
<!--				showDishPopup(name, item)-->
				<img @click="openDishPage(item.id)"
					 :src="require(`~/assets/dishes/${name}.jpg`)"
					 :alt="item.title"
					 class="dishes__img"
				>

				<div class="dishes__block">
					<h3 @click="openDishPage(item.id)" class="dishes__title">{{ item.title }}</h3>

					<DishesDetails :dish="item" />

					<div class="dishes__row dishes__row_center">
						<div class="dishes__price">{{ item.price }} &#8381;</div>
						<div class="dishes__width">
							<div class="dishes__name">Порция:</div>
							<div class="dishes__num">{{ item.width }}г.</div>
						</div>
					</div>

					<DishesListBuyPanel v-if="buyPanel" :dish-name="name" :theme="THEME_BIG" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import config from '~/config/index.js'

    export default {
        name: "DishesList",
		props: {
            items: {
                type: Object,
                default: () => {},
            },
            buyPanel: {
                type: Boolean,
                default: () => false,
			}
		},
		data() {
			return {
                THEME_BIG: config.THEME_BIG
			}
		},
		methods: {
            ...mapMutations({
                setCurrentDish: 'dishes/setCurrentDish',
            }),
            openDishPage(id) {
                this.$router.push(`/shop/${id}`)
			},
            showDishPopup(dishName, dishData) {
                import('./DishPopup').then(component => {
                    this.$modal.show(component.default, {
                        dishName: dishName,
						dishData: dishData,
					}, {

                        height: 'auto',
                        classes: 'popup dish__popup',
                    });
                });
			},

		},
    }
</script>

<style lang="scss">
	.dishes {
		display: flex;
		flex-wrap: wrap;
		margin: 0 em(-10);

		&__item {
			width: 33.333%;
			padding: 0 em(10);
			box-sizing: border-box;
			margin-bottom: em(20);

			@media screen and (max-width: 1024px) {
				width: 50%;
			}

			@media screen and (max-width: 540px) {
				width: 100%;
			}
		}

		&__wrapper {
			background-color: $c-white;
			overflow: hidden;
			border-radius: em(6);
			box-shadow: $box-shadow;
		}

		&__block {
			padding: em(10) em(20) em(20);
		}

		&__title {
			margin: 0 0 em(15);
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			color: #2D8D51;
			font-weight: 400;
			font-size: em(16);
			text-decoration: underline;
			cursor: pointer;
		}

		&__img {
			width: 100%;
			cursor: pointer;
		}

		&__row {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			text-align: center;
			margin-bottom: em(20);

			&_center {
				align-items: center;
			}
		}

		&__price {
			font-weight: bold;
			font-size: em(28);
		}

		&__width {
			display: flex;
			align-items: center;

			.dishes__name {
				margin: 0 em(10) 0 0;
			}
		}

		.buy-panel {
			display: flex;
			justify-content: center;
		}

	}
</style>