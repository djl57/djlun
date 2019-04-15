const vscode = []
const data = [
  { name: 'vscodevue', title: 'vscode快速新建vue模板' },
]
data.forEach(el => {
  vscode.push({
    path: `/${el.name}`,
    name: `${el.name}`,
    component: () => import('@/components/base'),
    meta: {
      title: `${el.title}`,
      type: 'vscode'
    },
    redirect: `/${el.name}/${el.name}Index`,
    children: [
      {
        path: `${el.name}Index`,
        name: `${el.name}Index`,
        component: () => import(`@/views/javascript/vscode/${el.name}`)
      }
    ]
  })
})

export {
  vscode
}
