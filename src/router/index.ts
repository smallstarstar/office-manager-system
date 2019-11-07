import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/components/login/login-component.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/components/home/home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/**
 * 添加路由守卫
 */

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token') ? true : false;
  if (to.path === '/') {
    next();
  } else {
    token ? next() : next('/');
  }
})

export default router
