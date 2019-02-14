import { intro1 } from './baseIntro'

const civilServant = {
  path: '/civilServant',
  name: 'civilServant',
  component: () => import('@/views/civilServant/civilServant'),
  meta: {
    title: '公务员',
    level: 1,
  }
}

const AAT = {
  path: '/AAT',
  name: 'AAT',
  component: () => import('@/views/civilServant/AAT'),
  meta: {
    title: '行测',
    level: 2,
    type: 'civilServant',
  }
}

const application = {
  path: '/application',
  name: 'application',
  component: () => import('@/views/civilServant/application'),
  meta: {
    title: '申论',
    level: 2,
    type: 'civilServant',
  }
}

const baseIntro = {
  path: '/baseIntro',
  name: 'baseIntro',
  component: () => import('@/views/civilServant/baseIntro'),
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