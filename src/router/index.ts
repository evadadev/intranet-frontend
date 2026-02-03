import LoginView from '../views/LoginView.vue'
import Home from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import FichasView from '../views/FichasView.vue'
import FaltasView from '../views/FaltasView.vue'
import HorariosView from '../views/HorariosView.vue'
import DocumentosView from '../views/DocumentosView.vue'
import EquipoView from '../views/EquipoView.vue'
import EstadisticasView from '../views/EstadisticasView.vue'
import PerfilView from '../views/PerfilView.vue'

import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  { path: '/fichas', component: FichasView },
  { path: '/faltas', component: FaltasView },
  { path: '/horarios', component: HorariosView },
  { path: '/documentos', component: DocumentosView },
  { path: '/equipo', component: EquipoView },
  { path: '/estadisticas', component: EstadisticasView },
  { path: '/perfil', component: PerfilView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
