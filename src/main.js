import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap'
import './styles/global.scss'
import './styles/common.scss'

import './components'
import myCharts from 'echarts'
Vue.use(myCharts)
Vue.prototype.$__env__ = process.env.NODE_ENV


Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  // store,
  // i18n,
  render: h => h(App)
}).$mount('#app')
