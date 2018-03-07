import Vue from 'vue'
import Router from 'vue-router'

import home from '../pages/home'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: home
  }],
  mode: 'history',
  base: '',
  scrollBehavior: (to, from, savedPosition)  => savedPosition ? savedPosition :{ x: 0, y: 0 }
})

export default router
