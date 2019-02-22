<template>
  <article class="app-container">
    <header>
      <h1>同一页面，路由数据更改不刷新。</h1>
    </header>
    <main>
      <section>
        <h2>bug 说明</h2>
        <p>当前路由组件跳转不刷新。</p>
      </section>
      <section>
        <h2>bug 重现</h2>
        <p>比如点击下方导航栏，路由改变，但是内容不变。</p>
      </section>
      <section>
        <h2>当前使用解决方案</h2>
        <pre><code>{{ code }}</code></pre>
        <h2>其他方案</h2>
        <p><a href="https://blog.csdn.net/weixin_40054326/article/details/79384433">当前vue路由组件重新加载</a></p>
        <p><a href="https://blog.csdn.net/mnhn456/article/details/78758789">vue 刷新当前路由</a></p>
      </section>
    </main>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: '',
  data() {
    return {
      code: `  <router-view :key="key"/>
  computed: {
    key() {
      return this.$route.fullPath
    }
  }`
    }
  },
  components: {
    
  },
  mounted() {
    this.getList()
  },
  computed: {
    ...mapGetters([
      'firstLevel',
      'secondLevel',
      'articleTitle'
    ])
  },
  methods: {
    getList() {
      this.$store.dispatch('GetList')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
