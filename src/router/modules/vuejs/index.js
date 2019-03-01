const re = /\.\/(.*)\.js/
let res = (r => {
  return r.keys().map(key => r(key)[key.match(re)[1]]);
})(require.context('./articles', false, /\.js$/))
let [vueRouter, vueSkill, vueSourse, vueVuex, readProject, nuxtjs] = res

const route = [
  {
    path: '/vuejs',
    name: 'vuejs',
    component: () => import('@/views/home/firstTitle'),
    meta: {
      title: 'vue.js',
      level: 1
    }
  },
]
const datas = [
  { name: 'vueSkill', title: 'vue小技巧' },
  { name: 'vueRouter', title: 'vue-router' },
  { name: 'vueSourse', title: 'vue源码' },
  { name: 'vueVuex', title: 'vuex' },
  { name: 'readProject', title: '看项目' },
  { name: 'nuxtjs', title: 'Nuxt.js' },
  { name: 'operateObj', title: '操作对象' },
  { name: 'vueEventHandling', title: 'vue 事件处理' },
]
datas.forEach(el => {
  route.push({
    path: `/${el.name}`,
    name: el.name,
    component: () => import('@/views/home/secondTitle'),
    meta: {
      title: el.title,
      level: 2,
      type: 'vuejs'
    }
  })
})
route.push(...vueSkill)
route.push(...vueRouter)
route.push(...vueSourse)
route.push(...vueVuex)
route.push(...readProject)
route.push(...nuxtjs)

export {
  route
}
