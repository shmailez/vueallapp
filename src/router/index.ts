import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('../views/TableView.vue')
    },
    {
      path: '/image',
      name: 'image',
      component: () => import('../views/ImageView.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/FormikView.vue')
    },
    {
      path: '/toggler',
      name: 'toggler',
      component: () => import('../views/TogglerView.vue')
    }
  ]
})

export default router
