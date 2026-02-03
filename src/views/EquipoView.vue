<script setup lang="ts">
import { useRouter } from 'vue-router'
import BtnBase from '@/components/ui/BtnBase.vue'
import CardBase from '@/components/ui/CardBase.vue'

const router = useRouter()

const btnVolverInicio = () => {
  router.push('/')
}
</script>

<template>
  <div>
    <h1>Mi equipo</h1>
    <h2>meter el perfil del empleado</h2>
    <CardBase class="w-80 h-80" tituloCard="Mi equipo" :avatar="true" />
    <BtnBase
      textBtn="Incio"
      class="absolute bottom-1 left-2 w-[110px] h-8"
      @click="btnVolverInicio"
    />
  </div>
</template>
