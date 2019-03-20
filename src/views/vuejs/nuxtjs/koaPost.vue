<template>
  <article class="app-box">
    <h2>原因：</h2>
    <p>忘记引入 koa-bodyparser</p>
    <pre><code>const bodyParser = require('koa-bodyparser')
app.use(bodyParser())</code></pre>
  </article>
</template>

<script>
export default {
  name: 'koaPost',
  data() {
    return {
      createTime: '2019-03-00 00:00:00'
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
