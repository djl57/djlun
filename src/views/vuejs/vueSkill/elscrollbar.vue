<template>
  <article class="app-box">
    <h2>不是按需加载element时</h2>
    <pre><code>{{ notanxu }}</code></pre>

    <h2>按需加载element时</h2>
    <p>先加载，再跟上面一样使用</p>
    <pre><code>{{ anxu }}</code></pre>

  </article>
</template>

<script>
export default {
  name: 'elscrollbar',
  data() {
    return {
      createTime: '2019-03-27 13:25:00',
      notanxu: `<el-scrollbar wrap-class="" 
  wrap-style="color: red;" 
  view-style="font-weight: bold;" 
  view-class="view-box" 
  :native="false"
  :vertical="false"[有了这个在横向滚动时会让出原生的竖向滚动条的位置]></el-scrollbar>`,
      anxu: `import { Scrollbar } from 'element-ui';
Vue.use(Scrollbar);`
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
