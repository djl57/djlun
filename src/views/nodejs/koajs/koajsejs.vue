<template>
  <article  >
    <h2>koa中如何使用ejs模板引擎</h2>
    <p>（1）安装koa-views：npm i --save koa-views</p>
    <p>（2）安装ejs：npm i ejs --save</p>
    <p>（3）引入koa-view【var views = require('koa-views')】，
      并配置第三方中间件【app.use(views(__dirname（视图位置）, { extension: 'ejs' }))】</p>
    <p>（4）让koa来应用ejs模板引擎，然后就可以使用ejs来渲染数据。【await ctx.render('index')】</p>

    <h2>ejs绑定数据</h2>
    <p>await ctx.render('index', { title })，再在html中使用&lt;%=title%>来渲染数据</p>

    <h2>ejs绑定带html的数据</h2>
    <p>&lt;%-title%></p>

    <h2>ejs循环数据</h2>
    <pre><code>{{ ejsFor }}</code></pre>

    <h2>ejs if 语句</h2>
    <pre><code>{{ ejsif }}</code></pre>

    <h2>ejs引入外部文件（html文件等）</h2>
    <pre><code>{{ ejsOther }}</code></pre>

    <h2>需要在每一个路由的render里面都要渲染一个公共的数据</h2>
    <p>比如用户信息要传到每一个路由里面</p>
    <p>公共的数据可以放在ctx.state = { 公共数据 }【这个代码放在中间件里边】里面，这样的话再模板的任何地方都可以使用</p>
    <pre><code>{{ ejspub }}</code></pre>

    <h2>问题（报错）</h2>
    <p>（1）ctx.render is not a function</p>
    <p>解决方案：<a href="https://blog.csdn.net/wopelo/article/details/79986481">https://blog.csdn.net/wopelo/article/details/79986481</a></p>
  </article>
</template>

<script>
export default {
  name: 'koajsejs',
  data() {
    return {
      createTime: '2019-03-13 15:36:00',
      ejsFor: `<%for(var i=0;i<list.length;i++){%>
  <li><%=list[i]%></li>
<%}%>`,
      ejsif: `<%if(num>10){%>
  <p>传过来的num大于10，为<%=num%></p>
<%}else{%>
  <p>传过来的num不大于10，为<%=num%></p>
<%}%>`,
      ejsOther: `<%include public/header.html%>`,
      ejspub: `app.use(async (ctx, next) => {
  ctx.state = {
    username: '张三',
    age: '18'
  }
  await next()
})`
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
