<template>

  <section class="container">
    <div class="inner">
      <section class="content sub_content">
        <div class="content">
          <h2>새거상품</h2>
          <span>총 {{ ProductList.length }}개</span>
          
          <ul class="product_list type4">
            <li class="product_item" v-for="(item, index) in ProductList" :key="index">
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
export default {
  name: 'App',
  components: {
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
  
}
</script>

<style lang="scss">
</style>