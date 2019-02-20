const re = /\.\/(.*)\.js/
let res = (r => {
  return r.keys().map(key => r(key)[key.match(re)[1]]);
})(require.context('./articles', false, /\.js$/))
let [cssIntro, cssOptimization, cssStyles] = res

const route = [
  {
    path: '/css',
    name: 'css',
    component: () => import('@/views/home/firstTitle'),
    meta: {
      title: 'css',
      level: 1
    }
  },
  {
    path: '/cssIntro',
    name: 'cssIntro',
    component: () => import('@/views/home/secondTitle'),
    meta: {
      title: '什么是css',
      level: 2,
      type: 'css'
    }
  },
  {
    path: '/cssStyles',
    name: 'cssStyles',
    component: () => import('@/views/home/secondTitle'),
    meta: {
      title: 'css样式',
      level: 2,
      type: 'css'
    }
  },
  {
    path: '/cssOptimization',
    name: 'cssOptimization',
    component: () => import('@/views/home/secondTitle'),
    meta: {
      title: 'css优化',
      level: 2,
      type: 'css'
    }
  },
  ...cssIntro,
  ...cssOptimization,
  ...cssStyles
]

export {
  route
}
