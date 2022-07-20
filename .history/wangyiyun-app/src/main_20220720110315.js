import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import getVant from './plugins'
import axios from 'axios'

const app=createApp(App)
app.use(store);
app.use(router).mount('#app')
getVant(app)//轮播图
//设置全局axios
Vue.prototype.$axios=axios
//设置基本的默认路径
axios.defaults.