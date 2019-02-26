const threejsIntro = [
  {
    path: '/threejsIntroBase',
    name: 'threejsIntroBase',
    component: () => import('@/components/base'),
    meta: {
      title: 'three.js 基础',
      type: 'threejsIntro'
    },
    redirect: '/threejsIntroBase/threejsIntroBaseIndex',
    children: [
      {
        path: 'threejsIntroBaseIndex',
        name: 'threejsIntroBaseIndex',
        component: () => import('@/views/threejs/threejsIntro/threejsBase')
      }
    ]
  }
]
export {
  threejsIntro
}
