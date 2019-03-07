const AAT = []
const data = [
  { name: 'inference', title: '判断推理' },
  { name: 'commonSense', title: '常识判断' },
  { name: 'speechComprehension', title: '言语理解与表达' },
  { name: 'numericalRelationship', title: '数量关系' },
  { name: 'dataAnalysis', title: '资料分析' },
  { name: 'aatKeyWords', title: '宠词' },
]
data.forEach(el => {
  AAT.push({
    path: `/${el.name}`,
    name: `${el.name}`,
    component: () => import('@/components/base'),
    meta: {
      title: `${el.title}`,
      type: 'AAT'
    },
    redirect: `/${el.name}/${el.name}Index`,
    children: [
      {
        path: `${el.name}Index`,
        name: `${el.name}Index`,
        component: () => import(`@/views/civilServant/AAT/${el.name}`)
      }
    ]
  })
})
export {
  AAT
}
