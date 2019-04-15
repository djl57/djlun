const datas = [
  { name: 'echarts1', title: 'Echarts问题解决汇总' },
]
const echarts = []
datas.forEach(el => {
  echarts.push({
    path: `/${el.name}`,
    name: el.name,
    component: () => import('@/components/base'),
    meta: {
      title: el.title,
      type: 'echarts'
    },
    redirect: `/${el.name}/${el.name}Index`,
    children: [
      {
        path: `${el.name}Index`,
        name: `${el.name}Index`,
        component: () => import(`@/views/javascript/echarts/${el.name}`)
      }
    ]
  })
})

export {
  echarts
}
