import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes: any = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/components/login/login-component.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/components/home/home.vue'),
    children: [
      {
        path: 'content',
        name: 'content',
        component: () => import('@/views/content.vue')
      },
      {
        path: 'homecontent',
        name: 'homecontent',
        component: () => import('@/views/time-card/time-card.vue')
      },
      {
        path: 'homelist',
        name: 'list',
        component: () => import('@/views/list-data/list-data.vue'),
        children:[
          {
            path:'userInfo',
            name:'userInfo',
            component: ()=> import('@/components/userInfoData/user-info.vue')
          }
        ]
      }
    ]
  }
]

const router: any = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
});

/**
 * 添加路由守卫
 */

router.beforeEach((to: any, from: any, next: any) => {
  const token = localStorage.getItem('token') ? true : false;
  if (to.path === '/') {
    next();
  } else {
    token ? next() : next('/');
  }
})

export default router
