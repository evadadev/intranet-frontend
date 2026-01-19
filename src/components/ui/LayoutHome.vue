<script setup>
import LayoutHeaders from '@/components/ui/LayoutHeaders.vue'
import LayoutSidebar from '@/components/ui/LayoutSidebar.vue'
import LayoutMain from '@/components/ui/LayoutMain.vue'

import CardBase from '@/components/ui/CardBase.vue'
</script>
<template>
  <div class="bg-neutral-100 grid grid-cols-[200px_1fr] gap-4 p-2 min-h-screen">
    <div class="bg-neutral-100 grid grid-cols-[200px_1fr] gap-4 p-2 min-h-screen">
      <LayoutSidebar titleSidebar="Portal de empleados" />
      <section class="flex flex-col">
        <LayoutHeaders tituloHeader="MI PORTAL" />
        <LayoutMain>
          <CardBase class="w-80 h-80" tituloCard="Tú equipo" avatar />
          <CardBase class="w-80 h-80" tituloCard="Mis tareas" />
          <CardBase class="w-80 h-80" tituloCard="Mis documentos" />
        </LayoutMain>
      </section>
    </div>
    <slot />
  </div>
</template>
