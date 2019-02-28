const datas = [
  { name: 'arrayUnique', title: '数组去重' },
  { name: 'slicePart', title: '截取数组的一部分' },
]
const jsArray = []
datas.forEach(el => {
  jsArray.push({
    path: `/${el.name}`,
    name: el.name,
    component: () => import('@/components/base'),
    meta: {
      title: el.title,
      type: 'jsArray'
    },
    redirect: `/${el.name}/${el.name}Index`,
    children: [
      {
        path: `${el.name}Index`,
        name: `${el.name}Index`,
        component: () => import(`@/views/javascript/jsArray/${el.name}`)
      }
    ]
  })
})

export {
  jsArray
}
