<template>
	<form @submit.prevent="searchItems" class="search">
		<h2 class="search__title">Поиск по блюдам</h2>
		<div class="search__wrapper">
			<input v-model="inputValue"
				   type="text"
				   placeholder="Введите название"
				   class="search__input"
			/>
			<button class="search__btn">
				<img src="~/assets/search.svg" class="search__img">
			</button>
		</div>

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

<style lang="scss">
	.search {
		&__wrapper {
			display: flex;
		}

		&__title {
			margin-top: 0;
		}

		&__input {
			border: 1px solid $c-border;
			border-radius: em(6) 0 0 em(6);
			box-sizing: border-box;
			padding: em(15);
			width: 100%;
		}

		&__btn {
			border: 1px solid $c-border;
			border-radius: 0 em(6) em(6) 0;
			background-color: $c-border;
			width: em(55);
			cursor: pointer;
		}
	}
</style>