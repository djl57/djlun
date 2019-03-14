const vueSourse = []
const data = [
  { name: 'vueSourse1', title: 'vue源码之v-model' }
]
for (let prop of data) {
  vueSourse.push({
    path: `/${prop.name}`,
    name: `${prop.name}`,
    component: () => import('@/components/base'),
    meta: {
      title: prop.title,
      type: 'vueSourse'
    },
    redirect: `/${prop.name}/${prop.name}Index`,
    children: [
      {
        path: `${prop.name}Index`,
        name: `${prop.name}Index`,
        component: () => import(`@/views/vuejs/vueSourse/${prop.name}`)
      }
    ]
  })
}
export {
  vueSourse
}
