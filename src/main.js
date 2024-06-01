
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/**
 * 引入MDUI UI框架
 */
import 'mdui/mdui.css';
import 'mdui';
import { setColorScheme,loadLocale } from 'mdui'

setColorScheme("#9ecaff")

const app = createApp(App)

app.use(router)


app.mount('#app')
