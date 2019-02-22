const AAT = [
  {
    path: '/inference',
    name: 'inference',
    component: () => import('@/components/base'),
    meta: {
      title: '判断推理',
      type: 'AAT'
    },
    redirect: '/inference/inferenceIndex',
    children: [
      {
        path: 'inferenceIndex',
        name: 'inferenceIndex',
        component: () => import('@/views/civilServant/AAT/inference')
      }
    ]
  },
  {
    path: '/commonSense',
    name: 'commonSense',
    component: () => import('@/components/base'),
    meta: {
      title: '常识判断',
      type: 'AAT'
    },
    redirect: '/commonSense/commonSenseIndex',
    children: [
      {
        path: 'commonSenseIndex',
        name: 'commonSenseIndex',
        component: () => import('@/views/civilServant/AAT/commonSense')
      }
    ]
  },
  {
    path: '/speechComprehension',
    name: 'speechComprehension',
    component: () => import('@/components/base'),
    meta: {
      title: '言语理解与表达',
      type: 'AAT'
    },
    redirect: '/speechComprehension/speechComprehensionIndex',
    children: [
      {
        path: 'speechComprehensionIndex',
        name: 'speechComprehensionIndex',
        component: () => import('@/views/civilServant/AAT/speechComprehension')
      }
    ]
  },
  {
    path: '/numericalRelationship',
    name: 'numericalRelationship',
    component: () => import('@/components/base'),
    meta: {
      title: '数量关系',
      type: 'AAT'
    },
    redirect: '/numericalRelationship/numericalRelationshipIndex',
    children: [
      {
        path: 'numericalRelationshipIndex',
        name: 'numericalRelationshipIndex',
        component: () => import('@/views/civilServant/AAT/numericalRelationship')
      }
    ]
  },
  {
    path: '/dataAnalysis',
    name: 'dataAnalysis',
    component: () => import('@/components/base'),
    meta: {
      title: '资料分析',
      type: 'AAT'
    },
    redirect: '/dataAnalysis/dataAnalysisIndex',
    children: [
      {
        path: 'dataAnalysisIndex',
        name: 'dataAnalysisIndex',
        component: () => import('@/views/civilServant/AAT/dataAnalysis')
      }
    ]
  },
]
export {
  AAT
}
