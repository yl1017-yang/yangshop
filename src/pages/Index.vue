<template>

  <section class="container">
    <swiper v-bind="swipers" :modules="modules" class="mainVisualSwiper" ref="mySwiper">
      <swiper-slide v-for="n in 3" :key="n">{{n}}https://yl1017-yang.github.io/yangshop/</swiper-slide>
    </swiper>

    <div class="inner">
      <section class="content">
        <div class="content_iconBanner">
          <a href="#">
            <div class="icon"><img src="assets/images/icon/icon-banner-01.svg" alt=""></div>
            <span>맛난과일</span>
          </a>
          <a href="#">
            <div class="icon"><img src="assets/images/icon/icon-banner-02.svg" alt=""></div>
            <span>짱편한 간편식</span>
          </a>
          <a href="#">
            <div class="icon"><img src="assets/images/icon/icon-banner-03.svg" alt=""></div>
            <span>튼튼 과자/간식</span>
          </a>
          <a href="#">
            <div class="icon"><img src="assets/images/icon/icon-banner-04.svg" alt=""></div>
            <span>살찌는 빵</span>
          </a>
          <a href="#">
            <div class="icon"><img src="assets/images/icon/icon-banner-05.svg" alt=""></div>
            <span>우유/유제품</span>
          </a>
          <a href="#">
            <div class="icon"><img src="assets/images/icon/icon-banner-06.svg" alt=""></div>
            <span>고기짱</span>
          </a>
          <a href="#">
            <div class="icon"><img src="assets/images/icon/icon-banner-07.svg" alt=""></div>
            <span>맛없는 샐러드</span>
          </a>
        </div>

        <div class="content_bestItem">
          <h2>내가 제일 잘나가!</h2>
          <ul class="product_list">
            <li class="product_item">
              <a href="#">
                <figure class="product_img">
                  <img src="assets/images/main/item-big-01.jpg" alt="">
                </figure>
                <div class="product_info">
                  <span class="info_title">
                    저탄소 GAP 스테비 복숭아 (2kg)
                  </span>
                  <span class="info_discount">
                    <span class="blind">할인율</span>
                    <strong>50</strong>%
                  </span>
                  <span class="info_price">
                    <span class="blind">할인가</span>
                    <strong>5,680</strong>원
                  </span>
                  <del class="info_del">
                    <span class="blind">정상가</span>
                    5,680
                  </del>
                </div>
              </a>
            </li>
            <li class="product_item">
              <a href="#">
                <figure class="product_img">
                  <img src="assets/images/main/item-big-02.jpg" alt="">
                </figure>
                <div class="product_info">
                  <span class="info_title">
                    아삭한 파프리카 샐러드(80g)
                  </span>
                  <span class="info_discount">
                    <span class="blind">할인율</span>
                    <strong>85</strong>%
                  </span>
                  <span class="info_price">
                    <span class="blind">할인가</span>
                    <strong>5,680</strong>원
                  </span>
                  <del class="info_del">
                    <span class="blind">정상가</span>
                    5,680
                  </del>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div class="content_longBanner">
          <img src="assets/images/main/img-longbanner.jpg" alt="">
        </div>

        <div class="content_newItem">
          <h2>새거상품</h2>
          <ul class="product_list">
            <li class="product_item">
              <a href="#">
                <figure class="product_img">
                  <img src="assets/images/main/item-01.jpg" alt="">
                </figure>
                <div class="product_info">
                  <span class="info_title">
                    워싱톤 생체리(400g내외/10R)
                  </span>
                  <span class="info_discount">
                    <span class="blind">할인율</span>
                    <strong>50</strong>%
                  </span>
                  <span class="info_price">
                    <span class="blind">할인가</span>
                    <strong>5,680</strong>원
                  </span>
                  <del class="info_del">
                    <span class="blind">정상가</span>
                    5,680
                  </del>
                </div>
              </a>
            </li>
            <li class="product_item">
              <a href="#">
                <figure class="product_img">
                  <img src="assets/images/main/item-02.jpg" alt="">
                </figure>
                <div class="product_info">
                  <span class="info_title">
                    신선한 고당도 네이블 오렌지(8개/1.5kg내외)
                  </span>
                  <span class="info_discount">
                    <span class="blind">할인율</span>
                    <strong>30</strong>%
                  </span>
                  <span class="info_price">
                    <span class="blind">할인가</span>
                    <strong>23,000</strong>원
                  </span>
                  <del class="info_del">
                    <span class="blind">정상가</span>
                    26,000
                  </del>
                </div>
              </a>
            </li>
            <li class="product_item">
              <a href="#">
                <figure class="product_img">
                  <img src="assets/images/main/item-03.jpg" alt="">
                </figure>
                <div class="product_info">
                  <span class="info_title">
                    청송 아오리사과 1.5kg내외
                  </span>
                  <span class="info_discount">
                    <span class="blind">할인율</span>
                    <strong>21</strong>%
                  </span>
                  <span class="info_price">
                    <span class="blind">할인가</span>
                    <strong>12,680</strong>원
                  </span>
                  <del class="info_del">
                    <span class="blind">정상가</span>
                    15,680
                  </del>
                </div>
              </a>
            </li>
            <li class="product_item">
              <a href="#">
                <figure class="product_img">
                  <img src="assets/images/main/item-04.jpg" alt="">
                </figure>
                <div class="product_info">
                  <span class="info_title">
                    워싱톤 생체리(400g내외/10R)
                  </span>
                  <span class="info_discount">
                    <span class="blind">할인율</span>
                    <strong>50</strong>%
                  </span>
                  <span class="info_price">
                    <span class="blind">할인가</span>
                    <strong>5,680</strong>원
                  </span>
                  <del class="info_del">
                    <span class="blind">정상가</span>
                    5,680
                  </del>
                </div>
              </a>
            </li>
            <li class="product_item">
              <a href="#">
                <figure class="product_img">
                  <img src="assets/images/main/item-05.jpg" alt="">
                </figure>
                <div class="product_info">
                  <span class="info_title">
                    고당도 수박6~7kg
                  </span>
                  <span class="info_discount">
                    <span class="blind">할인율</span>
                    <strong>30</strong>%
                  </span>
                  <span class="info_price">
                    <span class="blind">할인가</span>
                    <strong>23,000</strong>원
                  </span>
                  <del class="info_del">
                    <span class="blind">정상가</span>
                    26,000
                  </del>
                </div>
              </a>
            </li>
            <li class="product_item">
              <a href="#">
                <figure class="product_img">
                  <img src="assets/images/main/item-06.jpg" alt="">
                </figure>
                <div class="product_info">
                  <span class="info_title">
                    제스프리 골드키위 15입(2.1kg내외)
                  </span>
                  <span class="info_discount">
                    <span class="blind">할인율</span>
                    <strong>21</strong>%
                  </span>
                  <span class="info_price">
                    <span class="blind">할인가</span>
                    <strong>12,680</strong>원
                  </span>
                  <del class="info_del">
                    <span class="blind">정상가</span>
                    15,680
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

SwiperCore.use([Autoplay, Navigation, Pagination, A11y]);

export default {
  name: 'App',
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
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
    }
  }

  
}
</script>

<style lang="scss">
</style>