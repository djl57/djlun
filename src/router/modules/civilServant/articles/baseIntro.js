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
  {
    path: '/intro2',
    name: 'intro2',
    component: () => import('@/components/base'),
    meta: {
      title: '考试技巧',
      type: 'baseIntro'
    },
    redirect: '/intro2/intro2Index',
    children: [
      {
        path: 'intro2Index',
        name: 'intro2Index',
        component: () => import('@/views/civilServant/baseIntro/intro2')
      }
    ]
  },
  {
    path: '/intro3',
    name: 'intro3',
    component: () => import('@/components/base'),
    meta: {
      title: '习近平讲话解读',
      type: 'baseIntro'
    },
    redirect: '/intro3/intro3Index',
    children: [
      {
        path: 'intro3Index',
        name: 'intro3Index',
        component: () => import('@/views/civilServant/baseIntro/intro3')
      }
    ]
  },
  {
    path: '/intro4',
    name: 'intro4',
    component: () => import('@/components/base'),
    meta: {
      title: '国务院公报',
      type: 'baseIntro'
    },
    redirect: '/intro4/intro4Index',
    children: [
      {
        path: 'intro4Index',
        name: 'intro4Index',
        component: () => import('@/views/civilServant/baseIntro/intro4')
      }
    ]
  },
  {
    path: '/intro5',
    name: 'intro5',
    component: () => import('@/components/base'),
    meta: {
      title: '申论的规矩',
      type: 'baseIntro'
    },
    redirect: '/intro5/intro5Index',
    children: [
      {
        path: 'intro5Index',
        name: 'intro5Index',
        component: () => import('@/views/civilServant/baseIntro/intro5')
      }
    ]
  },
]
export {
  baseIntro
}
