const route = [
  {
    path: '/javascript',
    name: 'javascript',
    component: () => import('@/views/home/firstTitle'),
    meta: {
      title: 'javascript',
      level: 1
    }
  }
]

export {
  route
}
