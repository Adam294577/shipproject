import { createApp } from 'vue'

import { Quasar,Notify } from 'quasar'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'

import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import { createRouter, createWebHistory } from 'vue-router'
// import { setupLayouts } from 'virtual:generated-layouts'
// import generatedRoutes from 'virtual:generated-pages'

import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'virtual:svg-icons-register'



const app = createApp(App)
app.use(Quasar, {
  plugins: {
    Notify
  },
  config: {

  }
})
  
app.use(createPinia())
app.use(router)

app.mount('#app')
