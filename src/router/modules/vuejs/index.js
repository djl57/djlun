const route = [
  {
    path: '/vuejs',
    name: 'vuejs',
    component: () => import('@/views/home/firstTitle'),
    meta: {
      title: 'vue.js',
      level: 1
    }
  }
]

export {
  route
}
