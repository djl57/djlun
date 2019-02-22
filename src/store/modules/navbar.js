const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('../articles', false, /\.json$/)
const articles = requireAll(req)

import router from '@/router'

const routeFilter = (type, routes) => {
  return routes.filter(el => type === el.name)
}

const navbar = {
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
      /* 先判断当前页面是否是article
      如果是，就把路由添加到curBread中，并且去副标题中找当前article的副标题
      如果不是，判断当前页面是否是副标题
      如果是，就把路由添加到curBread中，并且去标题中找当前副标题的标题
      如果不是，判断当前页面是否是标题
      如果是，就把标题添加到curBread中
      如果不是，就是主页 */
      // 关于这里是否需要递归？
      const href = window.location.href.split('#')[1].split('/')[1]
      let res = routeFilter(href, state.articleTitle)
      if (res.length === 0) {
        res = routeFilter(href, state.secondLevel)
        if (res.length === 0) {
          res = routeFilter(href, state.firstLevel)
        } else {
          let [{ meta }] = res
          let firRes = routeFilter(meta.type, state.firstLevel)
          res = [...firRes, ...res]
        }
      } else {
        let [{ meta }] = res
        let secRes = routeFilter(meta.type, state.secondLevel)
        let firRes = routeFilter(secRes[0].meta.type, state.firstLevel)
        res = [...firRes, ...secRes, ...res]
      }
      res.unshift({path: '/home', meta: { title: '首页' }})
      state.curBread = res
    }
  },
  actions: {
    GetList: ({ commit }) => commit('GET_LIST'),
    GetCurArticle: ({ commit }) => commit('GET_CUR_ARTICLE'),
    GetCurBread: ({ commit }) => commit('GET_CUR_BREAD')
  },
}

export default navbar
