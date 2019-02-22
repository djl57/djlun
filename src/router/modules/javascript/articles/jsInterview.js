const jsInterview = [
  {
    path: '/jsCopy',
    name: 'jsCopy',
    component: () => import('@/components/base'),
    meta: {
      title: '克隆',
      type: 'jsInterview'
    },
    redirect: '/jsCopy/jsCopyIndex',
    children: [
      {
        path: 'jsCopyIndex',
        name: 'jsCopyIndex',
        component: () => import('@/views/javascript/jsInterview/jsCopy')
      }
    ]
  }
]
export {
  jsInterview
}
