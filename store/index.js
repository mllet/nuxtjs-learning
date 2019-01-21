export const state = () => ({
    counter: 0,
    count: 0,
    message: '数据双向绑定'
});
export const mutations = {
    increment(state) {
        state.counter++
    },
    message(state, message) {
        state.message = message
    }
};
export const actions = {
    incrementAsync({commit}) {
        setTimeout(() => {
            commit('increment')
        }, 1000)
    },
};