import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import { createRouter, createWebHistory } from 'vue-router'
// import { setupLayouts } from 'virtual:generated-layouts'
// import generatedRoutes from 'virtual:generated-pages'

import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'virtual:svg-icons-register'

// 引入字體
// const linkElement = document.createElement('link')
// linkElement.rel = 'preconnect'
// linkElement.href = 'https://fonts.googleapis.com'
// document.head.appendChild(linkElement)

// const linkElement2 = document.createElement('link')
// linkElement2.rel = 'preconnect'
// linkElement2.href = 'https://fonts.gstatic.com'
// linkElement2.crossOrigin = 'true'
// document.head.appendChild(linkElement2)

// const linkElement3 = document.createElement('link')
// linkElement3.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap'
// linkElement3.rel = 'stylesheet'
// document.head.appendChild(linkElement3)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
