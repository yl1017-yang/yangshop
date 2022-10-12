<template>
  <section class="container">
    <swiper v-bind="swipers" :modules="modules" class="mainVisualSwiper" ref="mySwiper">
      <swiper-slide v-for="swiper in 3" :key="swiper">{{ swiper }}</swiper-slide>
    </swiper>

    <div class="inner">
      <section class="content">
        <div class="content_iconBanner">
          <a href="#" v-for="(icon, index) in iconBanner" :key="index">
            <div class="icon"><img :src="icon.icon" alt=""></div>
            <span>{{ icon.title }}</span>
          </a>
        </div>

        <div class="content_bestItem">

          <bestItem />

          <ul class="product_list typeBest">
            <!-- <li class="product_item" v-for="(item, index) in 2" :key="index"> -->
            <li class="product_item" v-for="(item, index) in ProductList.slice(0, 2)" :key="index">
              <a @click="goToDetail(item.id)">
                <figure class="product_img">
                  <img :src="item.image" alt="">
                </figure>
                <span class="tag">
                    0{{ index + 1 }}
                  </span>
                <div class="product_info">
                  <span class="info_title">
                    {{ item.title }}
                  </span>
                  <span class="info_discount">
                    <span class="blind">할인율</span>
                    <strong>{{ item.discount }}</strong>%
                  </span>
                  <span class="info_price">
                    <span class="blind">할인가</span>
                    <strong>{{ getCurrencyFormat(item.price) }}</strong>원
                  </span>
                  <del class="info_del">
                    <span class="blind">정상가</span>
                    {{ getCurrencyFormat(item.priceRegular) }}
                  </del>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div class="content_longBanner">
          <router-link to="/yangshop/gift"><img src="assets/images/main/img-longbanner.jpg" alt=""></router-link>
        </div>        

        <div class="content_newItem">
          <h2>새거상품</h2>
          
          <div v-if="ProductList == 0">
            <h5>등록된 상품이 없습니다.</h5>
          </div>

          <ul class="product_list type3">
            <!-- <li class="product_item" v-for="(item) in ProductList" :key="item.id"> -->
            <li class="product_item" v-for="(item, index) in  ProductList.slice(0, 9)" :key="index">
              <a @click="goToDetail(item.id)">
                <figure class="product_img">
                  <img :src="item.image" :alt="item.title">
                </figure>
                <div class="product_info">
                  <span class="info_title">
                    {{ item.title }}
                  </span>
                  <span class="info_discount">
                    <span class="blind">할인율</span>
                    <strong>{{ item.discount }}</strong>%
                  </span>
                  <span class="info_price">
                    <span class="blind">할인가</span>
                    <strong>{{ getCurrencyFormat(item.price) }}</strong>원
                  </span>
                  <del class="info_del">
                    <span class="blind">정상가</span>
                    {{ getCurrencyFormat(item.priceRegular) }}
                  </del>
                </div>
              </a>
            </li>
          </ul>
        </div>

      </section>
    </div>
  </section>

</template>

<script>
// libs
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay, Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import bestItem from '../components/bestItem.vue';

SwiperCore.use([Autoplay, Navigation, Pagination, A11y]);

export default {
  name: 'App',
  components: {
    Swiper,
    SwiperSlide,
    bestItem,
  },

  data() {
    return {
      //스와이퍼
      swipers: {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        loop: true,
        navigation: true,
        //pagination: true,
        pagination: {
          clickable: true,
          type: "fraction",
        },
      },
      modules: [Autoplay, Pagination, Navigation, A11y],

      //아이콘 배너
      iconBanner : [
        {icon: "assets/images/icon/icon-banner-01.svg", title: "맛난과일"},
        {icon: "assets/images/icon/icon-banner-02.svg", title: "짱편한 간편식"},
        {icon: "assets/images/icon/icon-banner-03.svg", title: "튼튼 과자/간식"},
        {icon: "assets/images/icon/icon-banner-04.svg", title: "살찌는 빵"},
        {icon: "assets/images/icon/icon-banner-05.svg", title: "우유/유제품"},
        {icon: "assets/images/icon/icon-banner-06.svg", title: "고기짱"},
        {icon: "assets/images/icon/icon-banner-07.svg", title: "맛없는 샐러드"},
      ],
    }
  },

  computed: {
    //vuex 데이터 가져오기
    ProductList() {
      return this.$store.state.ProductList; // 상품 정보가 바뀔 때마다 자동으로 ProductList() 갱신
    },
  },

  methods: {
    getCurrencyFormat(value) {
      // 가격의 ,을 새겨주는 $currencyFormat 호출
      return this.$currencyFormat(value);
    },
    goToDetail(id) {
      console.log("goToDetail(id)가 호출되었습니다. 상품 : id 값" + id);
      this.$router.push(`/yangshop/ProductDetail=${ id }`);
    },
  },

  props: {
    //ProductData : Array,
    //vuex 사용 - 데이터이름 : 자료형이름
  },
  
}
</script>

<style lang="scss">
</style>