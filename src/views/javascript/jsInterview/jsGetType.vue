<template>
  <article class="app-box">
    <h1>
      封装getType方法 判断数据类型
    </h1>
    <section>
      <p>元数据打印在控制台</p>
      <h2>使用typeof</h2>
      <p v-for="(item, index) in arr" :key="index">{{ typeof item }}</p>
      <h2>使用封装的getType方法</h2>
      <p v-for="(item, index) in arr" :key="index+'s'">{{ getTypeItem(item) }}</p>
      <p>注意：当传入的数据为new Number()定义的值时，其类型判断结果是number，而不是object</p>
      <h3>代码：</h3>
      <pre><code>{{ code }}</code></pre>
    </section>
    <section>
      <h2>摘抄</h2>
      <p><a href="https://segmentfault.com/a/1190000009943534">JavaScript专题之类型判断(上)</a></p>
    </section>
    <section>
      <h2>引申</h2>
      <p><a href="https://segmentfault.com/a/1190000010054116">JavaScript专题之类型判断(下)</a></p>
      <p>要判断的obj： {{ obj }}</p>
      <input type="text" placeholder="name:djlun;age:18;..." @blur.prevent="changeObj" v-model="objValue" @keyup.enter="changeObj">
      <input type="button" value="设置obj" @click="changeObj">
      <input type="button" value="置空obj" @click="emptyObj">
      <p>isEmptyObj: {{ isEmptyObj }}</p>
      <p class="err">注意：此处给{}赋值时需用this.$set(obj,key,value)，而不能直接obj[key]=value，否则数据不会更新。</p>
    </section>
  </article>
</template>

<script>
import {getType, isEmptyObject} from '@/utils'
export default {
  name: '',
  data() {
    return {
      createTime: '2019-03-01 12:32:00',
      arr: [
        'str',
        1,
        true,
        undefined,
        null,
        new Date(),
        new Error(),
        { name: 'djlun' },
        [ 1,2,3 ],
        /a/g,
        function a () {},
        new Number()
      ],
      obj: {},
      objValue: '',
      code: `let class2type = {};

// 生成class2type映射
['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error', 'Null', 'Undefined'].map(item => {
  class2type["[object " + item + "]"] = item.toLowerCase();
})

const getType = obj => {
  return typeof obj === 'object' ? 
    class2type[Object.prototype.toString.call(obj)] || 'object' :
    typeof obj
}`
    }
  },
  components: {
    
  },
  mounted() {
    console.log(this.arr)
  },
  computed: {
    isEmptyObj() {
      return isEmptyObject(this.obj)
    }
  },
  methods: {
    getTypeItem(item) {
      return getType(item)
    },
    changeObj() {
      let split = this.objValue.split(';')
      let key, value
      for (let prop of split) {
        key = prop.split(':')[0]
        value = prop.split(':')[1]
        this.$set(this.obj, key, value)
      }
    },
    emptyObj() {
      this.obj = {}
      this.objValue = ''
    }
  }
}
</script>

<style scoped lang="scss">

</style>
