const htmlGeneralKnowledge = [
  {
    path: '/character',
    name: 'character',
    component: () => import('@/components/base'),
    meta: {
      title: '字符实体显示',
      type: 'htmlGeneralKnowledge'
    },
    redirect: '/character/characterIndex',
    children: [
      {
        path: 'characterIndex',
        name: 'characterIndex',
        component: () => import('@/views/html/character')
      }
    ]
  }
]
export {
  htmlGeneralKnowledge
}
