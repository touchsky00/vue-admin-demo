import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{}
  },
  mutations: {
    refleshUserInfo(state,playload) {
      state.userInfo = playload
    }
  },
  actions: {
  },
  modules: {
  }
})
