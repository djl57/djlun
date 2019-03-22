<template>
  <article class="app-box">
    <h2>概念</h2>
    <p>数据库（database）</p>
    <p>集合（collection）--表（table）</p>
    <p>文档对象（document）--记录（record）</p>

    <h2>命令</h2>
    <p>（1）连接mongodb：将下载的mongodb的bin路径添加到环境变量中，在cmd中即可通过mongo连接mongodb://127.0.0.1:27017</p>
    <p>（2）创建数据库并自动进入此数据库/数据库已存在则是切换命令：use test 【switched to db test】</p>
    <p>（3）查看当前数据库是哪个：db 【test】</p>
    <p>（4）查看创建有哪些数据库：show dbs</p>
    <p>（5）在当前数据库中创建集合test，并且往集合里添加一个文档{"name":"djlun"}：db.test.insert({ "name":"djlun" })</p>
    <p>（6）显示当前数据库的集合：show collections</p>

    <h2>参考</h2>
    <p><a href="https://www.cnblogs.com/JeremyWYL/p/7809318.html">MongoDB基本命令操作</a></p>
    <p><a href="https://www.cnblogs.com/jimcsharp/p/5597980.html">mongodb创建数据库和配置用户</a></p>
  </article>
</template>

<script>
export default {
  name: 'mongodbCommand',
  data() {
    return {
      createTime: '2019-03-22 09:23:00'
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
