<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/plugins/fontawesome'
</script>

<template>
  <div class="w-[200px] border-r border-r-gray-300 bg-gray-50">
    <div class="text-[#2b7fff]">
      <h2 class="my-3 pl-4">Portal de empleados</h2>
      <p class="border-b" />
    </div>
    <ul class="mb-2 gap-2 flex flex-col pl-4 mt-4 text-[#2b7fff]">
      <li>
        <font-awesome-icon icon="address-card" />
        <router-link class="no-underline hover:underline" to="/login">Registrarse</router-link>
      </li>
      <li>
        <font-awesome-icon icon="clock" />
        <router-link class="no-underline hover:underline" to="/fichajes">Mis fichajes</router-link>
      </li>
      <li>
        <font-awesome-icon icon="ghost" />
        <router-link class="no-underline hover:underline" to="/faltas">Mis ausencias</router-link>
      </li>
      <li>
        <font-awesome-icon icon="clipboard-check" />
        <router-link class="no-underline hover:underline" to="/tareas">Mis tareas</router-link>
      </li>
      <li>
        <font-awesome-icon icon="calendar-check" />
        <router-link class="no-underline hover:underline" to="/horarios">Mis horarios</router-link>
      </li>
      <li>
        <font-awesome-icon icon="file" />
        <router-link class="no-underline hover:underline" to="/documentos"
          >Mis documentos</router-link
        >
      </li>
      <li>
        <font-awesome-icon icon="people-group" />
        <router-link class="no-underline hover:underline" to="/equipo">Equipo</router-link>
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
</template>
