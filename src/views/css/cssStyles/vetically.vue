<template>
  <article class="app-box">
    <h2>单行文本垂直居中</h2>
    <h3>代码</h3>
    <pre><code>{{ code1 }}</code></pre>
    <h3>示例</h3>
    <div class="p">在200px长的框框里垂直居中</div>

    <h2>多行文本垂直居中</h2>
    <h3>代码</h3>
    <p>使用flex</p>
    <pre><code>{{ code2 }}</code></pre>
    <h3>示例</h3>
    <div class="p2">在200*80的框框里垂直居中在200*80的框框里垂直居中</div>

    <h3>代码</h3>
    <p>使用定位1</p>
    <pre><code>{{ code3 }}</code></pre>
    <h3>示例</h3>
    <div class="box">
      <div class="p3">垂直居中</div>
    </div>

    <h3>链接</h3>
    <p><a href="https://www.cnblogs.com/gaoht/p/9132612.html">css文字上下居中，一行文字居中，两行或多行文字同样居中</a></p>

  </article>
</template>

<script>
export default {
  name: 'vetically',
  data() {
    return {
      createTime: '2019-04-11 08:42:00',
      code1: `height: 20px;
line-height: 20px;
text-align: center;`,
      code2: `width: 200px;
height: 80px;
display: flex;
align-items: center;`,
      code3: `.box {
  width: 200px;
  height: 80px;
  position: relative;
  .p3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}`
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
.p {
  width: 200px;
  height: 40px;
  line-height: 40px;
  border: 1px solid black;
  text-align: center;
}
.p2 {
  width: 200px;
  height: 80px;
  display: flex;
  align-items: center;
  // justify-content: space-around;
  border: 1px solid black;
}
.box {
  width: 200px;
  height: 80px;
  position: relative;
  border: 1px solid black;
  .p3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

</style>
