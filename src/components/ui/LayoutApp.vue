<script setup>
import LayoutSidebar from './LayoutSidebar.vue'
import LayoutHeaders from './LayoutHeaders.vue'
</script>
<template>
  <div class="flex h-dvh">
    <LayoutSidebar />
    <div class="flex flex-col w-full px-5">
      <LayoutHeaders tituloHeader="MI PORTAL" />
      <div class="flex-1 mt-5">
        <slot />
      </div>
    </div>
  </div>
</template>
