import { createApp } from 'vue'
import router from './router/index'
import { ElButton, ElInput, ElTag } from 'element-plus'
import ElementPro from '/@src/index'
import App from './App.vue'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)

app.component(ElButton.name, ElButton)
app.component(ElInput.name, ElInput)
app.component(ElTag.name, ElTag)
app.use(router).use(ElementPro).mount('#app')
