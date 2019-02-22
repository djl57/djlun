const vueSourse = [
  {
    path: '/vueSourse1',
    name: 'vueSourse1',
    component: () => import('@/components/base'),
    meta: {
      title: 'vue源码 一',
      type: 'vueSourse'
    },
    redirect: '/vueSourse1/vueSourse1Index',
    children: [
      {
        path: 'vueSourse1Index',
        name: 'vueSourse1Index',
        component: () => import('@/views/vuejs/vueSourse/vueSourse1')
      }
    ]
  }
]
export {
  vueSourse
}
