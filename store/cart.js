export const state = () => ({
    cartList: {},
})

export const mutations = {
    setCartList: (state, cartList) => {
        state.cartList = cartList
    },
}

export const getters = {
    cartList: (state) => state.cartList,
}

export const actions = {
    async getAllDishes({commit, state}) {
        const dishes = await this.$axios.get('https://dzenjadu.github.io/data/dishes.json')
            .then(({data}) => {
                commit('setAllDishes', data)
            })
            .catch((error) => {
                console.log('Ошибка получения данных getDishes:', error)
            })
    },
}
