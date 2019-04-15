const mysql = []
const data = [
  { name: 'mysqlstart', title: 'start' },
]
data.forEach(el => {
  mysql.push({
    path: `/${el.name}`,
    name: `${el.name}`,
    component: () => import('@/components/base'),
    meta: {
      title: `${el.title}`,
      type: 'mysql'
    },
    redirect: `/${el.name}/${el.name}Index`,
    children: [
      {
        path: `${el.name}Index`,
        name: `${el.name}Index`,
        component: () => import(`@/views/nodejs/mysql/${el.name}`)
      }
    ]
  })
})
export {
  mysql
}
