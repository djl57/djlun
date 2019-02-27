const morningRead = []
const datas = [
  { name: 'sixAdvances', title: '六项精进大纲' },
  { name: 'daxue', title: '大学开篇' },
  { name: 'SevenPrinciplesOfAccounting', title: '会计七原则' },
  { name: 'twelveOperations', title: '经营十二条' },
  { name: 'analectsLearning', title: '论语·学而' },
  { name: 'taoteching', title: '道德经' },
  { name: 'theMean', title: '中庸' }
]
datas.forEach(el => {
  morningRead.push({
    path: `/${el.name}`,
    name: `${el.name}`,
    component: () => import('@/views/puChuang/morningBooks'),
    meta: {
      title: el.title,
      type: 'morningRead'
    }
  })
})

export {
  morningRead
}
