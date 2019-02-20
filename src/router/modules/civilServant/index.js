const re = /\.\/(.*)\.js/
let res = (r => {
  return r.keys().map(key => r(key)[key.match(re)[1]]);
})(require.context('./articles', false, /\.js$/))

const route = [
  {
    path: '/civilServant',
    name: 'civilServant',
    component: () => import('@/views/home/firstTitle'),
    meta: {
      title: '公务员',
      level: 1,
    }
  },
  {
    path: '/AAT',
    name: 'AAT',
    component: () => import('@/views/home/secondTitle'),
    meta: {
      title: '行测',
      level: 2,
      type: 'civilServant',
    }
  },
  {
    path: '/application',
    name: 'application',
    component: () => import('@/views/home/secondTitle'),
    meta: {
      title: '申论',
      level: 2,
      type: 'civilServant',
    }
  },
  {
    path: '/baseIntro',
    name: 'baseIntro',
    component: () => import('@/views/home/secondTitle'),
    meta: {
      title: '介绍',
      level: 2,
      type: 'civilServant',
    }
  },
  ...res[0]
]

// export {
//   route
// }