const datas = [
  { name: 'textareaRecordWords', title: 'textarea记录字数' },
]
const htmlActions = []
datas.forEach(el => {
  htmlActions.push({
    path: `/${el.name}`,
    name: el.name,
    component: () => import('@/components/base'),
    meta: {
      title: el.title,
      type: 'htmlActions'
    },
    redirect: `/${el.name}/${el.name}Index`,
    children: [
      {
        path: `${el.name}Index`,
        name: `${el.name}Index`,
        component: () => import(`@/views/html/htmlActions/${el.name}`)
      }
    ]
  })
})

export {
  htmlActions
}
