<template>
	<div class="dishes dishes-slider" ref="dishes">
		<h3 class="dishes-slider__title">Блюда категории "{{ category }}":</h3>

		<swiper ref="swiper" :options="swiperOptions">
			<swiper-slide v-for="(item, name) in items" :key="name" class="dishes__item">
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
			</swiper-slide>

		</swiper>
		<div class="swiper__navigation">
			<div class="swiper__prev" slot="button-prev" @click="prev()">&lt;</div>
			<div class="swiper__next" slot="button-next" @click="next()">&gt;</div>
		</div>
	</div>
</template>

<script>
    import DishesList from "~/mixins/DishesList"
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/swiper.scss'

    export default {
        name: "DishesList",
        mixins: [
            DishesList,
        ],
        components: {
            Swiper,
            SwiperSlide
        },
        directives: {
            swiper: directive
        },
        props: {
            category: {
                type: String,
                default: () => '',
            },
        },
		data() {
          	return {
                swiperOptions: {
                    navigation: {
                        nextEl: '.swiper__next',
                        prevEl: '.swiper__prev',
                    },
                    slidesPerView: 1,
                    breakpoints: {
                        680: {
                            slidesPerView: 2,
                        },
                        950: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                    }
                }
			}
		},
        methods: {
            prev() {
                this.$refs.swiper.$swiper.slidePrev();
            },
            next() {
                this.$refs.swiper.$swiper.slideNext();
            }
        },
    }
</script>

<style lang="scss">
	@import "~/styles/dish-list";

	.dishes-slider {
		position: relative;
		margin: em(30) 0 0;
		border-top: 1px solid $c-border;

		&__title {
			font-weight: 400;
			text-align: center;
			width: 100%;
		}

		.dishes {
			&-details {
				font-size: 12px;
			}

			&__wrapper {
				font-size: 13px;
			}
		}

		.swiper {
			&-container {
				width: 100%;
				margin: 0 em(40);
				box-sizing: border-box;

				@media screen and (max-width: 420px) {
					display: block;
					margin: 0;
				}
			}

			&__next,
			&__prev {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				z-index: 1;
				width: em(30);
				height: em(30);
				border-radius: 50%;
				background: #44C374;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #fff;
				font-size: em(20);
				cursor: pointer;
			}

			&__next {
				right: 0;
			}

			&__prev {
				left: 0;
			}
		}
	}

</style>