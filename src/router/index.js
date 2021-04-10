import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
    name: 'login',
  },
  {
    path: '/',
    component: () => import('../layout/Default.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Welcome.vue'),
        name: 'welcome',
      },
      {
        path: 'stock',
        component: () => import('../views/Stock.vue'),
        name: 'stock',
      },
      {
        path: 'list',
        component: () => import('../views/List.vue'),
        name: 'list',
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && store.state.user.name === '') {
    next({ name: 'login' })
  }
  next()
})

export default router
