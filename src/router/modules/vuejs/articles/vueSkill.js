const vueSkill = []
const data = [
  { name: 'keepaliveUsing', title: '动态使用keepalive' },
  { name: 'elscrollbar', title: '使用element的el-scrollbar' },
]
data.forEach(el => {
  vueSkill.push({
    path: `/${el.name}`,
    name: `${el.name}`,
    component: () => import('@/components/base'),
    meta: {
      title: `${el.title}`,
      type: 'vueSkill'
    },
    redirect: `/${el.name}/${el.name}Index`,
    children: [
      {
        path: `${el.name}Index`,
        name: `${el.name}Index`,
        component: () => import(`@/views/vuejs/vueSkill/${el.name}`)
      }
    ]
  })
})
export {
  vueSkill
}


