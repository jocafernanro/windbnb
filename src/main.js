import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import "./directives/clickOutside";
import "./assets/css/tailwind.css";
import "./assets/css/animations.css";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
