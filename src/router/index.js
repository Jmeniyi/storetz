import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'logInPage',
    component: () => import('../views/logInPage.vue')
  },
  {
    path: '/registerPage',
    name: 'registerPage',
    component: () => import('../views/registerPage.vue')
  },
  {
    path: '/cartPage',
    name: 'cartPage',
    component: () => import('../views/cartPage.vue')
  },
  {
    path: '/mainPage',
    name: 'mainPage',
    component: () => import('../views/mainPage.vue')
  },
  {
    path: '/itemInfoPage/:id',
    name: 'itemInfoPage',
    component: () => import('../views/itemInfoPage.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

export default router
