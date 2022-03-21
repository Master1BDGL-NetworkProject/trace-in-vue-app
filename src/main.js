import { createApp } from 'vue'
import App from './App.vue'
import router from './Routers/router.js'
import mitt from 'mitt'

const bus=mitt()
const app=createApp(App)

app.config.globalProperties.bus=bus

app.use(router).mount('#app')
