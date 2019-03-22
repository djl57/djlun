const txMap = []
const data = [
  { name: 'txMapstart', title: 'start' },
]
data.forEach(el => {
  txMap.push({
    path: `/${el.name}`,
    name: `${el.name}`,
    component: () => import('@/components/base'),
    meta: {
      title: `${el.title}`,
      type: 'txMap'
    },
    redirect: `/${el.name}/${el.name}Index`,
    children: [
      {
        path: `${el.name}Index`,
        name: `${el.name}Index`,
        component: () => import(`@/views/javascript/txMap/${el.name}`)
      }
    ]
  })
})
export {
  txMap
}
