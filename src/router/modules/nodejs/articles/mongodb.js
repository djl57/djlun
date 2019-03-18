const mongodb = []
const data = [
  { name: 'quickStart', title: 'Quick Start' },
  { name: 'tutorials', title: 'Tutorials' },
]
data.forEach(el => {
  mongodb.push({
    path: `/${el.name}`,
    name: `${el.name}`,
    component: () => import('@/components/base'),
    meta: {
      title: `${el.title}`,
      type: 'mongodb'
    },
    redirect: `/${el.name}/${el.name}Index`,
    children: [
      {
        path: `${el.name}Index`,
        name: `${el.name}Index`,
        component: () => import(`@/views/nodejs/mongodb/${el.name}`)
      }
    ]
  })
})
export {
  mongodb
}
