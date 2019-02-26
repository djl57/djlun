<template>
  <article class="app-box">
    <header>
      <h1>js 数据类型</h1>
    </header>
    <main>
      <section>
        <h2>分类</h2>
        <section>
          <h3>基本数据类型（六种）</h3>
          <ol>
            <li v-for="item in dataTypes" :key="item.name">{{ item.name }}（{{ item.desc }}）</li>
          </ol>
        </section>
        <section>
          <h3>引用数据类型</h3>
          <p>Object 对象</p>
          <div class="bold">包括：</div>
          <ol>
            <li v-for="item in objects" :key="item.name">{{ item.name }}{{ item.desc }}</li>
          </ol>
        </section>
      </section>
      <section>
        <h2>两种类型的区别</h2>
        <section>
          <h3>基本数据类型</h3>
          <p>除 Object 以外的所有类型都是不可变的（值本身无法被改变）。</p>
          <p>通常情况下都是对一个基本数据类型变量重新赋值，而不是改变基本数据类型的值。</p>
          <p>在 js 中没有方法可以改变布尔值和数字。</p>
          <p>有操作字符串的方法，但是这些方法都是返回一个新的字符串，并没有改变其原有的数据。</p>
          <h3>引用数据类型</h3>
          <p>引用数据类型的变量是一个存放在栈中的指针，数据存放在堆内存中，指针指向堆内存的地址。</p>
          <p>在对变量进行赋值操作时，赋的是栈中的指针。但在操作变量时，改变的是堆内存中的数据，所以两个变量之间会互相影响。由此产生了深浅克隆。</p>
          <h3>深浅克隆</h3>
          <p><router-link to="/jsCopy/jsCopyIndex">克隆 -></router-link></p>
        </section>
      </section>
    </main>
    <footer>
      <h2>参考</h2>
      <p><a href="https://github.com/muwoo/blogs/issues/18">JS 数据类型、赋值、深拷贝和浅拷贝</a></p>
      <p><a href="https://www.zhihu.com/question/24804474">JavaScript 里 Function 也算一种基本类型？</a></p>
    </footer>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: '',
  data() {
    return {
      dataTypes: [
        { name: 'undefined 类型', desc: '变量未定义时的属性' },
        { name: 'null 类型', desc: 'JavaScript 是大小写敏感的，因此 null 与 Null、NULL或其他变量完全不同。' },
        { name: 'String 类型', desc: '字符串' },
        { name: 'Number 类型', desc: '数字' },
        { name: 'Boolean 类型', desc: '布尔值' },
        { name: 'Symbol 类型', desc: 'ECMAScript 6 新增' },
      ],
      objects: [
        { name: 'Object', desc: '' },
        { name: 'Array', desc: '' },
        { name: 'Function', desc: '（特殊：typeof Fn // "function"）' },
        { name: '...', desc: '' },
      ]
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
