import Vue from 'vue'
import Router from 'vue-router'
import { home } from './modules/home'
// import { javascript } from './modules/javascript'
// import { css } from './modules/css'
// import { html } from './modules/html'
// import { vuejs } from './modules/vuejs'
// import { nodejs } from './modules/nodejs'
import { civilServant, AAT, application, baseIntro, intro1 } from './modules/civilServant'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page',
      component: () => import(/* webpackChunkName: "home" */ '@/views/page/page')
    },
    home,

    // javascript,

    // css,

    // html,

    // vuejs,

    // nodejs,

    civilServant,
    AAT,
    application,
    baseIntro,
    intro1
  ]
})
