<template>
  <article class="app-box">
    <aside :class="aside? 'aside':'none-aside'">
      <h1 @click="showAside">{{ catalog }}</h1>
      <ol>
        <li v-for="item in catalogs" :key="item.id">
          <a :href="'#'+item.id">{{ item.text }}</a>
        </li>
      </ol>
    </aside>
    <section>
      <h2>call 的模拟实现</h2>
      <h3>call 的用法：</h3>
      1. <pre><code>{{ call1 }}</code></pre>
      2. <pre><code>{{ call2 }}</code></pre>
      3. <pre><code>{{ call3 }}</code></pre>
      <h3>最终实现代码：</h3>
      <pre><code>{{ call }}</code></pre>
    </section>
    <section>
      <h2>apply 的模拟实现</h2>
      <h3>apply 的用法：</h3>
      1. <pre><code>{{ apply1 }}</code></pre>
      2. <pre><code>{{ apply2 }}</code></pre>
      <h3>最终实现代码：</h3>
      <pre><code>{{ apply }}</code></pre>
    </section>
    <section>
      <h2>bind 的模拟实现</h2>
      <h3>bind 的用法：</h3>
      1. <pre><code>{{ bind1 }}</code></pre>
      2. <pre><code>{{ bind2 }}</code></pre>
      3. <pre><code>{{ bind3 }}</code></pre>
      <h3>最终实现代码：</h3>
      <pre><code>{{ bind }}</code></pre>
    </section>
    <section>
      <h2>new 的模拟实现</h2>
      <h3>new 的用法：</h3>
      1. <pre><code>{{ new1 }}</code></pre>
      2. <pre><code>{{ new2 }}</code></pre>
      3. <pre><code>{{ new3 }}</code></pre>
      <h3>最终实现代码：</h3>
      <pre><code>{{ news }}</code></pre>
    </section>
    <footer>
      <h2>摘抄</h2>
      <p><a href="https://segmentfault.com/a/1190000009257663">JavaScript深入之call和apply的模拟实现</a></p>
      <p><a href="https://segmentfault.com/a/1190000009271416">JavaScript深入之bind的模拟实现</a></p>
      <p><a href="https://segmentfault.com/a/1190000009286643">JavaScript深入之new的模拟实现</a></p>
    </footer>
  </article>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      createTime: '2019-03-05 13:42:00',
      aside: false,
      catalog: '目录',
      catalogs: [
        { id: 'ca1', text: 'call 的模拟实现' },
        { id: 'ca2', text: 'apply 的模拟实现' },
        { id: 'ca3', text: 'bind 的模拟实现' },
        { id: 'ca4', text: 'new 的模拟实现' },
      ],
      call1: `var foo = {
  value: 1
}
function bar() {
  console.log(this.value)
}
bar.call(foo) // 1`,
      call2: `var foo = {
  value: 1
}
function bar(name, age) {
  console.log(name)
  console.log(age)
  console.log(this.value);
}
bar.call(foo, 'kevin', 18);
// kevin
// 18
// 1`,
      call3: `var value = 1;
function bar() {
  console.log(this.value);
}
bar.call(null); // 1`,
      call: `Function.prototype.call2 = function(context) {
  var context = context || window; // 解决传入参数为null时this指向window的情况
  context.fn = this; // 通过this获取调用call2的函数
  var args = []; // 要传给调用call2的函数的参数
  for(var i = 1, len = arguments.length; i < len; i++) { // 传入参数数量不定，使用arguments解决
    args.push('arguments[' + i + ']');
  }
  var result = eval('context.fn(' + args +')'); // 执行调用call2的函数，这里 args 会自动调用 Array.toString() 这个方法【let arr = [1,2,3];arr.toString() //'1,2,3'】
  delete context.fn;
  return result;
}`,
      apply1: `var x = 0; 
function test(){ 
	alert(this.x); 
} 
var o = {
  x: 1
}; 
test.apply(); //0 
test.apply(o); //1`,
      apply2: `var x = 0; 
function test(name,age){ 
  console.log(this.x); 
  console.log(name); 
  console.log(age); 
} 
var o = {
  x: 1
}; 
var arr = ['djlun', 18]
test.apply(o, arr); 
// 1
// djlun
// 18`,
      apply: `Function.prototype.apply = function (context, arr) {
  var context = Object(context) || window;
  context.fn = this;
  var result;
  if (!arr) {
    result = context.fn();
  } else {
    var args = [];
    for (var i = 0, len = arr.length; i < len; i++) { // 传入的arr赋给了函数的arguments
      args.push('arr[' + i + ']');
    }
    result = eval('context.fn(' + args + ')')
  }
  delete context.fn
  return result;
}`,
      bind1: `var foo = {
  value: 1
};
function bar() {
  console.log(this.value);
}
// 返回了一个函数
var bindFoo = bar.bind(foo); 
bindFoo(); // 1`,
      bind2: `var foo = {
  value: 1
};
function bar(name, age) {
  console.log(this.value);
  console.log(name);
  console.log(age);
}
var bindFoo = bar.bind(foo, 'daisy'); // 既可以在这里传入参数
bindFoo('18'); // 还可以在这里传入参数
// 1
// daisy
// 18`,
      bind3: ``,
      bind: ``,
      new1: ``,
      new2: ``,
      new3: ``,
      news: ``
    }
  },
  components: {
    
  },
  mounted() {
    
  },
  computed: {
    
  },
  methods: {
    showAside() {
      this.aside = !this.aside
      this.aside ? this.catalog = '隐藏' : this.catalog = '目录';
    },
    hideCatalog() {
      this.aside = false
      this.catalog = '目录'
    }
  }
}
</script>

<style scoped lang="scss">

</style>
