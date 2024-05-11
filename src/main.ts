import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

library.add(fas)

import '@/assets/css/style.scss'

createApp(App)
.component('fa-icon', FontAwesomeIcon)
.mount('#app')
