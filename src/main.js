import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'


axios.defaults.baseURL = 'http://127.0.0.1:3000'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
app.config.globalProperties.$ajax = axios


