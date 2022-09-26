<template>

  <div id="searchresult">
    <div class="result-title">
      총 {{$store.getters.getFilteredProduct(keyword).length}}개의 상품이 검색되었습니다.
    </div>
    
    <div class="result-items">
      <div
      class="resultitem"
      :key="index"
      v-for="(product, index) in $store.getters.getFilteredProduct(keyword)"
      @click="detailshow(index)"
    >
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
    </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'SearchResult',
  props: [ 'keyword'], //상위 컴포넌트인 SearchPage.vue로부터 데이터 받음
  data() {
    return {
    }
  },
  computed: {
    //vuex 데이터 가져오기
    ProductList() {
      return this.$store.state.ProductList; // 상품 정보가 바뀔 때마다 자동으로 ProductList() 갱신
    },
  },
}
</script>

<style lang="scss">
</style>