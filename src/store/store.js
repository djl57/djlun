import Vue from 'vue'
import Vuex from 'vuex'
import navbar from './modules/navbar'
import tags from './modules/tags'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    navbar,
    tags
  },
  getters
})
