const cssStyles = [
  {
    path: '/suspensionPonits',
    name: 'suspensionPonits',
    component: () => import('@/components/base'),
    meta: {
      title: '省略号',
      type: 'cssStyles'
    },
    redirect: '/suspensionPonits/suspensionPonitsIndex',
    children: [
      {
        path: 'suspensionPonitsIndex',
        name: 'suspensionPonitsIndex',
        component: () => import('@/views/css/suspensionPonits')
      }
    ]
  },
  {
    path: '/textIndent',
    name: 'textIndent',
    component: () => import('@/components/base'),
    meta: {
      title: '段落前面空2格',
      type: 'cssStyles'
    },
    redirect: '/textIndent/textIndentIndex',
    children: [
      {
        path: 'textIndentIndex',
        name: 'textIndentIndex',
        component: () => import('@/views/css/textIndent')
      }
    ]
  },
]

export {
  cssStyles
}
