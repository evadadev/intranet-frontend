<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const router = useRouter()

onMounted(() => {
  if (authStore.isAuthenticated) {
    router.push('/')
  }
})
</script>

<template>
  <div class="flex flex-row items-center justify-items-start">
    <div class="md:flex w-1/2 h-screen hidden">
      <img src="/img-oficina.png" alt="imagen-login" class="opacity-50" />
    </div>
    <div class="md:w-1/2 w-full h-screen flex flex-col items-center justify-center px-5">
      <div class="flex flex-col max-w-[310px]">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
