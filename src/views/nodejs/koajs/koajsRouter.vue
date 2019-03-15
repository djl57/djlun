<template>
  <article  >
    <h2>路由的概念</h2>
    <p>路由（routing）是由一个URI（路径）和一个特定的HTTP方法（GET、POST等）组成的，涉及到应用如何响应客户端对某个
      网站节点的访问（通俗地说，就是根据不同的URL地址，加载不同的页面实现不同的功能）。
    </p>

    <h2>koa-router模块</h2>
    <h3>安装</h3>
    <p>npm i koa-router --save</p>
    <h3>使用</h3>
    <p>可以在npm上搜索koa-router，有example。在我的learn-koa2的app.js项目中也写了一遍。</p>
    <p>（1）引入koa-router模块：const Router = require('koa-router')</p>
    <p>（2）实例化koa-router：const router = new Router()</p>
    <p>1 2可合并，引入并实例化路由： const router require('koa-router')()</p>
    <p>（3）配置路由</p>
    <pre><code>{{ koaRouter }}</code></pre>
    <p>（4）启动路由</p>
    <pre><code>{{ useRouter }}</code></pre>

    <h2>get传值和获取get传值</h2>
    <p>应用场景：新闻列表页面跳转到新闻详情的时候，传递一个新闻id</p>
    <p>在learn-koa2的router02.js中</p>

    <h2>动态路由的设置和获取</h2>
    <p>/routername/:id，然后不同的id就显示不同的内容</p>
    <p>代码在learn-koa2的router03.js中</p>
  </article>
</template>

<script>
export default {
  name: 'koajsRouter',
  data() {
    return {
      createTime: '2019-03-13 13:46:00',
      koaRouter: `router.get('/', async ctx => { // '/'表示首页，ctx表示上下文context，包含了request和response等信息
  ctx.body = '首页' // 返回数据
}).get('/news', async ctx => {
  ctx.body = '这是一个新闻页面'
})`,
      useRouter: `app
  .use(router.routes()) // 启动路由
  .use(router.allowedMethods()) // 可配置可不配置，建议配置`
    }
  },
  components: {
    
  },
  mounted() {
    
  },
  computed: {
    
  },
  methods: {
    
  }
}
</script>

<style scoped lang="scss">

</style>
