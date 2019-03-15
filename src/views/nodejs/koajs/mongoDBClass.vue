<template>
  <article class="app-box">
    <h2>原生nodejs怎么操作mongoDb数据库？</h2>
    <p>在mongodb01.js中</p>
    <p>1、安装：npm i mongodb --save</p>
    <p>2、引入mongodb下面的MongoClient： const MongoClient = require('mongodb').MongoClient</p>
    <p>3、定义要连接的数据库地址和名称：const url = "mongodb://localhost:27017";const dbName = 'koa'</p>
    <p>4、nodejs连接数据库</p>
    <pre><code>{{ connect }}</code></pre>
    <p>5、操作数据库</p>
    <p><a href="http://mongodb.github.io/node-mongodb-native/3.1/quick-start/quick-start/">文档</a></p>
    <pre><code>{{ operate }}</code></pre>

    <h2>koa操作数据库</h2>
    <p>封装在module/db中；使用在mongodb02中</p>

    <h2>分析两者的性能</h2>
    <p>在module中有分析</p>
    
  </article>
</template>

<script>
export default {
  name: 'mongoDBClass',
  data() {
    return {
      createTime: '2019-03-15 14:17:00',
      connect: `const client = new MongoClient(url);

client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});`,
      operate: ``
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
