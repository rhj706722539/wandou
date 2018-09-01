import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/page/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Page',
      component: Page
    }
  ]
})
