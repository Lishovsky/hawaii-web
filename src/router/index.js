import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import tan from '../views/tan.vue'
import reservation from '../views/reservation.vue'
import firstVisit from '../views/firstVisit.vue'
import priceList from '../views/priceList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/opalanie_natryskowe',
    name: 'tan',
    component: tan
  },
  {
    path: '/pierwsza_wizyta',
    name: 'firstVisit',
    component: firstVisit
  },
  {
    path: '/rezerwacja_wizyty',
    name: 'reservation',
    component: reservation
  },
  {
    path: '/cennik',
    name: 'priceList',
    component: priceList
  },
  // {
  //   path: '/cennik',
  //   name: 'cennik',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/cennik.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router


