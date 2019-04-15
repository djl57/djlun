const ECS = []
const data = [
  { name: 'ecsStart', title: 'start' },
]
data.forEach(el => {
  ECS.push({
    path: `/${el.name}`,
    name: `${el.name}`,
    component: () => import('@/components/base'),
    meta: {
      title: `${el.title}`,
      type: 'ECS'
    },
    redirect: `/${el.name}/${el.name}Index`,
    children: [
      {
        path: `${el.name}Index`,
        name: `${el.name}Index`,
        component: () => import(`@/views/nodejs/ECS/${el.name}`)
      }
    ]
  })
})
export {
  ECS
}
