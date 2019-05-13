import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import Routes from "./routes.js";

require("./assets/sass/main.scss");
Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
});

console.log("in main.js");
/* eslint-disable no-new */
new Vue({
  el: "#app",
  template: "<App/>",
  router,
  components: { App }
});
