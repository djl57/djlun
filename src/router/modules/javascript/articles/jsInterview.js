const jsInterview = []
const data = [
  { name: 'jsClass', title: 'class、构造函数' },
  { name: 'jsCopy', title: '克隆' },
  { name: 'jsGetType', title: '封装getType函数' },
  { name: 'jsProtoType', title: '原型、原型链' },
  { name: 'jsCreateObj', title: '创建对象的多种方式以及优缺点' },
  { name: 'jsInherit', title: '继承的多种方式和优缺点' },
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
