<template>
  <div class="app-box">
    <h1>HTML语义化</h1>
    <h2>一、什么是HTML语义化？</h2>
    <p>使用正确的标签，便于开发者阅读、写出更优雅的代码、让网络爬虫很好地解析。</p>
    <h2>二、为什么要做到语义化？</h2>
    <ol>
      <li>有利于SEO，有利于搜索引擎爬虫更好的理解我们的网页，从而获取更多的有效信息，提升网页的权重。</li>
      <li>在没有CSS的时候能够清晰的看出网页的结构，增强可读性。</li>
      <li>便于团队开发和维护，语义化的HTML可以让开发者更容易的看明白，从而提高团队的效率和协调能力。</li>
      <li>支持多终端设备的浏览器渲染。</li>
    </ol>
    <h2>三、语义化HTML该怎么做呢？</h2>
    <p>HTML 告诉我们一块内容是什么（或其意义），而不是它长的什么样子，它的样子应该由CSS来决定。（结构与样式分离！）</p>
    <p>写语义化的 HTML 结构其实很简单，首先掌握 HTML 中各个标签的语义，在看到内容的时什么标签能更好的描述它就用什么标签。</p>
    <h2>什么是 SEO ？</h2>
    <p>Search Engine Optimization——搜索引擎优化，这是一种利用搜索引擎的搜索规则，采取优化策略或程序，提高网站在搜索结果中的排名。</p>
    <h2>什么是网络爬虫？</h2>
    <p>又称网络蜘蛛、网络机器人，是一种搜索引擎用于自动抓取网页资源的程序或者说叫机器人。从某一个网址为起点，去访问，然后把网页存回到数据库中，如此不断循环，一般认为搜索引擎爬虫都是靠链接爬行的，所以管他叫爬虫。这个只有开发搜索引擎才会用到。对于网站而言，只要有链接指向我们的网页，爬虫就会自动提取我们的网页。</p>
  </div>
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
