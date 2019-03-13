<template>
  <article class="app-box">
    <h2>介绍</h2>
    <p>开发思路和express差不多，最大的特点就是可以避免异步嵌套。</p>
    <p>文档：<a href="https://www.itying.com/koa/">https://www.itying.com/koa/</a></p>

    <h2>安装</h2>
    <h3>（1）安装nodejs</h3>
    <h3>（2）安装koa：</h3>
    <p>1、新建一个文件夹</p>
    <p>2、npm init 生成一个package.json文件【用来管理项目和项目中的各种依赖】</p>
    <p>3、安装koa：npm i koa --save【就像引入一个模块】</p>

    <h2>配置</h2>
    <p>learn-koa2的app.js文件中</p>

    <h2>es6常用语法</h2>
    <p>let，const，模板字符串【``】，对象属性简写、方法简写，箭头函数【this指向上下文】，promise</p>
    <h3>promise</h3>
    <p>一个函数getData：可以内部获取ajax返回数据。</p>
    <p>现在想要方法外部获取ajax返回数据：getData函数不能实现，这时就想到回调函数。</p>
    <p>回调函数：将getData函数的参数设置为callback，最后在获取到返回数据data后return callback(data)，
      其中参数callback是一个方法，就可以在外部调用getData(data => { 操作data })。</p>
    <p>除了回调函数，还可以使用promise来实现方法外部获取异步数据。</p>
    <p>promise的参数是两个回调函数，第一个resolve是成功的回调函数，第二个reject是失败的回调函数。</p>
    <p>我们可以const getData = new Promise((resolve, reject) => { 获取异步数据的方法，然后在获取到数据data
      后resolve(data) })，就可以使用getDta.then(data => { 操作data })，捕捉失败的回调函数reject返回的数据
      就用getData.catch(data => { 错误操作 })</p>
    
    <h2>async/await</h2>
    <p>async【Athink（读音）】创建一个异步方法，await等待一个异步方法完成，获取它的返回数据。</p>
    <p>async使用方式：async function getData() { 获取数据并return }【async () => {}用箭头函数就没有名字】，返回一个promise</p>
    <p>拿到异步方法的数据：getData().then(data => { 操作异步数据 })</p>
    <h3>以上方式还是用到了回调的思维，这时es7的await就起作用了</h3>
    <p>await使用方式：await必须用在异步async方法里面。async function getName() { const data = await getData()【
      getData()不是一定要是async方法，也可以是一个promise，因为async返回的就是一个promise】 }</p>
    <p>await阻塞功能，把异步的变成同步的，await的异步获取数据方法没执行完，await下面的代码不会执行。</p>

    <h2>使用vscode调试nodejs代码（即js文件）</h2>
    <p>点击左上角 调试-> 启动调试，然后打端点，按左上角绿色的小三角，打印的东西就会出现在左上角的框框里</p>
  </article>
</template>

<script>
export default {
  name: 'koajsIntro',
  data() {
    return {
      createTime: '2019-03-13 12:13:00'
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
