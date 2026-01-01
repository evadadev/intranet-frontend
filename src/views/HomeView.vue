<script setup>
import CardBase from '@/components/ui/CardBase.vue'

// Aquí puedes importar stores, composables o datos si lo necesitas
</script>
<template>
  <div class="bg-neutral-100 grid grid-cols-[200px_1fr] gap-4 p-2 min-h-screen">
    <section>
      <div
        class="fixed top-0 bottom-0 right-0 left-0 w-[200px] p-4 gap-4 border-r border-r-gray-300 bg-gray-50"
      >
        <h2 class="mb-10">Portal de empleados</h2>
        <ul class="flex flex-col">
          <li class="mb-2">
            <router-link class="text-[#2b7fff] no-underline hover:underline" to="/login"
              >Registrarse</router-link
            >
          </li>
          <li class="mb-2">
            <router-link class="text-[#2b7fff] no-underline hover:underline" to="/fichajes"
              >Mis fichajes</router-link
            >
          </li>
          <li class="mb-2">
            <router-link class="text-[#2b7fff] no-underline hover:underline" to="/faltas"
              >Mis ausencias</router-link
            >
          </li>
          <li class="mb-2">
            <router-link class="text-[#2b7fff] no-underline hover:underline" to="/tareas"
              >Mis tareas</router-link
            >
          </li>
          <li class="mb-2">
            <router-link class="text-[#2b7fff] no-underline hover:underline" to="/horarios"
              >Mis horarios</router-link
            >
          </li>
          <li class="mb-2">
            <router-link class="text-[#2b7fff] no-underline hover:underline" to="/documentos"
              >Mis documentos</router-link
            >
          </li>
          <li class="mb-2">
            <router-link class="text-[#2b7fff] no-underline hover:underline" to="/usuarios"
              >Equipo</router-link
            >
          </li>
          <li class="mb-2">
            <router-link class="text-[#2b7fff] no-underline hover:underline" to="/estadisticas"
              >Estadisticas</router-link
            >
          </li>
          <li class="mb-2">
            <router-link class="text-[#2b7fff] no-underline hover:underline" to="/perfil"
              >Perfil</router-link
            >
          </li>
        </ul>
      </div>
    </section>
    <section class="flex flex-col">
      <div class="flex items-center justify-between gap-x-5 h-16">
        <h1 class="flex">MI PORTAL</h1>
        <p class="">Esta es la página de inicio</p>
        <card-base
          titulo-card="Raúl Rodriguez"
          class="flex flex-row items-center gap-2 h-12"
          :avatar="true"
        />
      </div>
      <div class="flex flex-row gap-3">
        <card-base class="w-80 h-80" titulo-card="Tú equipo" avatar />
        <card-base class="w-80 h-80" titulo-card="Mis tareas" />
        <card-base class="w-80 h-80" titulo-card="Mis documentos" />
      </div>
    </section>
  </div>
</template>
