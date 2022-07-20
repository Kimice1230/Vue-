import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plugins from ''


const app=createApp(App)
app.use(store);
app.use(router).mount('#app')
