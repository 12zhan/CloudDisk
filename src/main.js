
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import {SystemConfigPinia} from '@/pinia/SystemConfigPinia.js'

/**
 * 引入MDUI UI框架
 */
import 'mdui/mdui.css';
import 'mdui';
import {setColorScheme, loadLocale, setTheme} from 'mdui'



const app = createApp(App)

app.use(router)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate) //添加持久化插件
app.use(pinia)
setColorScheme(SystemConfigPinia().SystemColorMatching)
setTheme(SystemConfigPinia().SystemMode)

app.mount('#app')
