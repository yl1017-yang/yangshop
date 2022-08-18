<template>

  <main>
    <Header />
    
    <router-view></router-view>

    <Footer />
  </main>

</template>

<script>
// components
import Header from '@components/Header.vue';
import Footer from '@components/Footer.vue';



export default {
  name: 'App',
  title: 'Main',
  components: {
    Header : Header,
    Footer : Footer,    
  },  

}
</script>

<style lang="scss">
  @import "@styles/modules.scss";
</style>
