<template>
  <article class="app-box">
    <h2>获取post提交的数据的方式</h2>
    <p>（1）node.js原生</p>
    <p>（2）koa-bodyparser中间件</p>

    <h2>koa-bodyparser中间件的使用</h2>
    <p>post01.js</p>
    <h3>步骤和其他中间件的使用步骤一样</h3>
    <p>（1）安装 npm i koa-bodyparser --save</p>
    <p>（2）引入 let bodyParser = require('koa-bodyparser')</p>
    <p>（3）配置中间件 app.use(bodyParser())</p>
  </article>
</template>

<script>
export default {
  name: 'koajsPostData',
  data() {
    return {
      createTime: '2019-03-14 08:45:00'
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
