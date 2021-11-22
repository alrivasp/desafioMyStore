import Vue from "vue";
import VueRouter from "vue-router";
import Inicio from "../views/Inicio.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Inicio,
  },

  {
    path: "/agregarproductos",
    name: "agregarproductos",
    component: () => import("../views/AgregarProducto.vue"),
  },
  {
    path: "/micarrito",
    name: "micarrito",
    component: () => import("../views/MiCarrito.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
