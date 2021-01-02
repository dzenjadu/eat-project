<template>
	<div class="sidebar">
		<h2>Категории</h2>
		<div v-for="(category, index) in categories">
			<input type="checkbox" :id="index" :value="category" v-model="checkedCategories">
			<label :for="index">{{ category }}</label>
		</div>

		<button @click="setCategories">показать</button>
		<button v-if="isDishesByCategories" @click="resetResult">сбросить</button>
	</div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        name: "DishesCategories",
		data() {
            return {
                categories: {},
                checkedCategories: [],
			}
		},
		computed: {
            ...mapGetters({
                allDishes: 'dishes/allDishes',
                needResetCheckbox: 'dishes/needResetCheckbox',
                dishesByCategories: 'dishes/dishesByCategories',
			}),
			isDishesByCategories() {
                return Object.keys(this.dishesByCategories).length
			},
		},
		watch: {
            allDishes() {
				this.getCategories()
            },
            needResetCheckbox(newValue) {
                if (newValue) {
                    if (this.checkedCategories) {
                        this.checkedCategories = []
                        this.setNeedResetCheckbox(false)
                    }
				}
			},
            dishesByCategories() {

            },
		},
		mounted() {

        },
        methods: {
            ...mapMutations({
                setDishesByCategories: 'dishes/setDishesByCategories',
                setNeedResetCheckbox: 'dishes/setNeedResetCheckbox',
                setLastSearchValue: 'dishes/setLastSearchValue',
            }),
            getCategories() {
                let categories = new Set()

                Object.values(this.allDishes).forEach((value) => {
                    categories.add(value.category)
				})

                this.categories = [...categories]
			},
			setCategories() {
                const dishesList = Object.entries(this.allDishes).filter(([item, value]) => this.checkedCategories.includes(value.category))
				this.writeResultToStore(Object.fromEntries(dishesList))
			},
            writeResultToStore(dishesList) {
                this.setDishesByCategories(dishesList)
                this.setLastSearchValue(null)
            },
			resetResult() {
                this.checkedCategories = []
                this.writeResultToStore({})
			},
		},
    }
</script>

<!--<style scoped>-->

<!--</style>-->