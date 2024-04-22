import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Detail from '../views/Detail.vue'
import InsertLife from '../views/InsertLife.vue'
import Sign from '@/views/Sign.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/list',
      name: 'list',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/List.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Detail.vue')
    },
    {
      path: '/insertlife',
      name: 'InsertLife',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/InsertLife.vue')
    },
    {
      path: '/sign',
      name: 'Sign',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Sign.vue')
    }
  ]
})

export default router
