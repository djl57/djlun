// const re = /\.\/(.*)\.js/
// let res = (r => {
//   return r.keys().map(key => r(key)[key.match(re)[1]]);
// })(require.context('./articles', false, /\.js$/))
// let [unitTestFrameworks] = res

// let route = [
//   {
//     path: '/unitTest',
//     name: 'unitTest',
//     component: () => import('@/views/home/firstTitle'),
//     meta: {
//       title: '单元测试',
//       level: 1
//     }
//   },
//   {
//     path: '/unitTestFrameworks',
//     name: 'unitTestFrameworks',
//     component: () => import('@/views/home/secondTitle'),
//     meta: {
//       title: '单元测试框架',
//       level: 2,
//       type: 'unitTest'
//     }
//   },
//   ...unitTestFrameworks
// ]

// export {
//   route
// }
