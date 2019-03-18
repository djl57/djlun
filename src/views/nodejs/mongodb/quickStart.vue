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
    <section @click="hideCatalog">
      <section>
        <h2 :id="catalogs[0].id">{{ catalogs[0].text }}</h2>
        <p><code>npm install mongodb --save</code></p>
      </section>
      <section>
        <h2 :id="catalogs[1].id">{{ catalogs[1].text }}</h2>
        <p>（1）从MongoDB官网下载正确的MongoDB版本</p>
        <p>（2）创建一个数据库目录（在本例中为/ data）</p>
        <p>（3）安装并启动一个mongod。</p>
        <p><code>mongod --dbpath=/data</code></p>
      </section>
      <section>
        <h2 :id="catalogs[2].id">{{ catalogs[2].text }}</h2>
        <pre><code>{{ catalogs2 }}</code></pre>
      </section>
      <section>
        <h2 :id="catalogs[3].id">{{ catalogs[3].text }}</h2>
        <p>在learn-koa2中的db.js中有代码</p>
        <p>增</p>
      </section>
      <section>
        <h2 :id="catalogs[4].id">{{ catalogs[4].text }}</h2>
        <p>在learn-koa2中的db.js中有代码</p>
        <p>增多个</p>
      </section>
      <section>
        <h2 :id="catalogs[5].id">{{ catalogs[5].text }}</h2>
        <p>在learn-koa2中的db.js中有代码</p>
        <p>删</p>
      </section>
      <section>
        <h2 :id="catalogs[6].id">{{ catalogs[6].text }}</h2>
        <p>在learn-koa2中的db.js中有代码</p>
        <p>改</p>
      </section>
      <section>
        <h2 :id="catalogs[7].id">{{ catalogs[7].text }}</h2>
        <p>在learn-koa2中的db.js中有代码</p>
        <p>查</p>
      </section>
      <section>
        <h2 :id="catalogs[8].id">{{ catalogs[8].text }}</h2>
        <p>在learn-koa2中的db.js中有代码</p>
        <p>创建索引</p>
      </section>
    </section>
  </article>
</template>

<script>
export default {
  name: 'quickStart',
  data() {
    return {
      createTime: '2019-03-18 08:51:00',
      aside: false,
      catalog: '目录',
      catalogs: [
        { id: "ca1", text: '安装mongodb' },
        { id: "ca2", text: '启动mongodb数据库' },
        { id: "ca3", text: '连接到mongodb数据库' },
        { id: "ca4", text: 'insert' },
        { id: "ca5", text: 'insertMany' },
        { id: "ca6", text: 'remove' },
        { id: "ca7", text: 'update' },
        { id: "ca8", text: 'find' },
        { id: "ca9", text: 'indexCollection' }
      ],
      catalogs2: `const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// 数据库地址
const url = 'mongodb://localhost:27017';

// 数据库名称
const dbName = 'myproject';

// 创建一个新的 MongoClient
const client = new MongoClient(url);

// 使用connect方法连接到nodejs服务器
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close(); // 关闭数据库
});`
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
