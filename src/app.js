window.SETTINGS = {
  LOADING_SEGMENTS: 2,
  API_BASE_PATH: '/wp-json/wp/v2/'
}

import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueLazyload from 'vue-lazyload'

import router from './router'
import App from './App.vue'
import store from './store'
import * as types from './store/mutation-types'

Vue.use(VueLazyload)

new Vue({
  el: '#page',
  store,
  router,
  render: h => h(App),
  created () {
    this.$store.commit(types.RESET_LOADING_PROGRESS)
    this.$store.dispatch('getAllCategories')
    this.$store.dispatch('getAllPages')

    console.log('Webdesign and development by' + '\n' + ' ______  ______  ______  ______  ______  ______  ______  ______   _____    \n' + '/\\  == \\/\\  __ \\/\\  ___\\/\\  ___\\/\\  ___\\/\\  == \\/\\  __ \\/\\  ___\\/\\  ___\\   \n' + '\\ \\  __<\\ \\ \\/\\ \\ \\  __\\  \\___  \\ \\  __\\\\ \\  __<\\ \\ \\/\\ \\ \\  __\\\\ \\___  \\  \n' + ' \\ \\_\\ \\_\\ \\_____\\ \\_____\\/\\_____\\ \\_____\\ \\_____\\ \\_____\\ \\_____\\/\\_____\\ \n' + '  \\/_/ /_/\\/_____/\\/_____/\\/_____/ /_____/\\/_____/\\/_____/\\/_____/\\/_____/.nl\n' + '\n' + '\n' + '                                                                                  ');
  }
})
