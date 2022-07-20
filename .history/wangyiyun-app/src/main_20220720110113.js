import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import getVant from './plugins'
import Axio

const app=createApp(App)
app.use(store);
app.use(router).mount('#app')
getVant(app)//轮播图