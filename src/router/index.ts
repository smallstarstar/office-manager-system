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
        path: 'disposal',
        name: 'disposal',
        component: () => import('@/views/disposal/disposal.vue'),
        children: [
          // 路由重定向
          {
            path: '',
            redirect: 'reviewInfo'
          },
          {
            path: 'reviewInfo',
            name: 'reviewInfo',
            component: () => import('@/components/reviewInfo/review-info.vue')
          },
          {
            path: 'resourceLook',
            name: 'resourceLook',
            component: () => import('@/components/resourceLook/resource-look.vue')
          },
          {
            path: 'resourceTrack',
            name: 'resourceTrack',
            component: () => import('@/components/resourceTrack/resource-track.vue')
          },
          {
            path: 'resourceView',
            name: 'resourceView',
            component: () => import('@/components/resourceView/resource-view.vue')
          }
        ]
      },
      {
        path: 'homelist',
        name: 'list',
        component: () => import('@/views/list-data/list-data.vue'),
        children: [
          // 路由重定向
          {
            path: '',
            redirect: 'userInfo'
          },
          {
            path: 'userInfo',
            name: 'userInfo',
            component: () => import('@/components/userInfoData/user-info.vue')
          },
          {
            path: 'shopInfo',
            name: 'shopInfo',
            component: () => import('@/components/shopInfoData/shop-info-data.vue')
          }
        ]
      },
      {
        path: 'systemConfig',
        name: 'systemConfig',
        component: ()=> import ('@/views/system-config/system-config.vue'),
        children:[
          {
            path: '',
            redirect: 'resourceConfig'
          },
          {
            path: 'resourceConfig',
            name: 'resourceConfig',
            component: ()=> import ('@/components/resource-config/resource-config.vue'),
          },
          {
            path: 'routerConfig',
            name: 'routerConfig',
            component: () => import ('@/components/router-config/index.vue')
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
