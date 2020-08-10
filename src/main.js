import Vue from 'vue'
import App from './App.vue'
import router from './router'
import myheader from '../src/components/My-header.vue'
import myfooter from '../src/components/My-footer.vue'
import axios from 'axios'
import store from './store'
import qs from 'qs'

Vue.component('my-header',myheader)
Vue.component('my-footer',myfooter)
axios.defaults.baseURL = 'http://127.0.0.1:9090'
Vue.prototype.axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
