const re = /\.\/(.*)\.js/
let res = (r => {
  return r.keys().map(key => r(key)[key.match(re)[1]]);
})(require.context('./articles', false, /\.js$/))
let [AAT, application, baseIntro, detailedSpeech, govgongbao, questionsAndScores] = res

let route = [
  {
    path: '/civilServant',
    name: 'civilServant',
    component: () => import('@/views/home/firstTitle'),
    meta: {
      title: '公务员',
      level: 1,
    }
  }
]
const datas = [
  { name: 'AAT', title: '行测' },
  { name: 'application', title: '申论' },
  { name: 'baseIntro', title: '介绍' },
  { name: 'questionsAndScores', title: '试题及得分' },
  // { name: 'govgongbao', title: '国务院公报' },
  // { name: 'detailedSpeech', title: '习近平讲话详解' },
]
datas.forEach(el => {
  route.push({
    path: `/${el.name}`,
    name: el.name,
    component: () => import('@/views/home/secondTitle'),
    meta: {
      title: el.title,
      level: 2,
      type: 'civilServant'
    }
  })
})
route.push(...AAT)
route.push(...application)
route.push(...baseIntro)
route.push(...questionsAndScores)
route.push(...govgongbao)
route.push(...detailedSpeech)

export {
  route
}