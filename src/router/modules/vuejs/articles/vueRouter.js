const vueRouter = [
  {
    path: '/selfRouterRefresh',
    name: 'selfRouterRefresh',
    component: () => import('@/components/base'),
    meta: {
      title: 'vue同一路由跳转不刷新',
      type: 'vueRouter'
    },
    redirect: '/selfRouterRefresh/selfRouterRefreshIndex',
    children: [
      {
        path: 'selfRouterRefreshIndex',
        name: 'selfRouterRefreshIndex',
        component: () => import('@/views/vuejs/vueRouter/selfRouterRefresh')
      }
    ]
  },
  {
    path: '/routeTransition',
    name: 'routeTransition',
    component: () => import('@/components/base'),
    meta: {
      title: '路由的动态过渡',
      type: 'vueRouter'
    },
    redirect: '/routeTransition/routeTransitionIndex',
    children: [
      {
        path: 'routeTransitionIndex',
        name: 'routeTransitionIndex',
        component: () => import('@/views/vuejs/vueRouter/routeTransition')
      }
    ]
  },
]
export {
  vueRouter
}
