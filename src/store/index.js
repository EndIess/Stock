import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
    },
  },
  mutations: {
    setUser(state, name) {
      state.user.name = name
    },
  },
  actions: {},
  modules: {},
})
