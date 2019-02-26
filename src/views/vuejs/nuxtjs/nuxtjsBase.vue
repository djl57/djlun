<template>
  <div>
    <!-- <aside :class="aside? 'aside':'none-aside'">
      <h1 @click="showAside">{{ catalog }}</h1>
      <ol>
        <li v-for="item in catalogs" :key="item.id">
          <a :href="'#'+item.id">{{ item.text }}</a>
        </li>
      </ol>
    </aside> -->
    <table>
      <tr>
        <th>别名</th>
        <th>目录</th>
      </tr>
      <tr>
        <td>~ 或 @</td>
        <td>src目录</td>
      </tr>
      <tr>
        <td>~~ 或 @@</td>
        <td>根目录</td>
      </tr>
    </table>
    <p>默认情况下，src目录和根目录相同</p>

# 路由
<!-- 要在页面之间使用路由，使用```<nuxt-link>``` 标签。 -->

例如:
``` js
<!-- <template>
  <nuxt-link to="/">首页</nuxt-link>
</template> -->
```
## 基础路由
假设 pages 的目录结构如下：
``` 
pages/
--| user/
-----| index.vue
-----| one.vue
--| index.vue
```
那么，Nuxt.js 自动生成的路由配置如下：
``` js
router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'user',
      path: '/user',
      component: 'pages/user/index.vue'
    },
    {
      name: 'user-one',
      path: '/user/one',
      component: 'pages/user/one.vue'
    }
  ]
}
```
## 动态路由
在 Nuxt.js 里面定义带参数的动态路由，需要创建对应的以下划线作为前缀的 Vue 文件 或 目录。

以下目录结构：
``` js
pages/
--| _slug/
-----| comments.vue
-----| index.vue
--| users/
-----| _id.vue
--| index.vue
Nuxt.js 生成对应的路由配置表为：
```
``` js
router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'users-id',
      path: '/users/:id?',
      component: 'pages/users/_id.vue'
    },
    {
      name: 'slug',
      path: '/:slug',
      component: 'pages/_slug/index.vue'
    },
    {
      name: 'slug-comments',
      path: '/:slug/comments',
      component: 'pages/_slug/comments.vue'
    }
  ]
}
```
你会发现名称为 users-id 的路由路径带有 :id? 参数，表示该路由是可选的。如果你想将它设置为必选的路由，需要在 users/_id 目录内创建一个 index.vue 文件。

## 路由参数校验
Nuxt.js 可以让你在动态路由组件中定义参数校验方法。

举个例子： pages/users/_id.vue
``` js
export default {
  validate ({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id)
  }
}
```
如果校验方法返回的值不为 true或Promise中resolve 解析为false或抛出Error ， Nuxt.js 将自动加载显示 404 错误页面或 500 错误页面。

## 嵌套路由
你可以通过 vue-router 的子路由创建 Nuxt.js 应用的嵌套路由。

创建内嵌子路由，你需要添加一个 Vue 文件，同时添加一个与该文件同名的目录用来存放子视图组件。

<!-- Warning: 别忘了在父组件(.vue文件) 内增加 <nuxt-child/> 用于显示子视图内容。 -->

假设文件结构如：
``` js
pages/
--| users/
-----| _id.vue
-----| index.vue
--| users.vue
```
Nuxt.js 自动生成的路由配置如下：
``` js
router: {
  routes: [
    {
      path: '/users',
      component: 'pages/users.vue',
      children: [
        {
          path: '',
          component: 'pages/users/index.vue',
          name: 'users'
        },
        {
          path: ':id',
          component: 'pages/users/_id.vue',
          name: 'users-id'
        }
      ]
    }
  ]
}
```
## 动态嵌套路由
这个应用场景比较少见，但是 Nuxt.js 仍然支持：在动态路由下配置动态子路由。

假设文件结构如下：
``` js
pages/
--| _category/
-----| _subCategory/
--------| _id.vue
--------| index.vue
-----| _subCategory.vue
-----| index.vue
--| _category.vue
--| index.vue
```
Nuxt.js 自动生成的路由配置如下：
``` js
router: {
  routes: [
    {
      path: '/',
      component: 'pages/index.vue',
      name: 'index'
    },
    {
      path: '/:category',
      component: 'pages/_category.vue',
      children: [
        {
          path: '',
          component: 'pages/_category/index.vue',
          name: 'category'
        },
        {
          path: ':subCategory',
          component: 'pages/_category/_subCategory.vue',
          children: [
            {
              path: '',
              component: 'pages/_category/_subCategory/index.vue',
              name: 'category-subCategory'
            },
            {
              path: ':id',
              component: 'pages/_category/_subCategory/_id.vue',
              name: 'category-subCategory-id'
            }
          ]
        }
      ]
    }
  ]
}
```
## SPA fallback
您也可以为动态路由启用SPA fallback。在使用mode:'spa'模式下，Nuxt.js将输出一个与index.html相同的额外文件。如果没有文件匹配，大多数静态托管服务可以配置为使用SPA模板。生成文件不包含头信息或任何HTML，但它仍将解析并加载API中的数据。

我们在nuxt.config.js文件中启用它：
``` js
export default {
  generate: {
    fallback: true, // if you want to use '404.html'
    fallback: 'my-fallback/file.html' // if your hosting needs a custom location
  }
}
```
# 过渡动效
<!-- Nuxt.js 使用 Vue.js 的```<transition>```组件来实现路由切换时的过渡动效。 -->

## 全局过渡动效设置
Nuxt.js 默认使用的过渡效果名称为 page

如果想让每一个页面的切换都有淡出 (fade) 效果，我们需要创建一个所有路由共用的 CSS 文件。所以我们可以在 assets/ 目录下创建这个文件：

在全局样式文件 assets/main.css 里添加一下样式：
``` css
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-active {
  opacity: 0;
}
```
然后添加到 nuxt.config.js 文件中：
``` js
module.exports = {
  css: [
    'assets/main.css'
  ]
}
```

## 页面过渡动效设置
如果想给某个页面自定义过渡特效的话，只要在该页面组件中配置 transition 字段即可：

在全局样式 assets/main.css 中添加一下内容：
``` css
.test-enter-active, .test-leave-active {
  transition: opacity .5s;
}
.test-enter, .test-leave-active {
  opacity: 0;
}
```
然后我们将页面组件中的 transition 属性的值设置为 test 即可：
``` js
export default {
  transition: 'test'
}
```

# 中间件
中间件允许您定义一个自定义函数运行在一个页面或一组页面渲染之前。

每一个中间件应放置在 middleware/ 目录。文件名的名称将成为中间件名称(middleware/auth.js将成为 auth 中间件)。

一个中间件接收 context 作为第一个参数：
``` js
export default function (context) {
  context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
}
```
中间件执行流程顺序：

1. nuxt.config.js
2. 匹配布局
3. 匹配页面

中间件可以异步执行,只需要返回一个 Promise 或使用第2个 callback 作为第一个参数：

middleware/stats.js
``` js
import axios from 'axios'

export default function ({ route }) {
  return axios.post('http://my-stats-api.com', {
    url: route.fullPath
  })
}
```
然后在你的 nuxt.config.js 、 layouts 或者 pages 中使用中间件:

nuxt.config.js
``` js
module.exports = {
  router: {
    middleware: 'stats'
  }
}
```
stats 中间件将在每个路由改变时被调用。

# 布局
Nuxt.js 允许你扩展默认的布局，或在 layout 目录下创建自定义的布局。

## 默认布局
可通过添加 layouts/default.vue 文件来扩展应用的默认布局。

<!-- 别忘了在布局文件中添加 ```<nuxt/> ```组件用于显示页面的主体内容。 -->

默认布局的源码如下：
``` html
<!-- <template>
  <nuxt/>
</template> -->
```
## 错误页面
你可以通过编辑 layouts/error.vue 文件来定制化错误页面.

<!-- 这个布局文件不需要包含 ```<nuxt/>``` 标签。你可以把这个布局文件当成是显示应用错误（404，500等）的组件。 -->

默认的错误页面源码在 [这里](https://github.com/nuxt/nuxt.js/blob/dev/packages/vue-app/template/components/nuxt-error.vue).

举一个个性化错误页面的例子 layouts/error.vue:
``` html
<!-- <template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">页面不存在</h1>
    <h1 v-else>应用发生错误异常</h1>
    <nuxt-link to="/">首 页</nuxt-link>
  </div>
</template> -->
```
``` js
<!-- <script>
export default {
  props: ['error'],
  layout: 'blog' // 你可以为错误页面指定自定义的布局
}
</script> -->
```
## 个性化布局
layouts 根目录下的所有文件都属于个性化布局文件，可以在页面组件中利用 layout 属性来引用。

<!-- 请确保在布局文件里面增加 ```<nuxt/>``` 组件用于显示页面非布局内容。 -->

举个例子 layouts/blog.vue:
``` js
<!-- <template>
  <div>
    <div>这里是博客导航</div>
    <nuxt/>
  </div>
</template> -->
```
在 pages/posts.vue 里， 可以指定页面组件使用 blog 布局。
``` js
<!-- <script>
export default {
  layout: 'blog'
}
</script> -->
```

## 页面
页面组件实际上是 Vue 组件，只不过 Nuxt.js 为这些组件添加了一些特殊的配置项（对应 Nuxt.js 提供的功能特性）以便你能快速开发通用应用。
``` js
<!-- <template>
  <h1 class="red">Hello {{ name }}!</h1>
</template>

<script> -->
export default {
  asyncData (context) {
    // called every time before loading the component
    return { name: 'World' }
  },
  fetch () {
    // The fetch method is used to fill the store before rendering the page
  },
  head () {
    // Set Meta Tags for this Page
  },
  // and more functionality to discover
  ...
}
<!-- </script> -->

<!-- <style>
.red {
  color: red;
}
</style> -->
```
Nuxt.js 为页面提供的特殊配置项：

|属性名|	描述|
|--|--|
|asyncData|	最重要的一个键, 支持 异步数据处理，另外该方法的第一个参数为当前页面组件的 上下文对象。|
|fetch|	与 asyncData 方法类似，用于在渲染页面之前获取数据填充应用的状态树（store）。不同的是 fetch 方法不会设置组件的数据。详情请参考 关于fetch方法的文档。|
|head|	配置当前页面的 Meta 标签, 详情参考 页面头部配置API。|
|layout|	指定当前页面使用的布局（layouts 根目录下的布局文件）。详情请参考 关于 布局 的文档。|
|loading|	如果设置为false，则阻止页面自动调用this.$nuxt.$loading.finish()和this.$nuxt.$loading.start(),您可以手动控制它,请看例子,仅适用于在nuxt.config.js中设置loading的情况下。请参考API配置 loading 文档。|
|transition|	指定页面切换的过渡动效, 详情请参考 页面过渡动效。|
|scrollToTop|	布尔值，默认: false。 用于判定渲染页面前是否需要将当前页面滚动至顶部。这个配置用于 嵌套路由的应用场景。|
|validate|	校验方法用于校验 动态路由的参数。|
|middleware|	指定页面的中间件，中间件会在页面渲染之前被调用， 请参考 路由中间件。|

## 默认 Meta 标签
Nuxt.js 允许你在 nuxt.config.js 里定义应用所需的所有默认 meta 标签，在 head 字段里配置就可以了：

一个使用自定义 viewport 和 谷歌字体 的配置示例：
``` js
head: {
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
  ]
}
```

## asyncData 方法
asyncData方法会在组件（限于页面组件）每次加载之前被调用。它可以在服务端或路由更新之前被调用。 在这个方法被调用的时候，第一个参数被设定为当前页面的上下文对象，你可以利用 asyncData方法来获取数据，Nuxt.js 会将 asyncData 返回的数据融合组件 data 方法返回的数据一并返回给当前组件。

注意：由于asyncData方法是在组件 初始化 前被调用的，所以在方法内是没有办法通过 this 来引用组件的实例对象。
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: '',
  data() {
    return {
      aside: false,
      catalog: '目录',
      catalogs: [
        {id: 'ca1', text: '别名'},
        {id: 'ca2', text: '路由', children: [
          {id: 'ca2-ro1', text: '基础路由'},
          {id: 'ca2-ro2', text: '动态路由'},
          {id: 'ca2-ro2', text: '路由参数校验'},
          {id: 'ca2-ro2', text: '嵌套路由'},
          {id: 'ca2-ro2', text: '动态嵌套路由'},
        ]},
        {id: 'ca3', text: '过渡动效', children: [
          {id: 'ca3-ro1', text: '全局过渡动效设置'},
          {id: 'ca3-ro2', text: '页面过渡动效设置'},
        ]},
        {id: 'ca4', text: '中间件'},
        {id: 'ca5', text: '布局'},
        {id: 'ca1', text: '别名'},
        {id: 'ca1', text: '别名'},
        {id: 'ca1', text: '别名'},
        {id: 'ca1', text: '别名'},
        {id: 'ca1', text: '别名'},
        {id: 'ca1', text: '别名'},
      ]
    }
  },
  components: {
    
  },
  mounted() {
    this.getList()
  },
  computed: {
    ...mapGetters([
      'firstLevel',
      'secondLevel',
      'articleTitle'
    ])
  },
  methods: {
    getList() {
      this.$store.dispatch('GetList')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
