<template>
	<div class="dishes">
		<div v-for="(item, name) in currentItems" :key="name" class="dishes__item">
			<img :src="require(`~/assets/dishes/${name}.jpg`)" :alt="item.title" class="dishes__img">

			<div class="dishes__block">
				<h3 class="dishes__title">{{ item.title }} - {{item.category}}</h3>

				<div class="dishes__row">
					<div class="dishes__cell">кКал: {{item.calories}}</div>
					<div class="dishes__cell">Белки: {{item.proteins}}</div>
					<div class="dishes__cell">Жиры: {{item.fats}}</div>
					<div class="dishes__cell">Углев: {{item.carbo}}</div>
				</div>

				<div class="dishes__row">
					<div class="dishes__price">{{item.priсe}} &#8381;</div>
					<div class="dishes__width">{{item.width}}г.</div>
				</div>
			</div>
		</div>

		<button v-if="!loadedAllItems" @click="getCurrentItems">Еще</button>
	</div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'

	const LOADING_STEP_ITEMS = 9

    export default {
        name: "DishesList",
		data() {
            return {
				loadedItems: 0,
                currentItems: {},
				loading: true,
			}
		},
        computed: {
            ...mapGetters({
                allDishes: 'dishes/allDishes',
                dishesByCategories: 'dishes/dishesByCategories',
                dishesBySearch: 'dishes/dishesBySearch',
            }),
            loadedAllItems() {
                return Object.keys(this.dishesList).length === Object.keys(this.currentItems).length
			},
            dishesList() {
                if (Object.keys(this.dishesBySearch).length) {
                    return this.dishesBySearch
                }

                if (Object.keys(this.dishesByCategories).length) {
                    return this.dishesByCategories
				}

                return this.allDishes
			},
        },
        watch: {
            allDishes() {
                console.log(111)
                this.getCurrentItems()
			},
            dishesByCategories() {
                console.log(222)
                this.resetItems(this.dishesBySearch, this.setDishesBySearch)
			},
            dishesBySearch(newValue) {
				if (Object.keys(newValue).length) {
                    console.log(333)
                    this.resetItems(this.dishesByCategories, this.setDishesByCategories)
				}
            }
        },
		mounted() {

        },
        methods: {
            ...mapMutations({
                setDishesByCategories: 'dishes/setDishesByCategories',
                setDishesBySearch: 'dishes/setDishesBySearch',
            }),
			resetItems(getter, mutation) {
                if (Object.keys(getter).length) {
                    console.log('reset')
                    mutation({})
                }
                this.currentItems = {}
                this.loadedItems = 0
                this.getCurrentItems()
			},
            getCurrentItems() {
				let items = this.currentItems

                const currentItems = Object.keys(this.dishesList).splice(this.loadedItems, LOADING_STEP_ITEMS)
                this.loadedItems += LOADING_STEP_ITEMS

                currentItems.forEach((item) => {
                    items = {...items, [item]: this.dishesList[item]}
				})

                this.currentItems = items
            },
		},
    }
</script>

<!--<style scoped>-->

<!--</style>-->
