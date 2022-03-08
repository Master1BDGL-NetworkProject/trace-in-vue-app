import {createRouter,createWebHashHistory} from "vue-router";

import home from '../view/home.vue'
import ping from '../view/ping.vue'
import traceRoute from '../view/traceRoute.vue'

const routes=[
    {path:'/',component:home},
    {path:'/ping',component:ping},
    {path:'/trace-route',component:traceRoute}
]

const router=createRouter({
    routes:routes,
    history:createWebHashHistory(process.env.BASE_URL)
})

export default router;