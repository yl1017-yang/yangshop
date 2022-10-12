import { createWebHistory, createRouter } from "vue-router";
import ErrorPage from "@pages/ErrorPage"
import Index from '@pages/Index.vue'
import ProductDetail from '@pages/ProductDetail.vue'
import NewProduct from '@pages/NewProduct.vue'
import BestProduct from '@pages/BestProduct.vue'
import Event from '@pages/Event.vue'
import EventDetail from '@pages/EventDetail.vue'
import Gift from '@pages/Gift.vue'
import SearchPage from '@pages/SearchPage.vue'
import SearchResult from '@pages/SearchResult.vue'

const routes = [
  {
    path: "/",
    redirect: "/yangshop/",
  },
  {
    path: "/yangshop",
    name : Index,
    component: Index,
  },
  {
    path: "/yangshop/ProductDetail=:id(\\d+)",
    name : ProductDetail,
    component: ProductDetail,
    // 함수로 지정하면 첫 번째 매개변수로 현재 라우트 객체를 사용할 수 있음
    props: route => ({
      id: Number(route.params.id)
    }),
  },
  {
    path: "/yangshop/NewProduct",
    name : NewProduct,
    component: NewProduct,
  },
  {
    path: "/yangshop/BestProduct",
    name : BestProduct,
    component: BestProduct,
  },
  {
    path: "/yangshop/Event",
    name : Event,
    component: Event,
  },
  {
    path: "/yangshop/EventDetail=:id(\\d+)",
    name : EventDetail,
    component: EventDetail,
  },
  {
    path: "/yangshop/Gift",
    name : Gift,
    component: Gift,
  },
  {
    path: "/:anything(.*)",
    component: ErrorPage,
  },
  {
    path: "/yangshop/SearchPage",
    name : SearchPage,
    component: SearchPage,
  },
  {
    path: "/yangshop/SearchResult",
    name : SearchResult,
    component: SearchResult,
  },
];

const router = createRouter({
  history: createWebHistory(), // history는 localhost뒤에 /#/을 삭제해주는 역할
  routes,
  // base: '/yangshop/',
});

export default router; 