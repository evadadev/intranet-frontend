import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLocaleStore = defineStore('locale', () => {
  const locale = ref(localStorage.getItem('locale') || 'es')

  const setLocale = (lang) => {
    locale.value = lang
    localStorage.setItem('locale', lang)
  }

  return {
    locale,
    setLocale,
  }
})
