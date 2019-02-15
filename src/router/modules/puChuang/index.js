import { 
  sixAdvances,
  daxue } from './morningRead'

const puChuang = {
  path: '/puChuang',
  name: 'puChuang',
  component: () => import('@/views/home/firstTitle'),
  meta: {
    title: '谱创',
    level: 1
  }
}

const morningRead = {
  path: '/morningRead',
  name: 'morningRead',
  component: () => import('@/views/home/secondTitle'),
  meta: {
    title: '早读',
    level: 2,
    type: 'puChuang'
  }
}

export {
  puChuang,
  morningRead,
  sixAdvances,
  daxue
}
