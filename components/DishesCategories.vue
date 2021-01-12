<template>
	<div class="d-categories">
		<h2 class="d-categories__title">Категории</h2>

		<div class="d-categories__block">
			<div v-for="(category, index) in categories">
				<input v-model="checkedCategories"
					   :id="index"
					   :value="category"
					   type="checkbox"
					   class="d-categories__item"
				>
				<label :for="index" class="d-categories__label">{{ category }}</label>
			</div>
		</div>

		<button @click="setCategories" class="d-categories__btn">показать</button>
		<button v-if="isDishesByCategories" @click="resetResult" class="d-categories__btn">сбросить</button>
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
            if (Object.keys(this.allDishes).length) {
                this.getCategories()
            }
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

<style lang="scss">
	.d-categories {
		&__title {

		}

		&__block {
			border: 1px solid $c-border;
			border-radius: em(6);
			box-shadow: $box-shadow;
		}

		&__item {

		}

		&__label {

		}

		&__btn {

		}
	}
</style>