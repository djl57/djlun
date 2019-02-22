const re = /\.\/(.*)\.js/
let res = (r => {
  return r.keys().map(key => r(key)[key.match(re)[1]]);
})(require.context('./articles', false, /\.js$/))
let [vueRouter, vueSkill, vueSourse, vueVuex, readProject, nuxtjs] = res

const route = [
  {
    path: '/vuejs',
    name: 'vuejs',
    component: () => import('@/views/home/firstTitle'),
    meta: {
      title: 'vue.js',
      level: 1
    }
  },
  {
    path: '/vueSkill',
    name: 'vueSkill',
    component: () => import('@/views/home/secondTitle'),
    meta: {
      title: 'vue小技巧',
      level: 2,
      type: 'vuejs'
    }
  },
  {
    path: '/vueRouter',
    name: 'vueRouter',
    component: () => import('@/views/home/secondTitle'),
    meta: {
      title: 'vue-router',
      level: 2,
      type: 'vuejs'
    }
  },
  {
    path: '/vueSourse',
    name: 'vueSourse',
    component: () => import('@/views/home/secondTitle'),
    meta: {
      title: 'vue源码',
      level: 2,
      type: 'vuejs'
    }
  },
  {
    path: '/vueVuex',
    name: 'vueVuex',
    component: () => import('@/views/home/secondTitle'),
    meta: {
      title: 'vuex',
      level: 2,
      type: 'vuejs'
    }
  },
  {
    path: '/readProject',
    name: 'readProject',
    component: () => import('@/views/home/secondTitle'),
    meta: {
      title: '看项目',
      level: 2,
      type: 'vuejs'
    }
  },
  {
    path: '/nuxtjs',
    name: 'nuxtjs',
    component: () => import('@/views/home/secondTitle'),
    meta: {
      title: 'Nuxt.js',
      level: 2,
      type: 'vuejs'
    }
  },
  ...vueSkill,
  ...vueRouter,
  ...vueSourse,
  ...vueVuex,
  ...readProject,
  ...nuxtjs
]

export {
  route
}
