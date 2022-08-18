<template>

  <main>
    <Header />
    
    <router-view :ProductData="ProductList"></router-view>
    <!-- :작명="데이터이름" -->

    <Footer />
  </main>

</template>

<script>
// components
import Header from '@components/Header.vue';
import Footer from '@components/Footer.vue';
import ProductData from './assets/data/product.js';

export default {
  name: 'App',
  title: 'Main',
  components: {
    Header : Header,
    Footer : Footer,
  },

  data() {
    return {
      ProductList : ProductData,
      //작명 : 데이타이름
    }
  },
}
</script>

<style lang="scss">
  @import "@styles/modules.scss";
</style>
