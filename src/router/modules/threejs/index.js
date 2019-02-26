const re = /\.\/(.*)\.js/
let res = (r => {
  return r.keys().map(key => r(key)[key.match(re)[1]]);
})(require.context('./articles', false, /\.js$/))
let [threejsIntro] = res

const route = [
  {
    path: '/threejs',
    name: 'threejs',
    component: () => import('@/views/home/firstTitle'),
    meta: {
      title: 'three.js',
      level: 1
    }
  },
  {
    path: '/threejsIntro',
    name: 'threejsIntro',
    component: () => import('@/views/home/secondTitle'),
    meta: {
      title: '什么是three.js',
      level: 2,
      type: 'threejs'
    }
  },
  ...threejsIntro,
]

export {
  route
}
