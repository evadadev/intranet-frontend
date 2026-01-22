<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

import { useAuthStore } from '@/stores/auth'
import { logout } from '@/services/auth'

import BtnBase from '@/components/ui/BtnBase.vue'
import CardBase from '@/components/ui/CardBase.vue'
import FontAwesomeIcon from '@/plugins/fontawesome'

const router = useRouter()
const { clearAuth, isAuthenticated, user } = useAuthStore()
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
  <div class="bg-neutral-100 grid grid-cols-[200px_1fr] gap-4 p-2 min-h-screen">
    <section>
      <div
        class="fixed top-0 bottom-0 right-0 left-0 w-[200px] border-r border-r-gray-300 bg-gray-50"
      >
        <div class="text-[#2b7fff]">
          <h2 class="my-3 pl-4">Portal de empleados</h2>
          <p class="border-b" />
        </div>
        <ul class="mb-2 gap-2 flex flex-col pl-4 mt-4 text-[#2b7fff]">
          <BtnBase
            textBtn="Cerrar sesión"
            class="absolute bottom-1 left-2 w-[110px] h-8"
            @click="handleLogout"
          />
          <li>
            <font-awesome-icon icon="address-card" />
            <router-link class="no-underline hover:underline" to="/login">Registrarse</router-link>
          </li>
          <li>
            <font-awesome-icon icon="clock" />
            <router-link class="no-underline hover:underline" to="/fichajes"
              >Mis fichajes</router-link
            >
          </li>
          <li>
            <font-awesome-icon icon="ghost" />
            <router-link class="no-underline hover:underline" to="/faltas"
              >Mis ausencias</router-link
            >
          </li>
          <li>
            <font-awesome-icon icon="clipboard-check" />
            <router-link class="no-underline hover:underline" to="/tareas">Mis tareas</router-link>
          </li>
          <li>
            <font-awesome-icon icon="calendar-check" />
            <router-link class="no-underline hover:underline" to="/horarios"
              >Mis horarios</router-link
            >
          </li>
          <li>
            <font-awesome-icon icon="file" />
            <router-link class="no-underline hover:underline" to="/documentos"
              >Mis documentos</router-link
            >
          </li>
          <li>
            <font-awesome-icon icon="people-group" />
            <router-link class="no-underline hover:underline" to="/usuarios">Equipo</router-link>
          </li>
          <li>
            <font-awesome-icon icon="chart-simple" />
            <router-link class="no-underline hover:underline" to="/estadisticas"
              >Estadisticas</router-link
            >
          </li>
          <li>
            <font-awesome-icon icon="user" />
            <router-link class="no-underline hover:underline" to="/perfil">Perfil</router-link>
          </li>
        </ul>
      </div>
    </section>
    <section class="flex flex-col">
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

          <CardBase
            v-if="clicked"
            class="flex flex-col w-60 h-60 mt-80 right-5 absolute items-center"
          >
            <ul>
              <li>
                <router-link
                  class="absolute left-4 bottom-12 no-underline hover:underline"
                  to="/perfil"
                  >Perfil</router-link
                >
              </li>
              <li class="text-red-600 absolute bottom-4 left-4" @click="handleLogout">
                Cerrar sesión
              </li>
            </ul>
          </CardBase>
        </div>
      </div>
      <div class="flex flex-row gap-3">
        <CardBase class="w-80 h-80" tituloCard="Tú equipo" avatar />
        <CardBase class="w-80 h-80" tituloCard="Mis tareas" icon="bell" />
        <CardBase class="w-80 h-80" tituloCard="Mis documentos" icon="file" />
      </div>
    </section>
  </div>
</template>
