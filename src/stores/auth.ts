import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('token'))
  const user = ref(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null)

  const isAuthenticated = computed(() => !!token.value)

  function setAuth(authToken: string, authUser = null) {
    token.value = authToken
    localStorage.setItem('token', authToken)

    if (authUser) {
      user.value = authUser
      localStorage.setItem('user', JSON.stringify(authUser))
    }
  }

  function clearAuth() {
    token.value = null
    user.value = null
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  return {
    token,
    user,
    isAuthenticated,
    setAuth,
    clearAuth,
  }
})
