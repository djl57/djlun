<template>
  <article class="app-box">
    <h2>什么是session？</h2>
    <p>和cookie一样，可以让我们用同一个浏览器访问同一个域名的时候共享数据</p>
    <p>保存在服务器端，相对于cookie更安全。</p>

    <h2>怎么用？</h2>
    <p>（1）安装 npm install koa-session --save</p>
    <p>（2）引入</p>
    <p>（3）配置</p>
    <p>（4）使用 设置：ctx.session.key = value，获取：ctx.session.key</p>
  </article>
</template>

<script>
export default {
  name: 'koajsSession',
  data() {
    return {
      createTime: '2019-03-14 16:23:00'
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
