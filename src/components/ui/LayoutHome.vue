<script setup>
import LayoutSidebar from './LayoutSidebar.vue'
import LayoutHeaders from './LayoutHeaders.vue'
import LayoutMain from './LayoutMain.vue'
</script>
<template>
  <div class="flex h-dvh">
    <LayoutSidebar />
    <div class="flex flex-col w-full px-5">
      <LayoutHeaders tituloHeader="MI PORTAL" />
      <LayoutMain class="flex flex-row gap-3" />
    </div>
  </div>
</template>
