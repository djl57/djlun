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
  },
  {
    path: '/geometricSummary',
    name: 'geometricSummary',
    component: () => import('@/components/base'),
    meta: {
      title: '几何结论总结',
      type: 'questionsAndScores'
    },
    redirect: '/geometricSummary/geometricSummaryIndex',
    children: [
      {
        path: 'geometricSummaryIndex',
        name: 'geometricSummaryIndex',
        component: () => import('@/views/civilServant/questionsAndScores/geometricSummary')
      }
    ]
  }
]
export {
  questionsAndScores
}
