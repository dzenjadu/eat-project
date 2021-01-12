<template>
	<div class="dish-page">
		<div class="container">
			<img v-if="dishName"
				 :src="require(`~/assets/dishes/${dishName}.jpg`)"
				 :alt="dishData.title"
			>
			<div class="dish-page__block">
				<h3 class="dish-page__title">{{ dishData.title }}</h3>

				<div class="dish-page__row">
					<div class="dish-page__cell">кКал: {{dishData.calories}}</div>
					<div class="dish-page__cell">Белки: {{dishData.proteins}}</div>
					<div class="dish-page__cell">Жиры: {{dishData.fats}}</div>
					<div class="dish-page__cell">Углев: {{dishData.carbo}}</div>
				</div>

				<div class="dish-page__row">
					<div class="dish-page__price">{{dishData.priсe}} &#8381;</div>
					<div class="dish-page__width">{{dishData.width}}г.</div>
				</div>

				<p class="dish-page__desc">{{dishData.desc}}</p>
			</div>
		</div>
	</div>
</template>

<script>
    import {mapGetters} from 'vuex'

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

</style>