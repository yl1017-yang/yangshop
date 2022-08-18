import { createApp } from 'vue'
import App from './App.vue'
import router from './index'

//createApp(App).mount('#app')
createApp(App).use(router).mount('#app')