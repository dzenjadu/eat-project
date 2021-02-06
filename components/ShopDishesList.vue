<template>
	<div class="shop-dishes">
		<DishesList :items="currentItems" :buy-panel="true"/>
		<button v-if="!loadedAllItems" @click="getCurrentItems">Еще</button>
	</div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'
    import config from '~/config/index.js'

    export default {
        name: "ShopDishesList",
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
                needResetCheckbox: 'dishes/needResetCheckbox',
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
            dishesByCategories(newValue) {
                console.log(222)
                if (Object.keys(newValue).length) {
                    this.resetData(this.dishesBySearch, this.setDishesBySearch)
                }

                this.resetItems()
			},
            dishesBySearch(newValue) {
				if (Object.keys(newValue).length) {
                    console.log(333)
                    this.resetData(this.dishesByCategories, this.setDishesByCategories)
                    this.resetItems()
				}
            }
        },
        mounted() {
            if (Object.keys(this.allDishes).length) {
                this.setDishesBySearch({})
                this.setDishesByCategories({})
                this.getCurrentItems()
            }
        },
        methods: {
            ...mapMutations({
                setDishesByCategories: 'dishes/setDishesByCategories',
                setDishesBySearch: 'dishes/setDishesBySearch',
            }),
			resetItems() {
                this.currentItems = {}
                this.loadedItems = 0
                this.getCurrentItems()
			},
            resetData(obj, func) {
                if (Object.keys(obj).length) {
                    func({})
				}
            },
            getCurrentItems() {
				let items = this.currentItems

                const currentItems = Object.keys(this.dishesList).splice(this.loadedItems, config.LOADING_STEP_ITEMS)
                this.loadedItems += config.LOADING_STEP_ITEMS

                currentItems.forEach((item) => {
                    items = {
                        ...items,
						[item]: this.dishesList[item]
                    }
				})

                this.currentItems = items
            },
		},
    }
</script>

<style lang="scss">

</style>
