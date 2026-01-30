<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

import { useAuthStore } from '@/stores/auth'
import { logout } from '@/services/auth'

import CardBase from '@/components/ui/CardBase.vue'

import FontAwesomeIcon from '@/plugins/fontawesome'

const router = useRouter()
const { user, isAuthenticated, clearAuth } = useAuthStore()
const clicked = ref(false)

const handleLogout = async () => {
  try {
    await logout({ user: user.value })
    if (isAuthenticated) {
      clearAuth()
      router.push('/login')
    }
  } catch (error) {
    console.log('Error al cerrar sesión:', error)
  }
}
</script>

<template>
  <div class="flex items-center justify-between gap-x-5 h-16">
    <div class="flex items-center gap-2 h-12">
      <font-awesome-icon icon="user" />
      <h1 class="flex">MI PORTAL</h1>
    </div>
    <p class="">Esta es la página de inicio</p>
    <div class="flex items-center gap-2">
      <CardBase
        class="flex flex-row items-center gap-2 h-12"
        icon="angle-down"
        @click="clicked = !clicked"
        :tituloCard="user?.name"
        :avatar="true"
      >
      </CardBase>

      <CardBase v-if="clicked" class="flex flex-col w-60 h-60 mt-80 right-5 absolute items-center">
        <ul>
          <li>
            <router-link class="absolute left-4 bottom-12 no-underline hover:underline" to="/perfil"
              >Perfil</router-link
            >
          </li>
          <li class="text-red-600 absolute bottom-4 left-4" @click="handleLogout">Cerrar sesión</li>
        </ul>
      </CardBase>
    </div>
  </div>
</template>
