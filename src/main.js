import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'

import 'normalize.css/normalize.css'
import '@/styles/index.scss'
import '@/icons'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
