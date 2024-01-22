import { createApp } from 'vue'
import App from './App.vue'
import './assets/reset.css'
import 'amfe-flexible'
import router from "./router/index"

//1.引入组件
import Vant from 'vant';
//2.引入组件样式
import 'vant/lib/index.css';

const app = createApp(App)
app.use(router).use(Vant)
app.mount('#app')
