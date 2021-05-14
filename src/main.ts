import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store  from './store'
import Andt from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
createApp(App).use(store).use(Andt).use(router).mount('#app')
