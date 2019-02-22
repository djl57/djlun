const jsOptimization = [
  {
    path: '/optimizationTestTool',
    name: 'optimizationTestTool',
    component: () => import('@/components/base'),
    meta: {
      title: '性能测试工具',
      type: 'jsOptimization'
    },
    redirect: '/optimizationTestTool/optimizationTestToolIndex',
    children: [
      {
        path: 'optimizationTestToolIndex',
        name: 'optimizationTestToolIndex',
        component: () => import('@/views/javascript/jsOptimization/optimizationTestTool')
      }
    ]
  }
]
export {
  jsOptimization
}
