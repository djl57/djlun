import Vue from 'vue'
import Router from 'vue-router'
import { home } from './modules/home'
import { javascript } from './modules/javascript'
import { css } from './modules/css'
import { html } from './modules/html'
import { vuejs } from './modules/vuejs'
import { vueRouter } from './modules/vueRouter'
import { nodejs } from './modules/nodejs'
import { 
  civilServant,
  AAT,
  application,
  baseIntro,
  intro1 } from './modules/civilServant'
import { 
  puChuang,
  morningRead,
  sixAdvances,
  daxue } from './modules/puChuang'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page',
      component: () => import(/* webpackChunkName: "home" */ '@/views/page/page')
    },
    home,

    javascript,

    css,

    html,

    vuejs,

    vueRouter,

    nodejs,

    civilServant,
    AAT,
    application,
    baseIntro,
    intro1,

    puChuang,
    morningRead,
    sixAdvances,
    daxue
  ]
})
