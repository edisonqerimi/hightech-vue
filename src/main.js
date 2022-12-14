import { createApp } from "vue/dist/vue.esm-bundler.js";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import ShopView from "./views/ShopView.vue";
import ProductDetails from "./views/ProductDetails.vue";
import App from "./App.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/shop", name: "Shop", component: ShopView },
  { path: "/shop/:category", name: "Category", component: ShopView },
  { path: "/shop/product/:id", name: "Product", component: ProductDetails },
];
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
  scrollBehavior(to) {
    // always scroll to top
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0,behavior:"smooth" }
  }
});

router.beforeEach((to, from, next) => {
  document.title = to.name ?? "High Tech";

  next();
});
const app = createApp(App);

app.use(router);
app.mount("#app");
