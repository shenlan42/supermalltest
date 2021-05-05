import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('views/home/home.vue')
const Cart = () => import('views/cart/cart.vue')
const Category = () => import('views/category/category.vue')
const Profile = () => import('views/profile/Profile.vue')

Vue.use(Router)

var routes = [ {
  path: '/home',
  component: Home,
},  
{
  path: '',
  redirect: '/home'
},

{
  path: '/cart',
  component: Cart,
},
{
  path: '/category',
  component: Category,
},
{
  path: '/profile',
  component: Profile,
},
]

export default new Router({
  mode: 'history',
  routes
})
