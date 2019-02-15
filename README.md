# djlun

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

创建一级标题的步骤：
1、 在 modules 中新建一个 js 文件，将路由写在文件中即可，需在 meta 中设置 level 为 1
2、 一级标题的 component 设为 `component: () => import('@/views/home/firstTitle'),`

创建二级标题的步骤
1、 二级标题属于哪个以及标题？写到那个以及标题所在的文件中去，并将 meta.type 设为该一级标题的 name， 在 meta 中设置 level 为 2
2、 二级标题的 component 设为 `component: () => import('@/views/home/secondTitle'),`

增加一篇文章的步骤：
1、 文章属于哪个一级标题？写到那个一级标题路由所在的文件中去，如果没有则新创建一个路由文件
2、 文章属于哪个二级标题？将该文章路由的 meta.type 设为该二级标题的 name
