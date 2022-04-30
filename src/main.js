import { createApp } from 'vue'
import App from './App.vue'
import router from './Routers/router.js'
import mitt from 'mitt'
import axios from 'axios'
import VueAxios from 'vue-axios'

const bus=mitt()
const app=createApp(App)

app.config.globalProperties.bus=bus

app.use(router).use(VueAxios, axios).mount('#app')
