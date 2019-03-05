<template>
  <article>
    <header>
      <h1>看 豆瓣电影服务端渲染 项目代码</h1>
    </header>
    <main>
      <section>
        <h2>目的</h2>
        <p>学习 vue 的 SSR</p>
      </section>
      <section>
        <h2>摘抄</h2>
        <p><a href="https://github.com/muwoo/doubanMovie-SSR">项目源码</a></p>
        <p><a href="https://segmentfault.com/a/1190000008795113">实例PK(Vue服务端渲染 VS Vue浏览器端渲染)</a></p>
      </section>
      <section>
        <h2>看代码记录</h2>
        <ol>
          <li>新建一个 vue2.0 项目：learn-ssr。</li>
          <li>看 doubanMovie-SSR 项目结构，发现这个项目的结构和 新建的项目结构差别还是很大的。</li>
          <li>doubanMovie-SSR 项目所用技术栈：</li>
        </ol>
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
