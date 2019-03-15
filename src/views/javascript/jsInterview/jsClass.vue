<template>
  <article  >
    <p>class 写法让对象原型的写法更加清晰、更像面向对象编程的语法。</p>
    <div class="flex">
      <pre><code>{{ codeLeft }}</code></pre>
      <pre><code>{{ codeRight }}</code></pre>
    </div>
    <p>ES5 的构造函数 Person，对应 ES6 的 Person 类的 constructor 方法。</p>
    <p>值得注意的是：类的内部所有定义的方法，都是不可枚举的（non-enumerable）</p>
    <div class="flex">
      <pre><code>{{ codeLeft2 }}</code></pre>
      <pre><code>{{ codeRight2 }}</code></pre>
    </div>
    <h2>摘抄自（文章将es6和es5对比地很清楚）</h2>
    <p><a href="https://segmentfault.com/a/1190000016914693">ES6 系列之 Babel 是如何编译 Class 的(上)</a></p>
  </article>
</template>

<script>
export default {
  name: 'jsClass',
  data() {
    return {
      createTime: '2019-03-07 11:18:00',
      codeLeft: `// ES6 中：
class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    return 'hello, I am ' + this.name;
  }
}
var kevin = new Person('Kevin');
kevin.sayHello(); // hello, I am Kevin`,
      codeRight: `// 对应到 ES5 中就是:
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function () {
  return 'hello, I am ' + this.name;
};
var kevin = new Person('Kevin');
kevin.sayHello(); // hello, I am Kevin`,
      codeLeft2: `// 在 ES6 中：
Object.keys(Person.prototype); // []
Object.getOwnPropertyNames(Person.prototype); // ["constructor", "sayHello"]`,
      codeRight2: `// 在 ES5 中：
Object.keys(Person.prototype); // ['sayHello']
Object.getOwnPropertyNames(Person.prototype); // ["constructor", "sayHello"]`
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
.flex pre {
  width: 50%;
  overflow: auto;
}
</style>
