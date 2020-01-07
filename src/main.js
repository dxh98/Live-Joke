import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Tab, Tabs } from 'vant';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(Vant)
Vue.use(Tab).use(Tabs);

Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')