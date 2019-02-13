import Vue from 'vue'
import Router from 'vue-router'
import { civilServant } from './modules/civilServant'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home/home')
    },
    civilServant
  ]
})
