<template>
  <article>
    <header>
      <h1>transform: matrix()</h1>
    </header>
    <main>
      <section>
        <h2>CSS3 transform 属性</h2>
        先了解一下CSS3 transform 有哪些属性
        <section>
          <h3></h3>
        </section>
      </section>
    </main>
    <footer>
      <h2>摘抄自</h2>
      <p><a href="https://www.cnblogs.com/Ivy-s/p/6786622.html">对CSS3中的transform：Matrix（）矩阵的一些理解</a></p>
      <p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform">MDN transform</a></p>
    </footer>
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
