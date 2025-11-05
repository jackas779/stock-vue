import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import { authStore } from './stores/AuhtStore.mjs' 
import router from './router/routers.mjs'



const pinia = createPinia() 
const app = createApp(App)

app.use(pinia)
app.use(router)


const authStoreInstance = authStore() 
authStoreInstance.setupAuthListener() 

app.mount('#app')