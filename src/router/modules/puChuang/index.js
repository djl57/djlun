let route = [
  {
    path: '/puChuang',
    name: 'puChuang',
    component: () => import('@/views/home/firstTitle'),
    meta: {
      title: '谱创',
      level: 1
    }
  },
  {
    path: '/morningRead',
    name: 'morningRead',
    component: () => import('@/views/home/secondTitle'),
    meta: {
      title: '晨读',
      level: 2,
      type: 'puChuang'
    }
  },
  {
    path: '/books',
    name: 'books',
    component: () => import('@/views/home/secondTitle'),
    meta: {
      title: '书籍',
      level: 2,
      type: 'puChuang'
    }
  }
]

const re = /\.\/(.*)\.js/
let res = (r => {
  return r.keys().map(key => r(key)[key.match(re)[1]]);
})(require.context('./articles', false, /\.js$/))
route = [...route, ...res[0]]

export {
  route
}
