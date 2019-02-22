const unitTestFrameworks = [
  {
    path: '/frameworksOne',
    name: 'frameworksOne',
    component: () => import('@/components/base'),
    meta: {
      title: '框架1',
      type: 'unitTestFrameworks'
    },
    redirect: '/frameworksOne/frameworksOneIndex',
    children: [
      {
        path: 'frameworksOneIndex',
        name: 'frameworksOneIndex',
        component: () => import('@/views/unitTest/frameworksOne')
      }
    ]
  }
]
export {
  unitTestFrameworks
}
