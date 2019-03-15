<template>
  <article  >
    <h2>按键修饰符</h2>
    <p>@keyup.enter="submit" 当按键enter时submit</p>
    <p>@keyup.13 回车</p>
    <p>@keyup.enter 回车</p>
    <p>@keyup.left 左键</p>
    <p>@keyup.right 右键</p>
    <p>@keyup.up 上键</p>
    <p>@keyup.down 下键</p>
    <p>@keyup.delete 删除键</p>
  </article>
</template>

<script>
export default {
  name: 'vueWatchKey',
  data() {
    return {
      createTime: '2019-03-14 13:51:00'
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
