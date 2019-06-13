<template>
  <div class="app-container">
    <table>
      <tr><th colspan="2">题型</th><th>题量</th><th>分值/题</th><th>总分</th></tr>
      <tr><td colspan="2">言语理解与判断</td><td>35</td><td>0.8</td><td>28</td></tr>
      <tr><td colspan="2">数量关系</td><td>25</td><td>0.8</td><td>20</td></tr>
      <tr><td rowspan="4">判断推理</td><td>图形推理</td><td>10</td><td>0.5</td><td>5</td></tr>
      <tr><td>定义判断</td><td>10</td><td>0.6</td><td>6</td></tr>
      <tr><td>类比推理</td><td>10</td><td>0.5</td><td>5</td></tr>
      <tr><td>逻辑判断</td><td>10</td><td>0.6</td><td>6</td></tr>
      <tr><td colspan="2">资料分析</td><td>20</td><td>1</td><td>20</td></tr>
      <tr><td colspan="2">常识判断</td><td>20</td><td>0.5</td><td>10</td></tr>
      <tr><td colspan="2">总计</td><td>140</td><td>大致推测</td><td>100</td></tr>
    </table>
    <div class="table2">
      <table>
        <tr><th>年份</th><th>言语理解与表达</th><th>数量关系</th><th>判断推理</th><th>资料分析</th><th>常识判断</th><th>总计</th></tr>

        <tr><td rowspan="2">2018</td><td>35</td><td>25</td><td>40</td><td>20</td><td>20</td><td>140</td></tr>
        <tr><td>21（60%）</td><td>11（44%）</td><td>27（67.5%）</td><td>14（70%）</td><td>0</td><td>73（52.1%）</td></tr>

        <tr><td rowspan="2">2016</td><td>30</td><td>20</td><td>40</td><td>15</td><td>20</td><td>125</td></tr>
        <tr><td>23（76.7%）</td><td>18（90%）</td><td>24（60%）</td><td>12（80%）</td><td>0</td><td>77（61.6%）</td></tr>

        <tr><td rowspan="2">2011</td><td>35</td><td>25</td><td>35</td><td>15</td><td>20（综合知识）</td><td>130</td></tr>
        <tr><td>22（62.8%）</td><td>21（84%）</td><td>24（68.6%）</td><td>11（73.3%）</td><td>0</td><td>78（60%）</td></tr>

        <tr><td rowspan="2">2012</td><td>35</td><td>25</td><td>35</td><td>15</td><td>20（综合知识）</td><td>130</td></tr>
        <tr><td>20（57.1%）</td><td>13（84%）</td><td>24（68.6%）</td><td>11（73.3%）</td><td>0</td><td>68（52.3%）</td></tr>

        <tr><td rowspan="2">2014</td><td>35</td><td>25</td><td>35</td><td>15</td><td>20（综合知识）</td><td>130</td></tr>
        <tr><td>20（57.1%）</td><td>13（84%）</td><td>24（68.6%）</td><td>11（73.3%）</td><td>0</td><td>68（52.3%）</td></tr>

        <tr><td rowspan="2">2013</td><td>35</td><td>25</td><td>35</td><td>15</td><td>20（综合知识）</td><td>130</td></tr>
        <tr><td>0</td><td>13（84%）</td><td>24（68.6%）</td><td>11（73.3%）</td><td>0</td><td>68（52.3%）</td></tr>

        <tr><td rowspan="2">2015</td><td>35</td><td>25</td><td>35</td><td>15</td><td>20（综合知识）</td><td>130</td></tr>
        <tr><td>0</td><td>13（84%）</td><td>24（68.6%）</td><td>11（73.3%）</td><td>0</td><td>68（52.3%）</td></tr>

        <tr><td rowspan="2">2017</td><td>35</td><td>25</td><td>35</td><td>15</td><td>20（综合知识）</td><td>130</td></tr>
        <tr><td>0</td><td>13（84%）</td><td>24（68.6%）</td><td>11（73.3%）</td><td>0</td><td>68（52.3%）</td></tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      
    }
  },
  components: {
    
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.table2 {
  overflow: auto;
  width: 100%;
}
</style>

