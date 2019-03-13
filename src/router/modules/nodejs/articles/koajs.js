const koajs = []
const data = [
  { name: 'koajsIntro', title: 'koa安装/es6/promise/async/await/vscode调试node.js' },
  { name: 'koajsRouter', title: 'koa路由' },
  { name: 'koajsmiddleware', title: 'koa中间件' },
  { name: 'koajsejs', title: 'koa ejs 模板引擎' },
]
data.forEach(el => {
  koajs.push({
    path: `/${el.name}`,
    name: `${el.name}`,
    component: () => import('@/components/base'),
    meta: {
      title: `${el.title}`,
      type: 'koajs'
    },
    redirect: `/${el.name}/${el.name}Index`,
    children: [
      {
        path: `${el.name}Index`,
        name: `${el.name}Index`,
        component: () => import(`@/views/nodejs/koajs/${el.name}`)
      }
    ]
  })
})
export {
  koajs
}
