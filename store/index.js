export const state = () => ({
    counter: 0,
})

export const mutations = {
    increment (state, count) {
        state.count += count
    }
}

export const getters = {
    counter: (state) => state.counter,
}

export const actions = {
    increment(context, count = 1) {
        context.commit('increment', count)
    },
}
