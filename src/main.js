import Vue from "vue";
import App from "./App";
import router from "./router.js";
import VueRouter from "vue-router";

require("./assets/sass/main.scss");
Vue.config.productionTip = false;

Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  template: "<App/>",
  router,
  components: { App }
});
