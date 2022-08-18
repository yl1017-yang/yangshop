import { createWebHistory, createRouter } from "vue-router";
import ErrorPage from "@pages/ErrorPage"
import Index from '@pages/Index.vue'
import NewProduct from '@pages/NewProduct.vue'
import BestProduct from '@pages/BestProduct.vue'
import Event from '@pages/Event.vue'
import Gift from '@pages/Gift.vue'

const routes = [
  {
    path: "/yangshop/",
    component: Index,
  },
  {
    path: "/yangshop/newProduct",
    component: NewProduct,
  },
  {
    path: "/yangshop/bestProduct",
    component: BestProduct,
  },
  {
    path: "/yangshop/event",
    component: Event,
  },
  {
    path: "/yangshop/gift",
    component: Gift,
  },
  {
    path: "/:catchAll(.*)",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 