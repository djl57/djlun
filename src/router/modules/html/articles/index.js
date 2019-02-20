const index = [
  {
    path: '/htmlBase',
    name: 'htmlBase',
    component: () => import('@/components/base'),
    meta: {
      title: 'html 基础',
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
    component: () => import('@/components/base'),
    meta: {
      title: 'html 基础标签',
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
  },
  {
    path: '/htmlFormTags',
    name: 'htmlFormTags',
    component: () => import('@/components/base'),
    meta: {
      title: 'html 表单标签和表格标签',
      type: 'htmlIntro'
    },
    redirect: '/htmlFormTags/htmlFormTagsIndex',
    children: [
      {
        path: 'htmlFormTagsIndex',
        name: 'htmlFormTagsIndex',
        component: () => import('@/views/html/htmlFormTags')
      }
      // {
      //   path: ':tagName',
      //   component: () => import('@/views/html/tags')
      // }
    ]
  },
  {
    path: '/htmlSemantization',
    name: 'htmlSemantization',
    component: () => import('@/components/base'),
    meta: {
      title: 'html 语义化',
      type: 'htmlIntro'
    },
    redirect: '/htmlSemantization/htmlSemantizationIndex',
    children: [
      {
        path: 'htmlSemantizationIndex',
        name: 'htmlSemantizationIndex',
        component: () => import('@/views/html/htmlSemantization')
      }
    ]
  }
]

export {
  index
}
