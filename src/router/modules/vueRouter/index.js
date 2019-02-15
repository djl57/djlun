const vueRouter = {
  path: '/vueRouter',
  name: 'vueRouter',
  component: () => import('@/views/home/firstTitle'),
  meta: {
    title: '路由',
    level: 1
  }
}
// const morningRead = {
//   path: '/morningRead',
//   name: 'morningRead',
//   component: () => import('@/views/home/secondTitle'),
//   meta: {
//     title: '早读',
//     level: 2,
//     type: 'vueRouter'
//   }
// }

export {
  vueRouter,
}
