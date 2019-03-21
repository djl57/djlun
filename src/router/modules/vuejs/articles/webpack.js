const webpack = []
const data = [
  { name: 'webpackStart', title: 'webpack入门' },
  { name: 'webpackModules', title: 'webpack模块总结' },
]
data.forEach(el => {
  webpack.push({
    path: `/${el.name}`,
    name: `${el.name}`,
    component: () => import('@/components/base'),
    meta: {
      title: `${el.title}`,
      type: 'webpack'
    },
    redirect: `/${el.name}/${el.name}Index`,
    children: [
      {
        path: `${el.name}Index`,
        name: `${el.name}Index`,
        component: () => import(`@/views/vuejs/webpack/${el.name}`)
      }
    ]
  })
})
export {
  webpack
}

