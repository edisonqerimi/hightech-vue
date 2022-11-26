import { createApp } from "vue/dist/vue.esm-bundler.js";
import {createRouter, createWebHistory} from "vue-router";
import Home from "./views/Home.vue";
import App from "./App.vue"
const routes = [{ path: "/",name:"Home", component: Home }];
const router = createRouter({
  history:createWebHistory(),
  routes, // short for `routes: routes`
});

router.beforeEach((to,from,next)=>{
  document.title = to.name?? "High Tech";
  
  next();
})
const app = createApp(App)

app.use(router)
app.mount("#app");
