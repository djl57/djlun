const readProject = [
  {
    path: '/projectOne',
    name: 'projectOne',
    component: () => import('@/components/base'),
    meta: {
      title: '豆瓣电影服务端渲染',
      type: 'readProject'
    },
    redirect: '/projectOne/projectOneIndex',
    children: [
      {
        path: 'projectOneIndex',
        name: 'projectOneIndex',
        component: () => import('@/views/vuejs/readProject/projectOne')
      },
    ]
  }
]
export {
  readProject
}
