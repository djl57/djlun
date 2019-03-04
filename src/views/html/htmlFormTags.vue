<template>
  <article class="app-box">
    <header class="catalog-to-top">
      <ul>
        <li v-for="item in tags" :key="item.id" class="bold">
          <a :href="'#' + item.id">{{ item.text }}</a>
        </li>
      </ul>
    </header>
    <main>
      <section>
        <h2 id="table">表格标签</h2>
        <div class="bold">基础：</div>
        <p>table（容器）、caption（表名）、tr（第几行）、th（第一行：表头）、td（其他行：表数据）</p>
        <div class="bold">其他（没用过）：</div>
        <p>thead、tbody、tfoot；colgroup、col</p>
        <h3>一个四行三列的表格：</h3>
        <div v-html="tableCode"></div>
        <h3>代码：</h3>
        <pre><code>{{ tableCode }}</code></pre>
        <h3>合并单元格：</h3>
        <div v-html="colspanCode"></div>
        <h3>代码：</h3>
        <pre><code>{{ colspanCode }}</code></pre>
      </section>
      <section>
        <h2 id="form">表单标签</h2>
      </section>
    </main>
    <footer>
      <h2>参考</h2>
      <p><a href="https://blog.csdn.net/jcx5083761/article/details/7724754">table合并单元格colspan和rowspan</a></p>
      <p><a href="http://www.w3school.com.cn/tags/att_td_colspan.asp">HTML td 标签的 colspan 属性</a></p>
    </footer>
  </article>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  name: 'formTags',
  data() {
    return {
      tags: [
        { id: 'table', text: '表格标签' },
        { id: 'form', text: '表单标签' },
      ],
      tableTags: [

      ],
      formTags: [

      ],
      tableCode: `<table>
  <caption>人员记录表</caption>
  <tr>
    <th>姓名</th>
    <th>性别</th>
    <th>年龄</th>
  </tr>
  <tr>
    <td>djlun</td>
    <td>女</td>
    <td>18</td>
  </tr>
  <tr>
    <td>zwj</td>
    <td>男</td>
    <td>20</td>
  </tr>
  <tr>
    <td>lanbao</td>
    <td>女</td>
    <td>21</td>
  </tr>
</table>`,
      colspanCode: `<table>
  <tr>
    <th colspan="2">题型</th>
    <th>题量</th>
  </tr>
  <tr>
    <td rowspan="4">判断推理</td>
    <td>图形推理</td>
    <td>10</td>
  </tr>
  <tr>
    <td>定义判断</td>
    <td>10</td>
  </tr>
  <tr>
    <td>类比推理</td>
    <td>10</td>
  </tr>
  <tr>
    <td>逻辑判断</td>
    <td>10</td>
  </tr>
</table>`
    }
  },
  computed: {
    // ...mapGetters([
      // 最后没用
      // 'formTags'
    // ])
  }
}
</script>

<style scoped lang="scss">
.index-item {
  float: right;
  padding-right: 5px;
}
</style>
