import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 来自 https://github.com/wuchangming/blog/blob/master/docs/webpack/require-context-usage.md
// 新建模块只需要在modules中新建一个文件夹，文件夹下有一个index.js文件
let res = (r => {
  return r.keys().map(key => r(key));
})(require.context('./', true, /^\.\/modules\/((?!\/)[\s\S])+\/index\.js$/))

let routes = [{
  path: '/',
  name: 'page',
  component: () => import(/* webpackChunkName: "home" */ '@/views/page/page')
},
{
  path: '/home',
  name: 'home',
  component: () => import('@/views/home/home'),
  meta: {
    title: '首页',
    level: 1
  }
}]

res.forEach(el => {
  el.route ? el.route.forEach(route => {
    routes.push(route)
  }) : null
})

const router = new Router({
  routes: routes
})

export default router
