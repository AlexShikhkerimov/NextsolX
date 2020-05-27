import Vue from 'vue'
import HighchartsVue from 'highcharts-vue'
import App from './App.vue'
import store from './store'

Vue.use(HighchartsVue)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
