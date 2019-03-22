const re = /\.\/(.*)\.js/
let res = (r => {
  return r.keys().map(key => r(key)[key.match(re)[1]]);
})(require.context('./articles', false, /\.js$/))
let [jsIntro, jsArray, jsInterview, jsOptimization, txMap, wechatGames] = res

const route = [
  {
    path: '/javascript',
    name: 'javascript',
    component: () => import('@/views/home/firstTitle'),
    meta: {
      title: 'javascript',
      level: 1
    }
  },
  {
    path: '/jsIntro',
    name: 'jsIntro',
    component: () => import('@/views/home/secondTitle'),
    meta: {
      title: '什么是javascript',
      level: 2,
      type: 'javascript'
    }
  },
  {
    path: '/jsArray',
    name: 'jsArray',
    component: () => import('@/views/home/secondTitle'),
    meta: {
      title: '数组',
      level: 2,
      type: 'javascript'
    }
  },
  {
    path: '/jsInterview',
    name: 'jsInterview',
    component: () => import('@/views/home/secondTitle'),
    meta: {
      title: '常见面试题',
      level: 2,
      type: 'javascript'
    }
  },
  {
    path: '/jsOptimization',
    name: 'jsOptimization',
    component: () => import('@/views/home/secondTitle'),
    meta: {
      title: '性能',
      level: 2,
      type: 'javascript'
    }
  },
  {
    path: '/wechatGames',
    name: 'wechatGames',
    component: () => import('@/views/home/secondTitle'),
    meta: {
      title: '微信小游戏',
      level: 2,
      type: 'javascript'
    }
  },
  {
    path: '/txMap',
    name: 'txMap',
    component: () => import('@/views/home/secondTitle'),
    meta: {
      title: '腾讯地图',
      level: 2,
      type: 'javascript'
    }
  },
  ...jsIntro,
  ...jsArray,
  ...jsInterview,
  ...jsOptimization,
  ...txMap,
  ...wechatGames
]

export {
  route
}
