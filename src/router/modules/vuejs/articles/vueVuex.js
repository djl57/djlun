const vueVuex = [
  {
    path: '/vuexConfig',
    name: 'vuexConfig',
    component: () => import('@/components/base'),
    meta: {
      title: '配置 vuex',
      type: 'vueVuex'
    },
    redirect: '/vuexConfig/vuexConfigIndex',
    children: [
      {
        path: 'vuexConfigIndex',
        name: 'vuexConfigIndex',
        component: () => import('@/views/vuejs/vueVuex/vuexConfig')
      }
    ]
  }
]
export {
  vueVuex
}
