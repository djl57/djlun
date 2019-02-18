const index = [
  {
    path: '/htmlBase',
    name: 'htmlBase',
    component: () => import('@/views/html/base'),
    meta: {
      title: 'html基础',
      type: 'htmlIntro'
    },
    redirect: '/htmlBase/htmlBaseIndex',
    children: [
      {
        path: 'htmlBaseIndex',
        name: 'htmlBaseIndex',
        component: () => import('@/views/html/htmlBase')
      }
    ]
  },
  {
    path: '/htmlTags',
    name: 'htmlTags',
    component: () => import('@/views/html/base'),
    meta: {
      title: 'html标签大全',
      type: 'htmlIntro'
    },
    redirect: '/htmlTags/htmlTagsIndex',
    children: [
      {
        path: 'htmlTagsIndex',
        name: 'htmlTagsIndex',
        component: () => import('@/views/html/htmlTags')
      },
      {
        path: ':tagName',
        component: () => import('@/views/html/tags')
      }
    ]
  }
]

export {
  index
}
