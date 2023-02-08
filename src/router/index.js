import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {path: '/', name: 'home', component: HomeView},
  {path: '/digitalplan', name: 'digitalplan', component: () => import(/* webpackChunkName: "digitalplan" */'@/views/DigitalPlanView.vue')},
  {path: '/database', name: 'database', component: () => import(/* webpackChunkName: "database" */'@/views/DataBaseView.vue')},
  {path: '/onemap', name: 'onemap', component: () => import(/* webpackChunkName: "onemap" */'@/views/OneMap.vue')},
  {path: '/login', name: 'login', component: () => import(/* webpackChunkName: "onemap" */'@/views/LoginView.vue')},
  {path: '/sandbox', name: 'sandbox',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SandBoxView.vue')
  },
  {path: '/plot/:id', component: () => import('@/views/PlotInfo.vue')}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,

  linkActiveClass: 'active-link'

})

export default router
