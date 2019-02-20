const cssIntro = [
  {
    path: '/cssBase',
    name: 'cssBase',
    component: () => import('@/components/base'),
    meta: {
      title: 'css 基础',
      type: 'cssIntro'
    },
    redirect: '/cssBase/cssBaseIndex',
    children: [
      {
        path: 'cssBaseIndex',
        name: 'cssBaseIndex',
        component: () => import('@/views/html/htmlBase')
      }
    ]
  }
]

export {
  cssIntro
}
