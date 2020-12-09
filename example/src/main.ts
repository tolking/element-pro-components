import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import 'element-plus/lib/theme-chalk/index.css'
import '/element-pro/styles/index.css'

createApp(App)
  .use(router)
  .mount('#app')
