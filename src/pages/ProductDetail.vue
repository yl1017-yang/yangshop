<template>

  <section class="container">
    <div class="inner">
      <section class="content sub_content">
        <div class="content">
          <p>뒤로가기</p>
          <h2>{{ ProductDetail[$route.params.id].title }}</h2>
          <div>
            
          </div>
          
          <figure class="product_img">
            <img :src="ProductDetail[$route.params.id].image" :alt="ProductDetail[$route.params.id].title">
          </figure>
          <div class="detail_info">
            <span class="info_title">
              {{ ProductDetail[$route.params.id].title }}
            </span>
            <span class="info_discount">
              <span class="blind">할인율</span>
              <strong>{{ ProductDetail[$route.params.id].discount }}</strong>%
            </span>
            <span class="info_price">
              <span class="blind">할인가</span>
              <strong>{{ ProductDetail[$route.params.id].price }}</strong>원
            </span>
            <del class="info_del">
              <span class="blind">정상가</span>
              {{ ProductDetail[$route.params.id].priceRegular }}
            </del>
          </div>
        </div>
      </section>
    </div>
  </section>

</template>

<script>
export default {
  name: 'App',
  components: {
  },

  data() {
     return {
     }
  },
  methods: {
    getCurrencyFormat(value) {
      // 가격의 ,을 새겨주는 $currencyFormat 호출
      return this.$currencyFormat(value);
    },
  },

  computed: {
    //vuex 데이터 가져오기
    ProductDetail() {
      return this.$store.state.ProductList; // 상품 정보가 바뀔 때마다 자동으로 ProductList() 갱신
    },
  },
  
}
</script>

<style lang="scss">
</style>