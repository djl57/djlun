const wechatGames = []
const data = [
  { name: 'wechatgamestart', title: 'start' },
]
data.forEach(el => {
  wechatGames.push({
    path: `/${el.name}`,
    name: `${el.name}`,
    component: () => import('@/components/base'),
    meta: {
      title: `${el.title}`,
      type: 'wechatGames'
    },
    redirect: `/${el.name}/${el.name}Index`,
    children: [
      {
        path: `${el.name}Index`,
        name: `${el.name}Index`,
        component: () => import(`@/views/javascript/wechatGames/${el.name}`)
      }
    ]
  })
})
export {
  wechatGames
}
