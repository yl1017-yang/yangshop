import { createWebHistory, createRouter } from "vue-router";
import ErrorPage from "@pages/ErrorPage"
import Index from '@pages/Index.vue'
import ProductDetail from '@pages/ProductDetail.vue'
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
    path: "/yangshop/ProductDetail/:id",
    component: ProductDetail,
  },
  {
    path: "/yangshop/NewProduct",
    component: NewProduct,
  },
  {
    path: "/yangshop/BestProduct",
    component: BestProduct,
  },
  {
    path: "/yangshop/Event",
    component: Event,
  },
  {
    path: "/yangshop/Gift",
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