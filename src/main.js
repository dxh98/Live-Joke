import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";
import { Tab, Tabs } from "vant";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Field } from 'vant';
import { Uploader } from 'vant';


Vue.use(Vant);
Vue.use(Tab).use(Tabs);
Vue.use(Field);
Vue.use(Uploader);



Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");