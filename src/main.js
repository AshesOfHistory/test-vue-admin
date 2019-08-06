// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/stylus/index.scss'
import store from './store'

import '@/icons'

// import './stylus/reset.css'
// import './permission'

// import i18n from './lang'
// Vue.use(Element, {
//   size: 'medium',
//   i18n: (key, value) => i18n.t(key, value)
// })

Vue.use(Element);
Vue.prototype.axios = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,// this.$router 全局注册
  store,// this.$store 全局注册
  components: { App },
  template: '<App/>'
})
