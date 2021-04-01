export const state = () => ({
    allDishes: {},
    dishesByCategories: {},
    dishesBySearch: {},
    needResetCheckbox: false,
    lastSearchValue: null,
    currentDish: {},
})

export const mutations = {
    setAllDishes: (state, allDishes) => {
        state.allDishes = allDishes
    },
    setDishesByCategories: (state, dishesByCategories) => {
        state.dishesByCategories = dishesByCategories
    },
    setDishesBySearch: (state, dishesBySearch) => {
        state.dishesBySearch = dishesBySearch
    },
    setNeedResetCheckbox: (state, needResetCheckbox) => {
        state.needResetCheckbox = needResetCheckbox
    },
    setLastSearchValue: (state, lastSearchValue) => {
        state.lastSearchValue = lastSearchValue
    },
    setCurrentDish: (state, currentDish) => {
        state.currentDish = currentDish
    },
}

export const getters = {
    allDishes: (state) => state.allDishes,
    category: (state) => state.category,
    dishesByCategories: (state) => state.dishesByCategories,
    dishesBySearch: (state) => state.dishesBySearch,
    needResetCheckbox: (state) => state.needResetCheckbox,
    lastSearchValue: (state) => state.lastSearchValue,
    currentDish: (state) => state.currentDish,
}

export const actions = {
    async getAllDishes({commit, state}) {
        const dishes = await this.$axios.get('https://dzenjadu3.github.io/data/dishes.json')
            .then(({data}) => {
                commit('setAllDishes', data)
            })
            .catch((error) => {
                console.log('Ошибка получения данных getDishes:', error)
            })
    },
}
