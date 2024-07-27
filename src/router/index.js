import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../views/AuthView.vue'
import CreateView from '@/views/CreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Auth
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView
    },
    {
      path: '/:id',
      name: 'from',
      component: () => import('../views/FormView.vue')
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: () => import('../views/ForgotView.vue')
    }
  ]
})

export default router
