<template>
	<div class="categories">
		<h2 class="categories__title">Категории</h2>

		<div class="categories__block">
			<div v-for="(category, index) in categories" class="categories__item">
				<input v-model="checkedCategories"
					   :id="index"
					   :value="category"
					   type="checkbox"
					   class="categories__checkbox"
				>
				<label :for="index" class="categories__label">{{ category }}</label>
			</div>
		</div>

		<button v-if="showBtn" @click="setCategories" class="categories__btn button">Показать</button>
		<button v-if="isDishesByCategories" @click="resetResult" class="categories__btn button button_red">Сбросить</button>
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
				showBtn: false
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
            checkedCategories() {
                if (this.checkedCategories.length) {
                    this.showBtn = true
				}
			},
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
                this.showBtn = false
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
	.categories {
		$self: &;

		&__title {

		}

		&__block {
			position: relative;
			border: 1px solid $c-border;
			border-radius: em(6);
			box-shadow: $box-shadow;
			padding: em(20);
		}

		&__item {
			&:not(:last-child) {
				margin-bottom: em(8);
			}
		}

		&__checkbox {
			position: absolute;
			z-index: -1;
			opacity: 0;

			& + #{$self}__label {
				position: relative;
				display: inline-flex;
				align-items: center;
				user-select: none;

				&::before {
					content: '';
					width: em(12);
					height: em(12);
					border: 1px solid #adb5bd;
					border-radius: em(3);
					margin-right: em(10);
				}
			}

			&:checked + #{$self}__label {
				&::after {
					content: '';
					position: absolute;
					top: 50%;
					left: em(2);
					transform: translateY(-50%);
					width: em(10);
					height: em(10);
					border-radius: em(3);
					background-color: $c-green;
				}

			}
		}

		&__label {
			cursor: pointer;
		}

		&__btn {
			margin-top: em(20);
		}
	}
</style>