import Vue from "vue";
import Vuex from "vuex";

import stays from "./modules/stays";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    stays
  }
});
