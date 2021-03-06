const vueEventHandling = []
const data = [
  { name: 'inputFacus', title: 'input 获取焦点和失去焦点' },
  { name: 'vueWatchKey', title: 'vue 监听键盘事件' }
]
data.forEach(el => {
  vueEventHandling.push({
    path: `/${el.name}`,
    name: `${el.name}`,
    component: () => import('@/components/base'),
    meta: {
      title: `${el.title}`,
      type: 'vueEventHandling'
    },
    redirect: `/${el.name}/${el.name}Index`,
    children: [
      {
        path: `${el.name}Index`,
        name: `${el.name}Index`,
        component: () => import(`@/views/vuejs/vueEventHandling/${el.name}`)
      }
    ]
  })
})
export {
  vueEventHandling
}
