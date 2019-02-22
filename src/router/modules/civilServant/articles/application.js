const application = [
  {
    path: '/applications',
    name: 'applications',
    component: () => import('@/components/base'),
    meta: {
      title: 'css 基础',
      type: 'application'
    },
    redirect: '/applications/applicationsIndex',
    children: [
      {
        path: 'applicationsIndex',
        name: 'applicationsIndex',
        component: () => import('@/views/civilServant/application/applications')
      }
    ]
  }
]
export {
  application
}
