<script setup>
import { useAuthStore } from '@/stores/auth'

import CardBase from '@/components/ui/CardBase.vue'

const { user } = useAuthStore()

defineProps({
  tituloHeader: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="flex items-center justify-between gap-x-5 h-16">
    <h1 class="flex">{{ tituloHeader }}</h1>
    <slot />
    <CardBase
      :tituloCard="user?.name"
      class="flex flex-row items-center gap-2 h-12"
      :avatar="true"
    />
  </div>
</template>
