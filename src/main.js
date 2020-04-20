// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vueSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import VueCookies from 'vue-cookies'
import 'swiper/dist/css/swiper.css'
import './assets/font/iconfont.css'
import './assets/css/reset.css'

Vue.prototype.$axios = axios
Vue.use(vueSwiper)
Vue.use(VueLazyload)
Vue.use(VueCookies)

// 或者添加VueLazyload 选项
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/icon/error.png'),
  loading: require('./assets/icon/loading.gif'),
  attempt: 1
})


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
