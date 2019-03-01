const operateObj = []
const data = [
  { name: 'vueAddObj', title: 'vue 动态添加对象属性' },
  { name: 'vueDeleteObj', title: 'vue 删除对象属性' }
]
data.forEach(el => {
  operateObj.push({
    path: `/${el.name}`,
    name: `${el.name}`,
    component: () => import('@/components/base'),
    meta: {
      title: `${el.title}`,
      type: 'operateObj'
    },
    redirect: `/${el.name}/${el.name}Index`,
    children: [
      {
        path: `${el.name}Index`,
        name: `${el.name}Index`,
        component: () => import(`@/views/vuejs/operateObj/${el.name}`)
      }
    ]
  })
})

export {
  operateObj
}
