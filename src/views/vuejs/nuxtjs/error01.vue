<template>
  <article class="app-box">
    <h2>NuxtServerError connect ECONNREFUSED 127.0.0.1:80 错误解决</h2>
    <p>在 asyncData 中调用时使用自带的 $axios 就不报错了，应该是内部已经做过处理了。</p>
  </article>
</template>

<script>
export default {
  name: 'error01',
  data() {
    return {
      createTime: '2019-03-22 11:17:00'
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
