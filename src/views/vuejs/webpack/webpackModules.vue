<template>
  <article class="app-box">
    <ol>
      <li>安装webpack：npm install --save-dev webpack webpack-cli</li>
      <li>安装css：npm install --save-dev style-loader css-loader</li>
      <li>管理图片、字体资源：npm install --save-dev file-loader</li>
      <li>加载 CSV、TSV 和 XML资源：npm install --save-dev csv-loader xml-loader（json资源直接import即可）</li>
      <li>HtmlWebpackPlugin：使打包后自动生成dist/index.html文件【管理输出：npm install --save-dev html-webpack-plugin】</li>
      <li>clean-webpack-plugin：使每次打包都重新生成dist文件夹【管理输出：npm install clean-webpack-plugin --save-dev】</li>
      <li>配置devtool: 'inline-source-map'：使错误能准确指定到某个文件，而不是指定到打包后生成的bundle</li>
      <li>package.json观察模式："watch": "webpack --watch"：能让webpack一直开着，改变内容后刷新页面即可看到修改后的实际效果。</li>
      <li>webpack-dev-server：使上面的观察模式开启后,在 localhost:8080 下建立服务，改变内容浏览器自动刷新。【开发：npm install --save-dev webpack-dev-server】</li>
      <li>webpack-dev-middleware：可以把 webpack 处理后的文件传递给一个服务器(server)</li>
      <li>配置mode: "production"：可以在打包时，把没有import用到的方法删减掉，使打包文件更精简。</li>
      <li>启用 HMR（模块热替换）：当文件内部发生变更时可以告诉 webpack 接受更新的模块</li>
    </ol>
  </article>
</template>

<script>
export default {
  name: 'webpackModules',
  data() {
    return {
      createTime: '2019-03-21 10:06:00'
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
