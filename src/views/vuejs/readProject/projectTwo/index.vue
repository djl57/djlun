<template>
  <article>
    <header>
      <h1>看 Vue.js + Nuxt.js + Es6+Webpack + Mysql + Noyde.js + Express.js构建的SSR博客网站</h1>
    </header>
    <main>
      <ol>
        <li>项目结构比较</li>
        <div class="flex">
          <div></div>
          <div></div>
        </div>
      </ol>
    </main>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: '',
  data() {
    return {
      createTime: '2019-02-25 14:24:00'
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
