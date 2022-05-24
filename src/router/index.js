import { createRouter, createWebHistory } from 'vue-router'
import MainHome from '../views/MainHome.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainHome
  },
  {
    path: '/user/:id',
    name: 'UserPage',
    component: () => import('../views/UserPage.vue')
  },
  {
    path: '/more-info/:id',
    name: 'MoreInfo',
    component: () => import('../views/MoreInfo.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
