import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Home1 from '../views/Home1.vue'
import Home2 from '../views/Home2.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home1',
    name: 'Home1',
    component: Home1,
  },
  {
    path: '/home2',
    name: 'Home2',
    component: Home2
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
