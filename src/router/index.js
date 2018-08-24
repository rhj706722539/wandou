import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomeIndex from '@/page/index'
import Home from '@/page/children/page01'
import Todo from '@/page/children/page02'
import Page from '@/page/children/page03'
import Myperson from '@/page/children/page04'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/homeIndex',
      name: 'homeIndex',
      component: HomeIndex,
      children:[
        {
          path: '/',
          component: Home
        },
        {
          path: 'todo',
          component: Todo
        },
        {
          path:'page',
          component: Page
        },
        {
          path:'myperson',
          component: Myperson
        }
      ]
    }
  ]
})
