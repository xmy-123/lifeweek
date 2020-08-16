import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Reg from '../views/Reg.vue'
import ShopCar from '../views/ShopCar.vue'
import Me from '../views/Me.vue'
import Search from '../views/Search'



Vue.use(VueRouter)
  const routes = [
  {
    path:'/search',
    component:Search
  },
  {
    path:'/me',
    component:Me
  },
  {
    path:'/shopcar',
    component:ShopCar
  },
  {
    path:'/reg',
    component:Reg
  },
  {
    path:'/login',
    component:Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
