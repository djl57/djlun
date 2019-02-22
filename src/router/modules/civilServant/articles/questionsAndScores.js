const questionsAndScores = [
  {
    path: '/AATScores',
    name: 'AATScores',
    component: () => import('@/components/base'),
    meta: {
      title: '得分记录',
      type: 'questionsAndScores'
    },
    redirect: '/AATScores/AATScoresIndex',
    children: [
      {
        path: 'AATScoresIndex',
        name: 'AATScoresIndex',
        component: () => import('@/views/civilServant/questionsAndScores/AATScores')
      }
    ]
  }
]
export {
  questionsAndScores
}
