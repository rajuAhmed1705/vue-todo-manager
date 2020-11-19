import Vue from "vue";
import App from "./App.vue";
window.Vue = require("vue");

//element ui

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import store from "./store";

export const bus = new Vue();

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
