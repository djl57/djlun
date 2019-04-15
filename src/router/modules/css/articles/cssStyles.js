const datas = [
  { name: 'vetically', title: '垂直居中' },
  { name: 'cssTransformMatrix', title: 'transform: matrix()' },
  { name: 'cssFlex', title: 'flex' },
  { name: 'suspensionPonits', title: '省略号' },
  { name: 'textIndent', title: '段落前面空2格' },
  { name: 'mobile1px', title: '移动端1px' },
  { name: 'notFirstLastChild', title: '样式第一个和最后一个不选中' },
  { name: 'cssArrow', title: '纯css画箭头' },
]
const cssStyles = []
datas.forEach(el => {
  cssStyles.push({
    path: `/${el.name}`,
    name: el.name,
    component: () => import('@/components/base'),
    meta: {
      title: el.title,
      type: 'cssStyles'
    },
    redirect: `/${el.name}/${el.name}Index`,
    children: [
      {
        path: `${el.name}Index`,
        name: `${el.name}Index`,
        component: () => import(`@/views/css/cssStyles/${el.name}`)
      }
    ]
  })
})

export {
  cssStyles
}
