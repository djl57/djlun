const jsIntro = [
  {
    path: '/jsDataType',
    name: 'jsDataType',
    component: () => import('@/components/base'),
    meta: {
      title: 'js 数据类型',
      type: 'jsIntro'
    },
    redirect: '/jsDataType/jsDataTypeIndex',
    children: [
      {
        path: 'jsDataTypeIndex',
        name: 'jsDataTypeIndex',
        component: () => import('@/views/javascript/jsIntro/jsDataType')
      }
    ]
  }
]
export {
  jsIntro
}
