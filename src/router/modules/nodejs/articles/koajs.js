const koajs = []
const data = [
  { name: 'koajsIntro', title: 'koa安装/es6/promise/async/await/vscode调试node.js' },
  { name: 'koajsRouter', title: 'koa路由' },
  { name: 'koajsmiddleware', title: 'koa中间件' },
  { name: 'koajsejs', title: 'koa ejs 模板引擎' },
  { name: 'koajsPostData', title: 'koa 获取post提交的数据' },
  { name: 'koajsStatic', title: 'koa 静态资源中间件koa-static' },
  { name: 'koajsArtTemplate', title: 'koa art-template模板引擎' },
  { name: 'koajsCookie', title: 'koa 中cookie的使用' },
  { name: 'koajsSession', title: 'koa 中session的使用' },
  { name: 'mongoDBCompassCommunity', title: 'mongoDB Compass community可视化工具的使用' },
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
