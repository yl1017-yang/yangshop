<template>

  <main>
    <Header />

    <section class="container">
      <swiper v-bind="swipers" :modules="modules" class="mainVisualSwiper" ref="mySwiper">
        <swiper-slide v-for="n in 3" :key="n"> {{ n }} </swiper-slide>
      </swiper>
      <!-- <div class="swiper-pagination"></div> -->
    
      <div class="inner">
        <section class="content">
          <div class="con_icon_banner">
            <a href="#">
              <div class="icon"></div>
              <span>맛난과일</span>
            </a>
          </div>

          <div class="con_best">
            <a href="#">
              이미지
            </a>
          </div>
        </section>
      </div>
    </section>

    <Footer />
  </main>

</template>

<script>
// components
import Header from '@components/Header.vue';
import Footer from '@components/Footer.vue';

// libs
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay, Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Autoplay, Navigation, Pagination, A11y]);

export default {
  name: 'App',
  title: 'Main',
  components: {
    Header : Header,
    Footer : Footer,
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
  @import "@styles/modules.scss";

  .mainVisualSwiper {
    height: 540px;
    width: 100%;
    background: #444;
  
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;

      &:nth-child(1n) {
        background: url(#{$images}/main/main-visual-01.jpg) top center no-repeat;
      }
      &:nth-child(2n) {
        background: url(#{$images}/main/main-visual-02.jpg) top center no-repeat;
      }
      &:nth-child(3n) {
        background: url(#{$images}/main/main-visual-03.jpg) top center no-repeat;
      }
    }

    & .swiper-pagination {
      width: 1200px;
      left: 50%;
      transform: translateX(-50%);
      bottom: 55px;
      font-size: 14px;
      color: $black;
      text-align: left;
    }

    & .swiper-button-next, .swiper-button-prev {
      top: auto;
      bottom : 55px;
    }
    & .swiper-button-prev {
      border: 1px solid red;
      
    }
    & .swiper-button-next {
      border: 1px solid red;
    }    
  }
</style>
