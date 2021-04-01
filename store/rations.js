export const state = () => ({
    allRations: {},
})

export const mutations = {
    setAllRations: (state, allRations) => {
        state.allRations = allRations
    },
}

export const getters = {
    allRations: (state) => state.allRations,
}

export const actions = {
    async getAllRations({commit, state}) {
        const rations = await this.$axios.get('https://dzenjadu3.github.io/data/programs.json')
            .then(({data}) => {
                commit('setAllRations', data)
            })
            .catch((error) => {
                console.log('Ошибка получения данных allRations:', error)
            })
    },
}
