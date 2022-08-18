import { createWebHistory, createRouter } from "vue-router";
import Index from '@pages/Index.vue';
import NewProduct from '@pages/NewProduct.vue';
import BestProduct from '@pages/BestProduct.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 