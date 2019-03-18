const re = /\.\/(.*)\.js/
let res = (r => {
  return r.keys().map(key => r(key)[key.match(re)[1]]);
})(require.context('./articles', false, /\.js$/))
let [koajs, mongodb] = res

const route = [
  {
    path: '/nodejs',
    name: 'nodejs',
    component: () => import('@/views/home/firstTitle'),
    meta: {
      title: 'node.js',
      level: 1
    }
  },
  {
    path: '/koajs',
    name: 'koajs',
    component: () => import('@/views/home/secondTitle'),
    meta: {
      title: 'koa',
      level: 2,
      type: 'nodejs'
    }
  },
  {
    path: '/mongodb',
    name: 'mongodb',
    component: () => import('@/views/home/secondTitle'),
    meta: {
      title: 'mongodb',
      level: 2,
      type: 'nodejs'
    }
  },
  ...koajs,
  ...mongodb
]

export {
  route
}
