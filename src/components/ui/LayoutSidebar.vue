<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

import BtnBase from '@/components/ui/BtnBase.vue'

defineProps({
  titleSidebar: {
    type: String,
    default: '',
  },
})

const router = useRouter()
const { logout, isAuthenticated, user } = useAuthStore()
const links = [
  { pathLink: '/register', titleLink: 'Registrarse' },
  { pathLink: '/fichas', titleLink: 'Mis fichajes' },
  { pathLink: '/faltas', titleLink: 'Mis ausencias' },
  { pathLink: '/horarios', titleLink: 'Mis horarios' },
  { pathLink: '/documentos', titleLink: 'Mis documentos' },
  { pathLink: '/equipo', titleLink: 'Mi equipo' },
  { pathLink: '/estadisticas', titleLink: 'Estadísticas' },
  { pathLink: '/perfil', titleLink: 'Perfil' },
]

const handleLogout = async () => {
  try {
    await fetch('http://localhost:8000/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        user: user.value,
      }),
    })
    if (isAuthenticated) {
      logout()
      router.push('/login')
    }
  } catch (error) {
    console.log('Error al cerrar sesión:', error)
  }
}
</script>
<template>
  <section>
    <div
      class="fixed top-0 bottom-0 right-0 left-0 w-[200px] p-4 gap-4 border-r border-r-gray-300 bg-gray-50"
    >
      <h2 class="mb-10">{{ titleSidebar }}</h2>
      <ul class="static flex flex-col">
        <BtnBase
          textBtn="Cerrar sesión"
          class="absolute bottom-1 left-2 w-[110px] h-8"
          @click="handleLogout"
        />
        <li v-for="(link, index) in links" :key="index" class="mb-2">
          <router-link class="text-[#2b7fff] no-underline hover:underline" :to="link.pathLink">{{
            link.titleLink
          }}</router-link>
        </li>
      </ul>
    </div>
  </section>
</template>
