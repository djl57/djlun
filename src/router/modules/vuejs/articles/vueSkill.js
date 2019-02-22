const vueSkill = [
  {
    path: '/keepaliveUsing',
    name: 'keepaliveUsing',
    component: () => import('@/components/base'),
    meta: {
      title: 'keep-alive动态使用',
      type: 'vueSkill'
    },
    redirect: '/keepaliveUsing/keepaliveUsingIndex',
    children: [
      {
        path: 'keepaliveUsingIndex',
        name: 'keepaliveUsingIndex',
        component: () => import('@/views/vuejs/vueSkill/keepaliveUsing')
      }
    ]
  },
]
export {
  vueSkill
}
