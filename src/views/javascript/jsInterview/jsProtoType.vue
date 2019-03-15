<template>
  <article  >
    <img src="../../../assets/images/prototype.png" width="90%">
    <h2>一些概念</h2>
    <h3>构造函数</h3>
    <p>构造函数首先是一个函数，和其他函数在定义上看不出什么区别，命名一般使用大驼峰式。</p>
    <code>function Person() {  }</code>
    <p>Person就是一个构造函数。</p>
    <h3>实例对象</h3>
    <p>构造函数创建的对象，就叫做实例对象。</p>
    <p>当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。</p>
    <code>let person = new Person()</code>
    <p>person就是一个实例对象。</p>
    <h3>protoType（实例原型）</h3>
    <p>函数的属性，每个函数都有一个protoType属性，指向一个对象，这个对象正是调用该构造函数而创建的实例的原型。</p>
    <p>什么是原型？可以这样理解：每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，
      这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。</p>
    <p>实例原型的__proto__是Object.prototype，Object.prototype的__proto__的null。</p>
    <h3>__proto__（实例原型）</h3>
    <p>实例对象的属性，这是每一个JavaScript对象(除了 null )都具有的一个属性，指向该对象的原型。</p>
    <h3>constructor（指向构造函数）</h3>
    <p>每个原型都有一个 constructor 属性指向关联的构造函数。</p>
    <h3>原型链</h3>
    <p>由相互关联的原型组成的链状结构就是原型链</p>
    <footer>
      <h2>摘抄自</h2>
      <p><a href="https://segmentfault.com/a/1190000008959943">JavaScript深入之从原型到原型链</a></p>
    </footer>
  </article>
</template>

<script>
export default {
  name: 'jsProtoType',
  data() {
    return {
      createTime: '2019-03-06 09:54:00'
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
