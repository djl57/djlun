let application = []
const datas = [
  { name: 'applications-honesty', title: '申论范文：与诚信同行 为发展蓄力' },
  { name: 'applications-honesty1', title: '东汉杨震“不受四知金”的故事' },
  { name: 'applications-honesty2', title: '什么是慎独？' },
  { name: 'applications-honesty3', title: '诚者何？不自欺、不妄之谓也。' },
  { name: 'applications-honesty4', title: '社会主义核心价值体系的重要组成部分' },
  { name: 'applications-honesty5', title: '“最先一公里”“中梗阻”“最后一公里”' },
  { name: 'applications-honesty6', title: '不驰于空想，不骛（wù）于虚声' },
  { name: 'applications-rootCause', title: '申论范文：标本兼治，换来海晏河清' },
  { name: 'applications-rules', title: '申论范文：矩不正，不可为方；规不正，不可为圆' },
  { name: 'applications-innovate', title: '申论范文：激发群众热情，创新文化服务' },
  { name: 'applications-calm', title: '申论范文：静心思水 得其大道' },
  { name: 'applications-youth', title: '申论范文：用真本领让青春出彩' },
  { name: 'applications-hardworking', title: '申论范文：厉行勤俭之风 重现理性之光' },
  { name: 'applications-country', title: '申论范文：实施乡村文化振兴 厚植乡村文化底蕴' },
  { name: 'applications-environment', title: '申论范文：不断满足人民群众的优美生态环境需要' },
  { name: 'applications-manage', title: '申论范文：创新管理思维 提升公共服务' },
  { name: 'applications-develop', title: '申论范文：持稳慎发展观 助特色小镇建设' },
  { name: 'applications-chinasay', title: '申论范文：用中国话语体系彰显学术自信' },
  { name: 'applications-allowance', title: '申论范文：落实高温津贴亟待“综合处方”' },
  { name: 'applications-internet+', title: '申论范文：互联网+推进社会治理加速度' },
  { name: 'applications-value', title: '申论范文：彰显知识价值 推动时代发展' },
  { name: 'applications-unbringing', title: '申论范文：教养是文明社会的标配' },
  { name: 'applications-notself', title: '申论范文：保持“不自是”的清醒' },
  { name: 'applications-heart', title: '申论范文：以心“归零” 业当以成' },
  { name: 'applications-ecological', title: '申论范文：生态文明建设是现实之需' },
  { name: 'applications-essay1', title: '申论范文：以精细管理之器 琢社会发展美玉' },
  { name: 'applications-essay2', title: '申论范文：以改革之良策 促惠民之善果' },
  { name: 'applications-essay3', title: '申论范文：结构性改革，中国开出治本良方' },
  { name: 'applications-essay4', title: '申论范文：孤举者难起 众行者易趋' },
  { name: 'applications-essay5', title: '申论范文：君子大心则敬而道 小心畏义而节' },
  { name: 'applications-essay6', title: '申论范文：构建支撑乡村振兴的生态文化' },
  { name: 'applications-essay7', title: '申论范文：暖心用情聚民心' },
  { name: 'applications-essay8', title: '申论范文：汲取仁智 奋铸华章' },
  { name: 'applications-essay9', title: '申论范文：共享与共担 书写中国新故事' },
  { name: 'applications-essay10', title: '申论范文：你若盛开，清风自来' },
]
datas.forEach(el => {
  application.push({
    path: `/${el.name}`,
    name: el.name,
    component: () => import('@/components/base'),
    meta: {
      title: el.title,
      type: 'application'
    },
    redirect: `/${el.name}/${el.name}Index`,
    children: [
      {
        path: `${el.name}Index`,
        name: `${el.name}Index`,
        component: () => import('@/components/articleMain')
      }
    ]
  })
})

export {
  application
}
