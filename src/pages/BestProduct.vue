<template>

  <section class="container">
    <div class="inner">
      <section class="content sub_content">
        <div class="content">
          <h2>내가 젤 잘나가</h2>
          <!-- <span>총 {{ ProductList.length }}개</span> -->
          <span>총 {{ cnt }} / {{ totalCount }}개</span>
          
          <ul class="product_list type4">
            <template v-for="(item, index) in ProductList" :key="index">
              <li class="product_item" v-if="item.state == '베스트상품'">
                <a @click="goToDetail(item.id)">
                  <figure class="product_img">
                    <img :src="item.image" :alt="item.title">
                  </figure>
                  <div class="product_info">
                    <span class="info_tag_best">
                      {{ index }}
                    </span>
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
                    {{ item.state }}
                  </div>
                </a>
              </li>
            </template>
          </ul>
        </div>

      </section>
    </div>
  </section>

</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      cnt: 0,
    }
  },

  computed: {
    //vuex 데이터 가져오기
    ProductList() {
      return this.$store.state.ProductList; // 상품 정보가 바뀔 때마다 자동으로 ProductList() 갱신
    },
    totalCount() {
      if(this.cnt == 0) {
        return 1;
      } else {
        return Math.ceil(this.cnt/10);
      }
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