<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useRouter } from 'vue-router'

import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const { isAuthenticated } = useAuthStore()

onMounted(() => {
  if (!isAuthenticated) {
    router.push('/login')
  }
})
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>
