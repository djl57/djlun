<template>
  <article class="app-box">
    <h2>js 中</h2>
    <p><code>delete obj.name</code></p>
    <h2>vue 中</h2>
    <p>删除一个：<code>thia.$delete(obj, 'name')</code>（能动态响应，官方说了应该很少用到）</p>
    <p>全部删除：现在用的方法是重新赋值为{}：<code>obj = {}</code></p>
    {{ obj }} 
    <input type="button" value="动态删除name" @click="deletename">
    <input type="button" value="删除name" @click="deletenamejs">
    <h2>摘抄自</h2>
    <p><a href="https://blog.csdn.net/xiasohuai/article/details/80650217">Vue.delete()删除对象的属性</a></p>
  </article>
</template>

<script>
export default {
  name: 'vueDeleteObj',
  data() {
    return {
      createTime: '2019-03-01 15:53:00',
      obj: {
        name: 'djlun'
      }
    }
  },
  components: {
    
  },
  mounted() {
    
  },
  computed: {
    
  },
  methods: {
    deletename() {
      this.$delete(this.obj, 'name')
    },
    deletenamejs() {
      delete this.obj.name
    }
  }
}
</script>

<style scoped lang="scss">

</style>
