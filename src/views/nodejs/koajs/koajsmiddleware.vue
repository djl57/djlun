<template>
  <article class="app-box">
    <h2>什么是koa的中间件</h2>
    <p>中间件就是匹配路由之前或匹配路由完成做的一系列操作。在express里面是一个函数。</p>

    <h2>中间件功能</h2>
    <p>（1）执行任何代码</p>
    <p>（2）修改请求和响应对象</p>
    <p>（3）终结请求-响应循环</p>
    <p>（4）调用堆栈中的下一个中间件</p>
    <p>也是通过next来实现</p>

    <h2>应用级中间件</h2>
    <p>middle01.js</p>
    <p>应用场景：在匹配路由前打印当前日期。在登录后判断是否有权限可以访问后台页面。</p>

    <h2>路由级中间件</h2>
    <p>middle02.js</p>

    <h2>错误处理中间件</h2>
    <p>middle03.js</p>
    <p>应用场景：404页面</p>
    <h3>中间件执行顺序：洋葱图【从外向内，从内向外】（和express不同）</h3>

    <h2>第三方中间件</h2>
    <p>（1）使用模板引擎ejs时引入了第三方中间件koa-views【ejs01.js】；</p>
    <p>（2）post 提交数据时引入了第三方中间件koa-bodyparser【post01.js】</p>
    <p>（3）koa的静态资源中间件koa-static</p>
  </article>
</template>

<script>
export default {
  name: 'koajsmiddleware',
  data() {
    return {
      createTime: '2019-03-13 14:45:00'
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
