import { intro1 } from './baseIntro'

const civilServant = {
  path: '/civilServant',
  name: 'civilServant',
  component: () => import('@/views/home/firstTitle'),
  meta: {
    title: '公务员',
    level: 1,
  }
}

const AAT = {
  path: '/AAT',
  name: 'AAT',
  component: () => import('@/views/home/secondTitle'),
  meta: {
    title: '行测',
    level: 2,
    type: 'civilServant',
  }
}

const application = {
  path: '/application',
  name: 'application',
  component: () => import('@/views/home/secondTitle'),
  meta: {
    title: '申论',
    level: 2,
    type: 'civilServant',
  }
}

const baseIntro = {
  path: '/baseIntro',
  name: 'baseIntro',
  component: () => import('@/views/home/secondTitle'),
  meta: {
    title: '介绍',
    level: 2,
    type: 'civilServant',
  }
}

export {
  civilServant,
  AAT,
  application,
  baseIntro,
  intro1
}