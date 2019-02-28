const govgongbao = [
  {
    path: '/govgongbao1',
    name: 'govgongbao1',
    component: () => import('@/components/base'),
    meta: {
      title: '中共中央 国务院关于支持河北雄安新区全面深化改革和扩大开放的指导意见',
      type: 'govgongbao'
    },
    redirect: '/govgongbao1/govgongbao1Index',
    children: [
      {
        path: 'govgongbao1Index',
        name: 'govgongbao1Index',
        component: () => import('@/views/civilServant/govgongbao/govgongbao1')
      }
    ]
  }
]
export {
  govgongbao
}
