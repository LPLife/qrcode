import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import qrcode from 'qrcode'
Vue.config.productionTip = false

new Vue({
  store,
  router,
  qrcode,
  render: h => h(App)
}).$mount('#app')
