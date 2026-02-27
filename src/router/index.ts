import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: () => import('../views/HomeView.vue') },
  { path: '/login', name: 'LoginView', component: () => import('../views/LoginView.vue') },
  { path: '/register', name: 'RegisterView', component: () => import('../views/RegisterView.vue') },
  { path: '/fichas', name: 'FichasView', component: () => import('../views/FichasView.vue') },
  { path: '/faltas', name: 'FaltasView', component: () => import('../views/FaltasView.vue') },
  { path: '/horarios', name: 'HorariosView', component: () => import('../views/HorariosView.vue') },
  {
    path: '/documentos',
    name: 'DocumentosView',
    component: () => import('../views/DocumentosView.vue'),
  },
  { path: '/equipo', name: 'TeamView', component: () => import('../views/TeamView.vue') },
  {
    path: '/estadisticas',
    name: 'EstadisticasView',
    component: () => import('../views/EstadisticasView.vue'),
  },
  { path: '/perfil', name: 'ProfileView', component: () => import('../views/ProfileView.vue') },
  {
    path: '/user/:id',
    name: 'UserDetailView ',
    component: () => import('../views/UserDetailView .vue'),
    props: (router) => ({
      userId: Number(router.params.id),
    }),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
