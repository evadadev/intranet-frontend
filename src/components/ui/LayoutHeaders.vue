<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

import { useAuthStore } from '@/stores/auth'
import { logout } from '@/services/auth'

import CardBase from '@/components/ui/CardBase.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/plugins/fontawesome'

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
    <div class="flex flex-col items-center gap-2">
      <CardBase
        class="flex items-center gap-2 h-12"
        icon="angle-down"
        @click="clicked = !clicked"
        :tituloCard="user?.user"
        :nameUser="user?.user"
        :avatar="true"
      >
      </CardBase>

      <CardBase v-if="clicked" class="absolute top-14">
        <ul>
          <li>
            <router-link class="no-underline hover:underline" to="/perfil">Perfil</router-link>
          </li>
          <li class="text-red-600 bottom-4 left-4" @click="handleLogout">Cerrar sesión</li>
        </ul>
      </CardBase>
    </div>
  </div>
</template>
