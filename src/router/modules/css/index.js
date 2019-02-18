const route = [
  {
    path: '/css',
    name: 'css',
    component: () => import('@/views/home/firstTitle'),
    meta: {
      title: 'css',
      level: 1
    }
  }
]

export {
  route
}
