import { createI18n } from 'vue-i18n'
import es from '@/locales/es.json'
import en from '@/locales/en.json'

const messages = {
  en,
  es,
}

const i18n = createI18n({
  legacy: false, // usa Composition API
  locale: localStorage.getItem('locale') || 'es', // idioma por defecto
  fallbackLocale: 'en',
  messages,
})

export default i18n
