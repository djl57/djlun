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
  },
  {
    path: '/projectTwo',
    name: 'projectTwo',
    component: () => import('@/components/base'),
    meta: {
      title: 'SSR博客网站',
      type: 'readProject'
    },
    redirect: '/projectTwo/projectTwoIndex',
    children: [
      {
        path: 'projectTwoIndex',
        name: 'projectTwoIndex',
        component: () => import('@/views/vuejs/readProject/projectTwo')
      },
    ]
  },
]
export {
  readProject
}
