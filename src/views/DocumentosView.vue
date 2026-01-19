<script setup>
import { useRouter } from 'vue-router'

import CardBase from '@/components/ui/CardBase.vue'
import BtnBase from '@/components/ui/BtnBase.vue'

const router = useRouter()

const btnVolverInicio = () => {
  router.push('/')
}
</script>

<template>
  <div>
    <h1>Mis documentos</h1>
    <h2>meter el perfil del empleado</h2>
    <BtnBase textBtn="Nuevo documento" />
    <CardBase class="w-80 h-80" tituloCard="Mis documentos" />
    <BtnBase
      textBtn="Incio"
      class="absolute bottom-1 left-2 w-[110px] h-8"
      @click="btnVolverInicio"
    />
  </div>
</template>
