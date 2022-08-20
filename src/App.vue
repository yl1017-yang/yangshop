<template>

  <main>
    <Header />
    <!-- 상품 https://github.com/leeasher/shoppingmall_project/blob/master/client/src/store.js -->
    
    <router-view ></router-view>
    <!-- :작명="데이터이름"  :ProductData="ProductList" vuex 사용하므로 필요없음 -->    
    <!-- <h4>{{ this.$store.state.name }}</h4>
    <h4>{{ this.$store.state.ProductList }}</h4> -->
    
    <Footer />
  </main>

</template>

<script>
// components
import Header from '@components/Header.vue';
import Footer from '@components/Footer.vue';
//import ProductData from './assets/data/product.js';  //vuex 사용

export default {
  name: 'App',
  title: 'Main',
  components: {
    Header : Header,
    Footer : Footer,
  },

  data() {
    return {
      //ProductList : ProductData,
      //vuex 사용 - 작명 : 데이타이름
    }
  },
}
</script>

<style lang="scss">
  @import "@styles/modules.scss";
</style>
