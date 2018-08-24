// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/**
 * 外部样式
 */
import './../static/css/global.css'
import './../static/css/modular.css'

/**
 * 字体文件／cssReset／rem
 */
import './config/iconfont.js'
import './config/reset.css'
import './config/rem.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
