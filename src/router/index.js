import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import Regsiter from '../views/RegsiterView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/regsiter',
    name: 'regsiter',
    component: Regsiter
  }
]


const router = new VueRouter({
  mode: "history",
  base: process.env.base,
  routes
})
//前置路由守卫
router.beforeEach(function(to, from, next) {
    // console.log(to.path)
    if(to.path=='/login'||to.path=='/regsiter'){next()}else{
      const token = localStorage.getItem('token')
      if (token=='xiedongwei') {
        next()
      } else {
        alert('请先登录')
        next('/login')
      }
    }
    
})


export default router
