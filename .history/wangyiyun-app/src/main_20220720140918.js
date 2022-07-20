import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import getVant from './plugins'
//引入axios  by zhengkai.blog.csdn.net
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'  //自动附加在所有axios请求前面，则可以省略/api，直接写'/xxxx/xxx'。否则需要设置'/api/xxxx/xxx'


const app=createApp(App)
app.use(store);
app.use(router).mount('#app')
getVant(app)//轮播图