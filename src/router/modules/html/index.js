const re = /\.\/(.*)\.js/
let res = (r => {
  return r.keys().map(key => r(key)[key.match(re)[1]]);
})(require.context('./articles', false, /\.js$/))
let [index, htmlGeneralKnowledge] = res

let route = [
  {
    path: '/html',
    name: 'html',
    component: () => import('@/views/home/firstTitle'),
    meta: {
      title: 'html',
      level: 1
    }
  },
  {
    path: '/htmlIntro',
    name: 'htmlIntro',
    component: () => import('@/views/home/secondTitle'),
    meta: {
      title: '什么是html',
      level: 2,
      type: 'html'
    }
  },
  {
    path: '/htmlGeneralKnowledge',
    name: 'htmlGeneralKnowledge',
    component: () => import('@/views/home/secondTitle'),
    meta: {
      title: 'html小常识',
      level: 2,
      type: 'html'
    }
  },
  ...index,
  ...htmlGeneralKnowledge
]

export {
  route
}
