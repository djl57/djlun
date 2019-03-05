const jsIntro = []
const data = [
  { name: 'jsDataType', title: 'js 数据类型' },
  { name: 'monishixian', title: 'call、apply、bind、new的模拟实现' }
]
data.forEach(el => {
  jsIntro.push({
    path: `/${el.name}`,
    name: `${el.name}`,
    component: () => import('@/components/base'),
    meta: {
      title: `${el.title}`,
      type: 'jsIntro'
    },
    redirect: `/${el.name}/${el.name}Index`,
    children: [
      {
        path: `${el.name}Index`,
        name: `${el.name}Index`,
        component: () => import(`@/views/javascript/jsIntro/${el.name}`)
      }
    ]
  })
})
export {
  jsIntro
}
