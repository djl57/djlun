import Vue from 'vue'
import Vuex from 'vuex'
import navbar from './modules/navbar'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    navbar
  },
  getters
})
