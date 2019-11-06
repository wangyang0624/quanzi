import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main/quanz'
  },
  {
    path: '/main', component: () => import('../views/Main.vue'),
    children: [
      { path: '/main/quanz', component: () => import('../views/main/Quanz.vue') },
      {
        path: '/main/my', component: () => import('../views/main/My.vue'),
        beforeEnter:(to,from,next)=>{
          if(!localStorage.token){
            next("/login")
          }else{
            next()
          }
        }
      }
    ]
  },
  {
    path: '/diltal/:id', component: () => import('../views/Diltal.vue')
  },
  {
    path: '/login', component: () => import('../views/Login.vue')
  },
  {
    path: '/login2', component: () => import('../views/Login2.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
