<template>
  <article class="app-box">
    <p>学习版本：v4.29.6</p>
    <p>感觉不用整理，webpack文档写的很清楚</p>

    <h2>遇到的问题：</h2>
    <p><a href="https://blog.csdn.net/qq_23521659/article/details/88353708">（1）webpack打包报错：clean-webpack-plugin only accepts an options object</a></p>
    <p>watch 之后自动刷新浏览器需要安装 webpack-dev-server，使用live serve插件打开html不安装也会自动刷新</p>
    
    <section>
      <h2>安装</h2>
      <pre><code>npm install --save-dev webpack webpack-cli</code></pre>
    </section>
    <section>
      <h2>起步</h2>
      <p>代码在 index01.html 和 index.js 中</p>
      <h3>概念</h3>
      <p>（1）dist：“分发”</p>
      <p>（2）在安装一个要打包到生产环境的安装包时，使用 npm install --save；
        在安装一个用于开发环境的安装包（例如，linter, 测试库等），使用 npm install --save-dev</p>

      <h3>package.json中：</h3>
      <pre><code>+   "private": true,
-   "main": "index.js",</code></pre>

      <h3>webpack01示例说明：</h3>
      <p>把 index01.html 中通过 script 引入的 lodash 使其在 index.js 中通过 import 被引入，并且通过
        npx webpack 打包生成 main.js 之后，在 index01.html 中引入main.js
      </p>

      <h3>配置文件：</h3>
      <p>webpack.config.js</p>
      <p>没添加配置文件前使用 npx webpack 来打包，添加后使用 npx webpack --config webpack.config.js 进行打包</p>

      <h3>添加一个npm脚本：</h3>
      <p>在 package.json 中添加 "build": "webpack"，就可以使用 npm run build 来替代 npx webpack。</p>
    </section>
    <section>
      <h2>使用webpack管理资源</h2>
      <h3>概念：</h3>
      <p>动态打包(dynamically bundle)所有依赖项。将避免打包未使用的模块。</p>

      <h3>管理css资源：</h3>
      <p>代码在 index02.html 和 style.css 和 index.js 中</p>
      <p>（1）安装：npm install --save-dev style-loader css-loader</p>
      <p>（2）配置：在 webpack.config.js 中，<pre><code>+   module: {
+     rules: [
+       {
+         test: /\.css$/,
+         use: [
+           'style-loader',
+           'css-loader'
+         ]
+       }
+     ]
+   }</code></pre></p>

      <h3>管理图片资源</h3>
      <p>在 index02.html 和 index.js 中</p>
      <p>（1）安装：npm install --save-dev file-loader</p>
      <p>（2）配置：<pre><code>+       {
+         test: /\.(png|svg|jpg|gif)$/,
+         use: [
+           'file-loader'
+         ]
+       }</code></pre></p>

    <h3>加载字体资源</h3>
    <p>file-loader 和 url-loader 可以接收并加载任何文件，然后将其输出到构建目录。
      这就是说，我们可以将它们用于任何类型的文件，包括字体。</p>
    <p>（1）安装：和图片资源一样，安装 file-loader</p>
    <p>（2）配置：<pre><code>+       {
+         test: /\.(woff|woff2|eot|ttf|otf)$/,
+         use: [
+           'file-loader'
+         ]
+       }</code></pre></p>

    <h3>加载数据</h3>
    <p>（1）json：JSON 支持是内置的，不用安装，直接import Data from './data.json'即可引入</p>
    <p>（2）CSV、TSV：【安装】：npm install --save-dev csv-loader</p>
    <p>（3）XML：【安装】：npm install --save-dev xml-loader</p>
    <p>（4）配置：<pre><code>+       {
+         test: /\.(csv|tsv)$/,
+         use: [
+           'csv-loader'
+         ]
+       },
+       {
+         test: /\.xml$/,
+         use: [
+           'xml-loader'
+         ]
+       }</code></pre></p>
    </section>
    

  </article>
</template>

<script>
export default {
  name: 'webpackStart',
  data() {
    return {
      createTime: '2019-03-20 16:57:00'
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
