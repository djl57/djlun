<template>
  <div class="app-container">
    <h1>基于路由的动态过渡</h1>
    <h2>代码：</h2>
    <pre><code>{{ code }}</code></pre>
    <h2>摘抄</h2>
    <p><a href="https://segmentfault.com/q/1010000009480668?_ea=1944807">vue 监听$route的方式</a></p>
    <p><a href="https://router.vuejs.org/zh/guide/advanced/transitions.html#%E5%8D%95%E4%B8%AA%E8%B7%AF%E7%94%B1%E7%9A%84%E8%BF%87%E6%B8%A1">官方文档说明</a></p>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      code: `<!-- 使用动态的 transition name -->
<transition :name="transitionName">
  <router-view></router-view>
</transition>

// 接着 watch $route 决定使用哪种过渡
watch: {
  '$route' (to, from) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  }
}`
    }
  }
}
</script>
