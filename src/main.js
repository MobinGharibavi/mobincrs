import { createApp } from 'vue/dist/vue.esm-bundler' 
import router from './router'
import './style.css'
import App from './App.vue'

createApp(App).
  use(router).
  mount('#app')
