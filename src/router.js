import Vue from 'vue'
import Router from 'vue-router'
import Breeds from './containers/breeds/Breeds.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Breeds
    }
  ]
})
