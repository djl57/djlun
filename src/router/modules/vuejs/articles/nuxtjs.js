const nuxtjs = [
  {
    path: '/nuxtjsBase',
    name: 'nuxtjsBase',
    component: () => import('@/components/base'),
    meta: {
      title: 'nuxtjs 基础',
      type: 'nuxtjs'
    },
    redirect: '/nuxtjsBase/nuxtjsBaseIndex',
    children: [
      {
        path: 'nuxtjsBaseIndex',
        name: 'nuxtjsBaseIndex',
        component: () => import('@/views/vuejs/nuxtjs/nuxtjsBase')
      }
    ]
  }
]
export {
  nuxtjs
}
