import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chartList: []
  },
  mutations: {
    changeList(state, chart) {
      state.chartList.push(chart)
    }
  },
  actions: {
    addChart({ commit }, chart) {
      commit('changeList', chart)
    }
  },
  getters: {
    chartsState(state) {
      return state.chartList
    }
  }
})
