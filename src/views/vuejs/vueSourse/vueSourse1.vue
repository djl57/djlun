<template>
  <div  >
    <h2>什么是v-model？</h2>
    <p>首先，打开<a href="https://cn.vuejs.org/v2/api/#v-model">官方文档</a>，查看v-model API。</p>
    <p>官方对它的描述是：在表单控件或者组件上创建双向绑定（随表单控件类型不同而不同）。</p>

    <h2>表单控件 及 组件</h2>
    <p>表单控件：input、select、textarea。</p>
    <p>组件：components</p>

    <h2>v-model特性</h2>
    <p>会忽略表单控件的 value、checked、selected。</p>
    <p>v-model 在内部使用不同的属性为不同的输入元素并抛出不同的事件：</p>
    <p>text 和 textarea 元素使用 value 属性和 input 事件；</p>
    <p>checkbox 和 radio 使用 checked 属性和 change 事件；</p>
    <p>select 字段将 value 作为 prop 并将 change 作为事件。</p>

    <h2>v-model修饰符</h2>
    <p>（1）.lazy - 取代 input 监听 change 事件</p>
    <p>（2）.number - 输入字符串转为有效的数字</p>
    <p>（3）.trim - 输入首尾空格过滤</p>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      createdTime: '2019-03-14 14:22:00'
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
