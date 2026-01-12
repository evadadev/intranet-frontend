import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import Home from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
