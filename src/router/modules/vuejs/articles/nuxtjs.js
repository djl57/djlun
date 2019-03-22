const nuxtjs = []
const data = [
  { name: 'error01', title: 'NuxtServerError connect ECONNREFUSED 127.0.0.1:80' },
  { name: 'nuxtmongo', title: 'nodejs 中使用mongodb的api文档' },
  { name: 'nuxtAxios', title: 'nuxt中使用axios' },
  { name: 'nuxtkoa2', title: '在nuxt中使用koa2' },
  { name: 'nuxtjsBase', title: 'nuxtjs 基础' },
  { name: 'koaPost', title: 'koa post获取不到数据' },
  { name: 'nuxtUseScss', title: 'nuxt引用scss' },
  { name: 'nuxtCss', title: 'nuxt引入通用样式' },
  { name: 'nuxtEslint', title: 'nuxt关闭、开启eslint' },
]
data.forEach(el => {
  nuxtjs.push({
    path: `/${el.name}`,
    name: `${el.name}`,
    component: () => import('@/components/base'),
    meta: {
      title: `${el.title}`,
      type: 'nuxtjs'
    },
    redirect: `/${el.name}/${el.name}Index`,
    children: [
      {
        path: `${el.name}Index`,
        name: `${el.name}Index`,
        component: () => import(`@/views/vuejs/nuxtjs/${el.name}`)
      }
    ]
  })
})
export {
  nuxtjs
}

