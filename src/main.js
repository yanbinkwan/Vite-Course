import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import Element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'


createApp(App)
  .use(router)
  .use(store)
  .use(Element3)
  .mount('#app')
