const jsInterview = []

const data = [
  { name: 'jsCopy', title: '克隆' },
  { name: 'jsGetType', title: '封装getType函数' },
  { name: 'jsProtoType', title: '原型、原型链' },
]
data.forEach(el => {
  jsInterview.push({
    path: `/${el.name}`,
    name: `${el.name}`,
    component: () => import('@/components/base'),
    meta: {
      title: `${el.title}`,
      type: 'jsInterview'
    },
    redirect: `/${el.name}/${el.name}Index`,
    children: [
      {
        path: `${el.name}Index`,
        name: `${el.name}Index`,
        component: () => import(`@/views/javascript/jsInterview/${el.name}`)
      }
    ]
  })
})

export {
  jsInterview
}
