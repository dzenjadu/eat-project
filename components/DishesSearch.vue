<template>
	<form @submit.prevent="searchItems" class="search">
		<h2>Поиск по блюдам</h2>
		<input v-model="inputValue"
			   type="text"
			   placeholder="Введите название"
			   class="search__input"
		/>
		<button class="search__btn">Найти</button>
		<div v-if="errorMessage" class="search__message message-error">{{ errorMessage }}</div>
	</form>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        name: "DishesSearch",
		data() {
            return {
                inputValue: null,
				errorMessage: null,
			}
		},
		computed: {
            ...mapGetters({
                allDishes: 'dishes/allDishes',
                lastSearchValue: 'dishes/lastSearchValue',
            }),
		},
		mounted() {
            if (this.lastSearchValue) {
                this.setLastSearchValue(null)
            }
        },
        methods: {
            ...mapMutations({
                setDishesBySearch: 'dishes/setDishesBySearch',
                setNeedResetCheckbox: 'dishes/setNeedResetCheckbox',
                setLastSearchValue: 'dishes/setLastSearchValue',
            }),
            searchItems() {
                if (this.lastSearchValue === this.inputValue) {
                    return
				}

                this.errorMessage = null
                this.setLastSearchValue(this.inputValue)

                const items = Object.entries(this.allDishes).filter(([item, value]) => {
                    return value.title.toLowerCase().includes(this.inputValue.toLowerCase())
				})

				if (items.length) {
                    this.writeResultToStore(Object.fromEntries(items))
				} else {
				    this.errorMessage = 'По данному запросу ничего не найдено.';
				}

			},
			writeResultToStore(items) {
                this.setDishesBySearch(items)
                this.setNeedResetCheckbox(true)
			},
		},
    }
</script>

<!--<style scoped>-->

<!--</style>-->