import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '/src/components/Login'
import Home from "@/components/Home";

const routes = [
  {path: '/', name: 'Login', component: Login},
  {path: '/Home',name:'Home',component: Home,meta:{keepAlive:true}}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
