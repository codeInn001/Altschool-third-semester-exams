import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import HomeView from '../views/HomeView.vue'
import Repositories from '../views/Repositories.vue'
import Error404 from '../views/Error404.vue'

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
      path: '/repositories',
      name: 'repositories',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Repositories.vue')
    },
    
    {
      path: '/repository/:id',
      name: 'repository',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Repository.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'Error404',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Error404.vue')
    },
    
  ],
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
})

export default router
