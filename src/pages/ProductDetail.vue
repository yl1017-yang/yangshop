<template>

  <section class="container">
    <div class="inner">
      <section class="content sub_content">

        <section class="product_top">
          <figure class="detail_img">
            <img :src="ProductDetail[$route.params.id].image" :alt="ProductDetail[$route.params.id].title">
          </figure>

          <section class="detail_info_wrap">
            <header class="detail_info_header">
              <h3>{{ ProductDetail[$route.params.id].title }}</h3>
              <a @click="$router.go(-1)" class="btn_back">〈<span class="blind">뒤로가기</span></a>
            </header>
            
            <div class="detail_info_price">
              <del class="info_del">
                <span class="blind">정상가</span>
                {{ getCurrencyFormat(ProductDetail[$route.params.id].priceRegular) }}
              </del>
              <span class="info_price">
                <span class="blind">할인가</span>
                <strong>{{ getCurrencyFormat(ProductDetail[$route.params.id].price) }}</strong>원
              </span>
              <span class="info_discount">
                <span class="blind">할인율</span>
                <strong>{{ ProductDetail[$route.params.id].discount }}</strong>%
              </span>
            </div>
            
            <div class="detail_info_content">
              <dl>
                <dt>배송정보</dt>
                <dd>무료배송</dd>
                <dt>혜택</dt>
                <dd>양샵 첫 결제 10% 적립</dd>
              </dl>
            </div>

            <div class="detail_info_quantity">
              <div class="info_quantity_wrap">
                <button type="button" tabindex="0" class="info_quantity_btn_minus">-<span class="blind">빼기</span></button>
                <span class="info_quantity_number">1</span>
                <button type="button" tabindex="0" class="info_quantity_btn_plus">+<span class="blind">추가</span></button>
              </div>
              <span class="info_quantity_price"><em>8,950</em>원</span>
            </div>

            <div class="detail_info_summary">
              <dl>
                <dt>주문금액</dt>
                <dd><em>8,950</em>원</dd>
              </dl>
            </div>
          
            <footer class="detail_info_footer">
              <button type="button" tabindex="0" class="btn_detail_cart">장바구니</button>
              <button type="button" tabindex="0" class="btn_detail_buy">구매하기</button>
            </footer>
          </section>
        </section>

        <section class="product_content">
          
          <figure class="detail_img">
            <img :src="ProductDetail[$route.params.id].image" :alt="ProductDetail[$route.params.id].title">
          </figure>
          <h4>{{ ProductDetail[$route.params.id].title }}</h4>
          <p>닭갈비는 막국수와 함께 춘천을 상징하는 대표적인 음식이지요. 커다란 무쇠팬에 달달 볶아낸 매콤달콤한 닭갈비의 맛은 머릿속에 그려질 듯 친근하고 익숙해요. 하지만 손수 그 맛을 구현하기란 쉽지 않지요. 컬리는 가정에서도 간편하게 춘천의 맛을 즐길 수 있도록 미트클레버의 춘천 닭갈비를 준비했습니다. 간장을 베이스로 고춧가루, 물엿 등과 곱게 간 채소로 양념을 만들어 자연스러운 감칠맛이 일품이지요. 신선한 냉장 닭을 사용했기에 잡내가 없고 살코기가 부드럽게 씹힙니다. 입맛을 당기는 붉은 빛깔과 매콤한 맛으로 자꾸만 젓가락질을 하게 돼요. 자작한 양념에 밥을 볶거나 면 사리를 넣어 든든하고 풍성한 상을 차려보세요. </p>
        </section>

      </section>
    </div>
  </section>

</template>

<script>
export default {
  name: 'App',
  components: {
  },

  // props : {
  //   ProductDetail : Array,
  // },

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