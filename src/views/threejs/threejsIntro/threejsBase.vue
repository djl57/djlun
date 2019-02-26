<template>
  <article class="app-box">
    <header>
      <h1>读threejs文档记录</h1>
      <p>转载自 http://www.hewebgl.com</p>
    </header>
    <h2>咨询邮箱：</h2>
    <p><a href="mailto:1805691606@qq.com">1805691606@qq.com</a> ,<a href="mailto:hewebgl@qq.com">hewebgl@qq.com</a> ,<a href="mailto:hewebgl3@qq.com">hewebgl3@qq.com</a></p>
    <h2>three.js github地址：</h2>
    <p><a href="https://github.com/mrdoob/three.js">https://github.com/mrdoob/three.js</a></p>
    <h2>项目目录结构：</h2>
    <ol>
      <li v-for="item in catalogs" :key="item">{{ item }}</li>
    </ol>
  </article>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      createTime: '2019-02-26 15:28:00',
      catalogs: [
        'Build目录：包含两个文件，three.js 和three.min.js 。这是three.js最终被引用的文件。一个已经压缩，一个没有压缩的js文件。',
        'Docs目录：这里是three.js的帮助文档，里面是各个函数的api，可惜并没有详细的解释。试图用这些文档来学会three.js是不可能的。',
        'Editor目录：一个类似3D-max的简单编辑程序，它能创建一些三维物体。',
        'Examples目录：一些很有趣的例子demo，可惜没有文档介绍。对图像学理解不深入的同学，学习成本非常高。',
        'Src目录：源代码目录，里面是所有源代码。',
        'Test目录：一些测试代码，基本没用。',
        'Utils目录：存放一些脚本，python文件的工具目录。例如将3D-Max格式的模型转换为three.js特有的json模型。',
        '.gitignore文件：git工具的过滤规则文件，没有用。',
        'CONTRIBUTING.md文件：一个怎么报bug，怎么获得帮助的说明文档。',
        'LICENSE文件：版权信息。',
        'README.md文件：介绍three.js的一个文件，里面还包含了各个版本的更新内容列表。'
      ]
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
