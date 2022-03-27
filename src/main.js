import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";
import VueCookies from 'vue3-cookies'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'


axios.defaults.baseURL = 'http://127.0.0.1:3000'


const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(VueCookies)
app.config.globalProperties.$ajax = axios
app.mount('#app')






