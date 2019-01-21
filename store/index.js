export const state = () => ({
    counter: 0,
    count:0
});
export const mutations = {
  increment (state) {
    state.counter++
  }
};
export const actions = {
  incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
};