<template>
  <article class="app-box">
    <header>
      <h1>js 克隆</h1>
    </header>
    <main>
      <section>
        <h2>前置知识</h2>
        <p><router-link to="/jsDataType/jsDataTypeIndex">js 数据类型 -></router-link></p>
      </section>
      <section>
        <h2>什么是克隆？</h2>
        <p>克隆只针对对象、数组、函数等复杂数据。</p>
      </section>
      <section>
        <h2>浅克隆</h2>
        <section>
          <h3>概念</h3>
          <p>当数组或对象没有嵌套数组或对象，那么浅克隆就可以实现对象和数组的克隆，并且克隆对象不会和原对象互相影响。</p>
          <p>但是当嵌套了数组或对象时，浅克隆克隆地并不彻底，克隆对象和原对象会互相影响。</p>
        </section>
        <section>
          <h3>实现</h3>
          <div class="bold">数组浅克隆：</div>
          <code>let copy = arr.slice()</code><br>
          <code>let copy = arr.concat()</code><br>
          <code>let copy = [...arr]</code>
          <div class="bold">对象浅克隆：</div>
          <code>let copy = Object.assign({}, obj)</code><br>
          <code>let copy = {...obj}</code>
          <div class="bold">通用浅克隆实现：</div>
          <pre><code>
const shallowClone = obj => {
  if (typeof obj !== 'object') return obj;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
// es6
const shallowClone = obj => {
  if (typeof obj !== 'object') return obj;
  return obj instanceof Array ? [...obj] : {...obj};
}         </code></pre>
        </section>
      </section>
      <section>
        <h2>深克隆</h2>
        <section>
          <h3>概念</h3>
          <p>完全的拷贝一个对象，即使嵌套了对象，两者也相互分离，修改一个对象的属性，也不会影响另一个。</p>
        </section>
        <section>
          <h3>实现</h3>
          <div class="bold">使用递归：</div>
          <pre><code>
let deepClone = obj => {
  if (typeof obj !== 'object') return obj;
  let newObj = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key])
    }
  }
  return newObj;
}</code></pre>
          <div class="bold">使用递归的性能问题：</div>
          <p>尽管使用深拷贝会完全的克隆一个新对象，不会产生副作用，但是深拷贝因为使用递归，性能会不如浅拷贝，在开发中，还是要根据实际情况进行选择。</p>
          <div class="bold">使用JSON（不能克隆函数）：</div>
          <code>let copy = JSON.parse(JSON.stringify(arr))</code>
          <p>通过`JSON.stringify`来讲对象转成一个字符串，然后在用`JSON.parse`来为其分配另一个存储地址，这样可以解决内存地址指向同一个的问题。</p>
          <p>但是 `JSON.parse()`、`JSON.stringify`也存在一个问题，`JSON.parse() `和J `SON.stringify()`能正确处理的对象只有`Number、String、Array`等能够被 json 表示的数据结构，因此函数这种不能被 json 表示的类型将不能被正确处理。</p>
          <div class="bold">当克隆的对象里嵌套了函数时：</div>
          <code>
            var arr = [ function() {return 1},{ b:function() {return 2} } ]<br>
            var copy = JSON.parse(JSON.stringify(arr)) // [ null, {} ]
          </code>
        </section>
      </section>
    </main>
    <footer>
      <h2>参考：</h2>
      <p><a href="https://www.cnblogs.com/Yance/p/7655320.html">js之深度克隆、简易克隆</a></p>
      <p><a href="https://blog.csdn.net/sinat_17775997/article/details/70482279">JS浅克隆与深克隆</a></p>
      <p><a href="https://segmentfault.com/a/1190000010150234">JavaScript专题之深浅拷贝</a></p>
      <p><a href="https://github.com/muwoo/blogs/issues/18">JS 数据类型、赋值、深拷贝和浅拷贝</a></p>
    </footer>
  </article>
</template>

<script>
import { shallowClone } from '@/utils'
export default {
  name: '',
  data() {
    return {
      arr: ['1', {b: function() {return 1}}]
    }
  },
  computed: {
    copy() {
      return shallowClone(this.arr)
    }
  }
}
</script>
