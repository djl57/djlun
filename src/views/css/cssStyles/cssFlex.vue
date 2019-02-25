<template>
  <article class="app-container">
    <header>
      <h1>css Flex 详解</h1>
    </header>
    <main>
      <section>
        <h2>了解</h2>
        <p>Flex是Flexible Box的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。</p>
      </section>
      <section>
        <h2>使用</h2>
        <section>
          <h3>任何一个容器都可以指定为 Flex 布局。</h3>
          <pre><code>.box{
  display: flex;
}</code></pre>
          <h3>行内元素也可以使用 Flex 布局。</h3>
          <pre><code>.box{
  display: inline-flex;
}</code></pre>
          <h3>属性</h3>
          <section>
            <div class="bold">代码</div>
            <pre><code>.box {
  flex-direction: row（默认） 
                | row-reverse 
                | column 
                | column-reverse;
}</code></pre>
            <p>决定主轴的方向（即项目的排列方向）</p>
            <p>从左往右 | 从右往左 | 从上到下 | 从下到上</p>
            <div class="bold">示例 flex-direction: column;</div>
            <ul class="flex-direction">
              <li v-for="item in directions" :key="item">{{ item }}</li>
            </ul>
          </section>
          <section>
            <div class="bold">代码</div>
            <pre><code>.box {
  flex-direction: row（默认） 
                | row-reverse 
                | column 
                | column-reverse;
}</code></pre>
            <p>决定主轴的方向（即项目的排列方向）</p>
            <p>从左往右 | 从右往左 | 从上到下 | 从下到上</p>
            <div class="bold">示例 flex-direction: column;</div>
            <ul class="flex-direction">
              <li v-for="item in directions" :key="item">{{ item }}</li>
            </ul>
          </section>
        </section>
      </section>
    </main>
    <footer>
      <h2>参考</h2>
      <p><a href="http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool">Flex 布局教程：语法篇</a></p>
    </footer>
  </article>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      createTime: '2019-02-25 14:59:00',
      directions: [
        'item1','item2','item3'
      ]
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
.flex-direction {
  display: flex;
  flex-direction: column;
}
</style>
