import { createWebHistory, createRouter } from "vue-router"
import Home from '../pages/Home.vue'
import About from '../pages/about.vue'
import Login from '../pages/login.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/about', name: 'About', component: About }]

const router = createRouter({ history: createWebHistory(), routes })

export default router