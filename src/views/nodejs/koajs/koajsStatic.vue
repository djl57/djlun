<template>
  <article class="app-box">
    <h2>静态资源中间件有什么用？</h2>
    <p>html中引入外部css文件</p>
    <p>在static/static01.js中引入koa-static，在index02.html中引入了css文件</p>

    <h2>怎么用？</h2>
    <p>（1）安装 npm i koa-static --save</p>
    <p>（2）引入 const static = require('koa-static')</p>
    <p>（3）配置中间件 app.use(static('.'))</p>
    <p>静态资源中间件可以配置多个。</p>
  </article>
</template>

<script>
export default {
  name: 'koajsStatic',
  data() {
    return {
      createTime: '2019-03-14 09:24:00'
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
