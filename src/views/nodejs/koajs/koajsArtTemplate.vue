<template>
  <article  >
    <h2>为什么要讲这个模板引擎？</h2>
    <p>（1）速度奇快；</p>
    <p>（2）支持ejs语法，也可以用类似angular的语法</p>

    <h2>怎么用？</h2>
    <p>（1）安装：npm i --save art-template 和 npm i --save koa-art-template</p>
    <p>（2）引入：const render = require('koa-art-template') 和 const path = require('path')</p>
    <p>（3）配置koa-art-template中间件</p>
    <p>（4）await ctx.render('index')</p>

    <h2>类似angular的语法</h2>
    <p><a href="http://aui.github.io/art-template/zh-cn/docs/syntax.html">官方文档</a></p>
    <h3>绑定数据</h3>
    <p> {{ bing }} </p>

    <h3>条件语句</h3>
    <p>{{ ifs }}</p>

    <h3>其他跳过，想了解看官方文档</h3>
  </article>
</template>

<script>
export default {
  name: 'koajsArtTemplate',
  data() {
    return {
      createTime: '2019-03-00 00:00:00',
      bing: `{{ value }}， {{  }}`,
      ifs: `{{if value}} ... {{/if}}
{{if v1}} ... {{else if v2}} ... {{/if}}`
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
