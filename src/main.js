import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from './router'
import '@/style/style.css' //引入外部css

import 'leaflet/dist/leaflet.css'
// 引入Leaflet对象 挂载到Vue上，便于全局使用，也可以单独页面中单独引用
import L from "leaflet"
import 'leaflet.pm'
import 'leaflet.pm/dist/leaflet.pm.css'
import 'leaflet.pm/dist/leaflet.pm.min.js';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'



const app = createApp(App).use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(ElementPlus)
app.mount('#app')