<template>
  <article class="app-box">
    <h2>NuxtServerError connect ECONNREFUSED 127.0.0.1:80 错误解决</h2>
    <p>在 asyncData 中调用时使用自带的 $axios 就不报错了，应该是内部已经做过处理了。</p>
    <h2>Error: EBUSY: resource busy or locked（npm run build 时）</h2>
    <p>大概率dist文件夹正在被使用（某个地方打开了）</p>
    <h2>.nuxt文件夹无法访问</h2>
    <p>暂时无解决方法</p>
    <h2>nuxt 的 asyncData 方法不生效</h2>
    <p>因为是把文件复制粘贴的，把import的东西全部注释后走一遍接口再放出来接口就通了，但是放到import的组件里面又不行了。</p>
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
