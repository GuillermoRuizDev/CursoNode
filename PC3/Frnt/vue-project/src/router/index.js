import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import ResetPassword from "../views/ResetPasswordView.vue";
import Product from "../views/ProductView.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/product", component: Product },
  { path: "/resetPassword", component: ResetPassword},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;