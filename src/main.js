import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './plugins/i18n'
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faAddressCard,
  faAngleDown,
  faBell,
  faCalendarCheck,
  faChartSimple,
  faClipboardCheck,
  faClock,
  faFile,
  faGhost,
  faPeopleGroup,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faUser,
  faAngleDown,
  faXmark,
  faBell,
  faFile,
  faAddressCard,
  faGhost,
  faCalendarCheck,
  faClock,
  faClipboardCheck,
  faPeopleGroup,
  faChartSimple,
)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
