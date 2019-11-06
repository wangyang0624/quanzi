import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{}
  },
  mutations: {
    getuser(state,lodpay){
      state.user=lodpay
    }
  },
  actions: {
  },
  modules: {
  }
})
