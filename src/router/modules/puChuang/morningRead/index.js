const sixAdvances = {
  path: '/sixAdvances',
  name: 'sixAdvances',
  component: () => import('@/views/puChuang/morningBooks'),
  meta: {
    title: '六项精进大纲',
    type: 'morningRead'
  }
}

const daxue = {
  path: '/daxue',
  name: 'daxue',
  component: () => import('@/views/puChuang/morningBooks'),
  meta: {
    title: '大学开篇',
    type: 'morningRead'
  }
}

export {
  sixAdvances,
  daxue
}
