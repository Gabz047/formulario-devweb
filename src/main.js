import './assets/css/imports.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import '../src/plugins/axios'
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(axios)
app.use(createPinia())
app.use(router)

app.mount('#app')
