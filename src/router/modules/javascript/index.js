const re = /\.\/(.*)\.js/
let res = (r => {
  return r.keys().map(key => r(key)[key.match(re)[1]]);
})(require.context('./articles', false, /\.js$/))
let [jsArray, jsInterview] = res

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
  ...jsArray,
  ...jsInterview
]

export {
  route
}
