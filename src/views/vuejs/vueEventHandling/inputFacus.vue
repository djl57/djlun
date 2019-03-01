<template>
  <article class="app-box">
    <h2>js 中</h2>
    <h3>获取焦点：</h3>
    <p><code>id.onBlur = function(){}</code></p>
    <h3>失去焦点：</h3>
    <p><code>id.onFocus = function(){}</code></p>
    <h2>vue 中</h2>
    <h3>获取焦点：</h3>
    <p><code>@focus="focusEvent"</code></p>
    <h3>失去焦点：</h3>
    <p><code>input type="text" @blur.prevent="blurEvent()"</code></p>
    <h2>参考</h2>
    <p><a href="https://blog.csdn.net/zilvzsy/article/details/81029191">input获取焦点和失去焦点</a></p>
    <p><a href="https://segmentfault.com/q/1010000012243312">请教下vue的input获得焦点事件</a></p>
    <p><a href="https://blog.csdn.net/qq_24612793/article/details/81284273">vue input,textarea失去焦点调用函数方法</a></p>
  </article>
</template>

<script>
export default {
  name: 'inputFacus',
  data() {
    return {
      createTime: '2019-03-01 16:29:00'
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
