<template>
  <article class="app-box">
    <h1>数组去重</h1>
    <section>
      <h2>原始方法</h2>
      <h3>代码</h3>
      <pre><code>{{ code1 }}</code></pre>
      <h3>使用</h3>
      <p>原数组：{{arr}}</p>
      <p>使用原始方法去重后：{{originalUniqueArr}}</p>
      <h3>优点</h3>
      <p>兼容性好</p>
    </section>
    <section>
      <h2>使用indexOf()：查找指定元素，返回找到的第一个符合的元素的索引，没找到返回-1</h2>
      <h3>代码</h3>
      <pre><code>{{ code2 }}</code></pre>
      <h3>使用</h3>
      <p>原数组：{{arr}}</p>
      <p>使用indexOf()之后的方法去重后：{{indexOfUniqueArr}}</p>
    </section>
    <section>
      <h2>排序后去重</h2>
      <h3>代码</h3>
      <pre><code>{{ code3 }}</code></pre>
      <h3>使用</h3>
      <p>原数组：{{arr}}</p>
      <p>排序去重后：{{sortUniqueArr}}</p>
      <h3>优点</h3>
      <p>效率高于方法一二，因为只需要比较一次</p>
    </section>
    <section>
      <h2>使用es5的filter来简化代码</h2>
      <h3>代码</h3>
      <pre><code>{{ code4 }}</code></pre>
      <h3>使用</h3>
      <p>原数组：{{arr}}</p>
      <p>filter+indexOf后：{{filterUniqueArr}}</p>
      <p>filter+sort后：{{filterSortUniqueArr}}</p>
    </section>
    <section>
      <h2>使用Object键值对</h2>
      <h3>代码</h3>
      <pre><code>{{ code7 }}</code></pre>
      <h3>使用</h3>
      <p>原数组：{{arr}}</p>
      <p>{{objectUniqueArr}}</p>
    </section>
    <section>
      <h2>使用Set数据结构</h2>
      <h3>代码</h3>
      <pre><code>{{ code5 }}</code></pre>
      <h3>使用</h3>
      <p>原数组：{{arr}}</p>
      <p>Set+Array.from()后：{{es6FromUniqueArr}}</p>
    </section>
    <section>
      <h2>使用Map数据结构</h2>
      <h3>代码</h3>
      <pre><code>{{ code6 }}</code></pre>
    </section>
    <section>
      <h2>补充</h2>
      <h3>当需要去重的数组中包含undefined、null、NaN、对象时</h3>
      <p>原数组：(15)[1, 2, 3, 4, 3, undefined, 2, NaN, 1, null, 0, null, undefined, NaN, Number]</p>
      <p>原始方法：(10)[1, 2, 3, 4, undefined, NaN, null, 0, NaN, Number]</p>
      <p>indexOf()：(10)[1, 2, 3, 4, undefined, NaN, null, 0, NaN, Number]</p>
      <p>sort()：(10)[0, 1, 2, 3, Number, 4, NaN, NaN, null, undefined]</p>
      <p>filter+indexOf()：(8)[1, 2, 3, 4, undefined, null, 0, Number]</p>
      <p>filter+sort()：(10)[0, 1, 2, 3, Number, 4, NaN, NaN, null, undefined]</p>
      <p>Set+Array.from()：(9)[1, 2, 3, 4, undefined, NaN, null, 0, Number]</p>
    </section>
    <footer>
      <h2>摘抄自</h2>
      <p><a href="https://segmentfault.com/a/1190000009867515">JavaScript专题之数组去重</a></p>
    </footer>
  </article>
</template>

<script>
import { originalUnique, indexOfUnique, sortUnique, filterUnique, filterSortUnique, es6FromUnique, objectUnique } from '@/utils'
export default {
  name: '',
  data() {
    return {
      createTime: '2019-02-28 11:14:00',
      code1: `function unique(array) {
  // res用来存储结果
  var res = [];
  for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
    for (var j = 0, resLen = res.length; j < resLen; j++ ) {
      if (array[i] === res[j]) {
        break; // 只要想要插入的元素，res中已经存在，就跳出循环
      }
    }
    // 如果想要插入的元素没有与res中的元素重复，那么执行完循环后，j等于resLen，把元素插入到res中
    if (j === resLen) {
      res.push(array[i])
    }
  }
  return res;
}`,
      code2: `function unique(array) {
  var res = [];
  for (var i = 0, len = array.length; i < len; i++) {
    var current = array[i];
    if (res.indexOf(current) === -1) { // res中没有与想要插入的元素重复的元素
      res.push(current)
    }
  }
  return res;
}`,
      code3: `function unique(array) {
    var res = [];
    var sortedArray = array.concat().sort(); // sort()方法会改变原数组，所以先把原数组复制一遍
    var seen;
    for (var i = 0, len = sortedArray.length; i < len; i++) {
        // 如果是第一个元素或者相邻的元素不相同
        if (!i || seen !== sortedArray[i]) {
            res.push(sortedArray[i])
        }
        seen = sortedArray[i];
    }
    return res;
}`,
      code4: `// 使用indexOf
function unique(array) {
    var res = array.filter(function(item, index, array){
        return array.indexOf(item) === index; // 删选出所有找到的第一个元素
    })
    return res;
}
// 使用sort()
function unique(array) {
    return array.concat().sort().filter(function(item, index, array){ // 这里必需有array，因为sort()改变了原理的array，还是用原来的array是没排序的
        return !index || item !== array[index - 1]
    })
}`,
      code5: `// 使用Array.from()，将可以转换为数组对象的对象转换为数组
const unique = array => Array.from(new Set(array))
// 使用扩展运算符
const unique = array => [...new Set(array)]`,
      code6: `function unique (arr) {
  const seen = new Map()
  return arr.filter((a) => !seen.has(a) && seen.set(a, 1))
}`,
      code7: `function unique(array) {
  var obj = {};
  return array.filter(function(item, index, array){
    return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true) // new Number(1)和new String('1')还是算同一个
  })
}`,
      arr: [1,2,3,4,3,2,1,0, {name: 'djlun'}, {name: 'djlun'}]
    }
  },
  components: {
    
  },
  mounted() {
    
  },
  computed: {
    originalUniqueArr() {
      return originalUnique(this.arr)
    },
    indexOfUniqueArr() {
      return indexOfUnique(this.arr)
    },
    sortUniqueArr() {
      return sortUnique(this.arr)
    },
    filterUniqueArr() {
      return filterUnique(this.arr)
    },
    filterSortUniqueArr() {
      return filterSortUnique(this.arr)
    },
    es6FromUniqueArr() {
      return es6FromUnique(this.arr)
    },
    objectUniqueArr() {
      return objectUnique(this.arr)
    }
  },
}
</script>

<style scoped lang="scss">

</style>
