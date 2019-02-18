const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('../articles', false, /\.json$/)
const articles = requireAll(req)

import router from '@/router'

export default {
  state: {
    firstLevel: [],
    secondLevel: [],
    articleTitle: [],
    curArticle: null,
    curBread: null
  },
  mutations: {
    GET_LIST: state => {
      state.firstLevel = []
      state.secondLevel = []
      state.articleTitle = []
      router.options.routes.forEach(route => {
        const tmp = { ...route }
        if (tmp.meta) {
          // 以 level 分一级标题、二级标题、文章标题
          if (tmp.meta.level === 1) {
            state.firstLevel.push(tmp)
          } else if (tmp.meta.level === 2) {
            state.secondLevel.push(tmp)
          } else {
            state.articleTitle.push(tmp)
          }
        }
      })
    },
    GET_CUR_ARTICLE: (state) => {
      state.curArticle = articles.filter(el => `/${el.name}` === window.location.href.split('#')[1])
    },
    GET_CUR_BREAD: state => {
      state.curBread = state.firstLevel.filter(el => {
        return window.location.href.split('#')[1].split('/')[1] === el.name
      })
      if (state.curBread.length === 0) {
        state.curBread = state.secondLevel.filter(el => {
          return window.location.href.split('#')[1].split('/')[1] === el.name
        })
      }
      if (state.curBread.length === 0) {
        state.curBread = state.articleTitle.filter(el => {
          return window.location.href.split('#')[1].split('/')[1] === el.name
        })
      }
      state.curBread.unshift({path: '/home', meta: { title: '首页' }})
    }
  },
  actions: {
    GetList: ({ commit }) => commit('GET_LIST'),
    GetCurArticle: ({ commit }) => commit('GET_CUR_ARTICLE'),
    GetCurBread: ({ commit }) => commit('GET_CUR_BREAD')
  },
}
