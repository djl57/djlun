const morningRead = [
  {
    path: '/sixAdvances',
    name: 'sixAdvances',
    component: () => import('@/views/puChuang/morningBooks'),
    meta: {
      title: '六项精进大纲',
      type: 'morningRead'
    }
  },
  {
    path: '/daxue',
    name: 'daxue',
    component: () => import('@/views/puChuang/morningBooks'),
    meta: {
      title: '大学开篇',
      type: 'morningRead'
    }
  },
  {
    path: '/SevenPrinciplesOfAccounting',
    name: 'SevenPrinciplesOfAccounting',
    component: () => import('@/views/puChuang/morningBooks'),
    meta: {
      title: '会计七原则',
      type: 'morningRead'
    }
  },
  {
    path: '/twelveOperations',
    name: 'twelveOperations',
    component: () => import('@/views/puChuang/morningBooks'),
    meta: {
      title: '经营十二条',
      type: 'morningRead'
    }
  },
  {
    path: '/analectsLearning',
    name: 'analectsLearning',
    component: () => import('@/views/puChuang/morningBooks'),
    meta: {
      title: '论语·学而',
      type: 'morningRead'
    }
  }
]

export {
  morningRead
}
