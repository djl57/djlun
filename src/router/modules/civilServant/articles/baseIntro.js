const baseIntro = [
  {
    path: '/intro1',
    name: 'intro1',
    component: () => import('@/components/base'),
    meta: {
      title: '考试范围',
      type: 'baseIntro'
    },
    redirect: '/intro1/intro1Index',
    children: [
      {
        path: 'intro1Index',
        name: 'intro1Index',
        component: () => import('@/views/civilServant/baseIntro/intro1')
      }
    ]
  },
]
export {
  baseIntro
}
