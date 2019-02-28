const detailedSpeech = [
  {
    path: '/detailedSpeech1',
    name: 'detailedSpeech1',
    component: () => import('@/components/base'),
    meta: {
      title: 'css 基础',
      type: 'detailedSpeech'
    },
    redirect: '/detailedSpeech1/detailedSpeech1Index',
    children: [
      // {
      //   path: 'cssBaseIndex',
      //   name: 'cssBaseIndex',
      //   component: () => import('@/views/css/htmlBase')
      // }
    ]
  }
]
export {
  detailedSpeech
}
