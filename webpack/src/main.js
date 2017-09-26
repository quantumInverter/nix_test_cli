import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import { routes } from './router-config'

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

Vue.use(Router)
Vue.use(BootstrapVue)

const router = new Router({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
