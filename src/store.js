import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state, count) {
      state.count = state.count + count
    },
    reduce (state, count) {
      state.count = state.count - count
    }
  },
  getters: {
    count (state) {
      return state.count + 100
    }
  },
  actions: {
    addAction ({commit}) {
      commit('increment', 10)
    },
    reduceAction ({commit}) {
      commit('reduce', 10)
    }
  }
})
export default store
