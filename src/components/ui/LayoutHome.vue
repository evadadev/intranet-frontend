<script setup>
import LayoutSidebar from './LayoutSidebar.vue'
import LayoutHeaders from './LayoutHeaders.vue'
import LayoutMain from './LayoutMain.vue'

import CardBase from '@/components/ui/CardBase.vue'
</script>
<template>
  <LayoutSidebar />
  <div class="fixed right-1 left-52">
    <LayoutHeaders tituloHeader="MI PORTAL" />
    <LayoutMain class="flex flex-row gap-3">
      <CardBase class="w-80 h-80" tituloCard="Tú equipo" avatar />
      <CardBase class="w-80 h-80" tituloCard="Mis tareas" icon="bell" />
      <CardBase class="w-80 h-80" tituloCard="Mis documentos" icon="file" />
    </LayoutMain>
  </div>
</template>
