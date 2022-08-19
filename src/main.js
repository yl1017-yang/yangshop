import { createApp } from 'vue'
import App from './App.vue'
import router from './index'
import store from './store/store'

//createApp(App).mount('#app')
const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");

