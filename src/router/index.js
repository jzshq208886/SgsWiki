import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: '理工杀维基-主页',
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      title: '理工杀维基-关于',
    },
  },
  {
    path: '/characterIntroduction/:chara',
    name: 'characterIntroduction',
    component: () => import('../views/CharacterIntroductionView.vue'),
    meta: {
      metaInfo: {
        title: '理工杀维基-武将介绍',
        keywords: "vuex,vue-route",
    		description: "本页面是武将介绍页面"
      }
    },
  },
  {
    path: '/cardIntroduction/:card',
    name: 'cardIntroduction',
    component: () => import('../views/CardIntroductionView.vue'),
    meta: {
      title: '理工杀维基-游戏牌介绍',
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
