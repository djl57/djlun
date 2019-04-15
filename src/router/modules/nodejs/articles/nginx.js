const nginx = []
const data = [
  { name: 'nginxStart', title: 'start' },
]
data.forEach(el => {
  nginx.push({
    path: `/${el.name}`,
    name: `${el.name}`,
    component: () => import('@/components/base'),
    meta: {
      title: `${el.title}`,
      type: 'nginx'
    },
    redirect: `/${el.name}/${el.name}Index`,
    children: [
      {
        path: `${el.name}Index`,
        name: `${el.name}Index`,
        component: () => import(`@/views/nodejs/nginx/${el.name}`)
      }
    ]
  })
})
export {
  nginx
}
