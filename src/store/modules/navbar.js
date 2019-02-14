import router from '@/router'

export default {
  state: {
    firstLevel: [],
    secondLevel: [],
    articleTitle: []
  },
  mutations: {
    GET_LIST: state => {
      state.firstLevel = []
      state.secondLevel = []
      state.articleTitle = []
      router.options.routes.forEach(route => {
        const tmp = { ...route }
        if (tmp.meta) {
          if (tmp.meta.level === 1) {
            state.firstLevel.push(tmp)
          } else if (tmp.meta.level === 2) {
            state.secondLevel.push(tmp)
          } else {
            state.articleTitle.push(tmp)
          }
        }
      })
    }
  },
  actions: {
    GetList: ({ commit }) => commit('GET_LIST'),
  },
}
