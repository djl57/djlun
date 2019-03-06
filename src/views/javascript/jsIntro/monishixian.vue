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
      <h2 id="ca1">call 的模拟实现</h2>
      <h3>call 的用法：</h3>
      1. <pre><code>{{ call1 }}</code></pre>
      2. <pre><code>{{ call2 }}</code></pre>
      3. <pre><code>{{ call3 }}</code></pre>
      <h3>最终实现代码：</h3>
      <pre><code>{{ call }}</code></pre>
    </section>
    <section>
      <h2 id="ca2">apply 的模拟实现</h2>
      <h3>apply 的用法：</h3>
      1. <pre><code>{{ apply1 }}</code></pre>
      2. <pre><code>{{ apply2 }}</code></pre>
      <h3>最终实现代码：</h3>
      <pre><code>{{ apply }}</code></pre>
    </section>
    <section>
      <h2 id="ca3">bind 的模拟实现</h2>
      <h3>bind 的用法：</h3>
      1. <pre><code>{{ bind1 }}</code></pre>
      2. <pre><code>{{ bind2 }}</code></pre>
      3. <pre><code>{{ bind3 }}</code></pre>
      <h3>最终实现代码：</h3>
      <pre><code>{{ bind }}</code></pre>
    </section>
    <section>
      <h2 id="ca4">new 的模拟实现</h2>
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
  context.fn = this; // 将函数设为对象的属性
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
// bind返回了一个函数
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
      bind3: `// bind 返回的函数还可以作为构造函数。此时，bind 时指定的 this 值会失效，但传入的参数依然生效。
var value = 2;
var foo = {
  value: 1
};
function bar(name, age) {
  this.habit = 'shopping';
  console.log(this.value);
  console.log(name);
  console.log(age);
}
bar.prototype.friend = 'kevin';
var bindFoo = bar.bind(foo, 'daisy');
var obj = new bindFoo('18');
// undefined   此时bind 时指定的 this 值失效（此时this指向obj，obj.value // undefined（对象没有的属性返回undefined））
// daisy       传入的参数依然生效
// 18          传入的参数依然生效
console.log(obj.habit);  // shopping
console.log(obj.friend);  // kevin`,
      bind: `Function.prototype.bind2 = function (context) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  } // 只有函数才可以调用这个方法。
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1); // argument第一个参数是this的指向，后面是传入的参数，座椅取arguments第二个开始到最后的值
  var fNOP = function () {}; // 新建一个空函数作为中转，fbound.prototype = this.prototype 改变 fbound.prototype 时会改变函数的prototype
  var fbound = function () {
    // 当作为构造函数时，this 指向实例，self 指向绑定函数，因为已经修改了 fbound.prototype 为 绑定函数的 prototype，此时结果为 true，当结果为 true 的时候，this 指向实例。
    // 当作为普通函数时，this 指向 window，self 指向绑定函数，此时结果为 false，当结果为 false 的时候，this 指向绑定的 context。
    self.apply(this instanceof self ? this : context, args.concat(Array.prototype.slice.call(arguments))); // 此时的arguments是bind返回的函数调用时传入的参数
  }
  fNOP.prototype = this.prototype;
  fbound.prototype = new fNOP(); // 再看一下原型链
  return fbound;
}`,
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
