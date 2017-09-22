import Vue from 'vue'
import Router from 'vue-router'


import home from '../components/home/home.vue'
import classify from '../components/classify/classify.vue'
import shopcart from '../components/shopcart/shopcart.vue'
import mypet from '../components/mypet/mypet.vue'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path:'/',
      redirect:'home'
    },
    {
      path: '/home',
      component: home,
    },
    {
      path: '/classify',
      component: classify,
    },
    {
      path: '/mypet',
      component: mypet,
    },
    {
      path: '/shopcart',
      component: shopcart,
    }
  ]
})
