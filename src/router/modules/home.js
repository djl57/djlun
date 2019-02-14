const home = {
  path: '/home',
  name: 'home',
  component: () => import('@/views/home/home'),
  meta: {
    title: '首页',
    level: 1
  }
}

export {
  home
}