const jsArray = [
  {
    path: '/slicePart',
    name: 'slicePart',
    component: () => import('@/components/base'),
    meta: {
      title: '截取数组的一部分',
      type: 'jsArray'
    },
    redirect: '/slicePart/slicePartIndex',
    children: [
      {
        path: 'slicePartIndex',
        name: 'slicePartIndex',
        component: () => import('@/views/javascript/jsArray/slicePart')
      }
    ]
  }
]

export {
  jsArray
}
