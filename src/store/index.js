import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
    },
    store: [],
    id: 1,
  },
  mutations: {
    setUser(state, name) {
      state.user.name = name
    },
    addStore(state, item) {
      item.id = state.id
      state.store.push(item)
      state.id++
    },
    editStore(state, item) {
      const index = state.store.findIndex((o) => o.id === item.id)
      state.store.splice(index, 1, item)
    },
    deleteStore(state, item) {
      const index = state.store.findIndex((o) => o.id === item.id)
      state.store.splice(index, 1)
    },
  },
  actions: {},
  modules: {},
})
