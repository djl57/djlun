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
        component: () => import('@/views/css/cssStyles/suspensionPonits')
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
        component: () => import('@/views/css/cssStyles/textIndent')
      }
    ]
  },
  {
    path: '/mobile1px',
    name: 'mobile1px',
    component: () => import('@/components/base'),
    meta: {
      title: '移动端1px',
      type: 'cssStyles'
    },
    redirect: '/mobile1px/mobile1pxIndex',
    children: [
      {
        path: 'mobile1pxIndex',
        name: 'mobile1pxIndex',
        component: () => import('@/views/css/cssStyles/mobile1px')
      }
    ]
  },
  {
    path: '/notFirstLastChild',
    name: 'notFirstLastChild',
    component: () => import('@/components/base'),
    meta: {
      title: '样式第一个和最后一个不选中',
      type: 'cssStyles'
    },
    redirect: '/notFirstLastChild/notFirstLastChildIndex',
    children: [
      {
        path: 'notFirstLastChildIndex',
        name: 'notFirstLastChildIndex',
        component: () => import('@/views/css/cssStyles/notFirstLastChild')
      }
    ]
  },
  {
    path: '/cssArrow',
    name: 'cssArrow',
    component: () => import('@/components/base'),
    meta: {
      title: '纯css画箭头',
      type: 'cssStyles'
    },
    redirect: '/cssArrow/cssArrowIndex',
    children: [
      {
        path: 'cssArrowIndex',
        name: 'cssArrowIndex',
        component: () => import('@/views/css/cssStyles/cssArrow')
      }
    ]
  },
  {
    path: '/cssTransformMatrix',
    name: 'cssTransformMatrix',
    component: () => import('@/components/base'),
    meta: {
      title: 'transform: matrix()',
      type: 'cssStyles'
    },
    redirect: '/cssTransformMatrix/cssTransformMatrixIndex',
    children: [
      {
        path: 'cssTransformMatrixIndex',
        name: 'cssTransformMatrixIndex',
        component: () => import('@/views/css/cssStyles/cssTransformMatrix')
      }
    ]
  },
]

export {
  cssStyles
}
