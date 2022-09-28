import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import mixins from './mixins/mixins'
import store from './store/store'
import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:3000'

// Vue.prototype.$http = axios
// Vue.config.productionTip = false

//createApp(App).mount('#app')
const app = createApp(App);
app.use(router);
app.mixin(mixins);
app.use(store);
app.config.globalProperties.$axios = axios; 
app.mount("#app");

