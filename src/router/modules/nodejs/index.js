const re = /\.\/(.*)\.js/
let res = (r => {
  return r.keys().map(key => r(key)[key.match(re)[1]]);
})(require.context('./articles', false, /\.js$/))
let [koajs] = res

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
  ...koajs
]

export {
  route
}
