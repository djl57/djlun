const cssOptimization = [
  {
    path: '/Optimization',
    name: 'Optimization',
    component: () => import('@/components/base'),
    meta: {
      title: '对什么的优化',
      type: 'cssOptimization'
    },
    redirect: '/Optimization/OptimizationIndex',
    children: [
      {
        path: 'OptimizationIndex',
        name: 'OptimizationIndex',
        component: () => import('@/views/html/htmlBase')
      }
    ]
  }
]

export {
  cssOptimization
}
