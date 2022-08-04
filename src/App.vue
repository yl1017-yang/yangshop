<template>

  <main>
    <Header />

    <section class="container">
        <div class="main-visual">
          메인비주얼
        </div>
        
        <section class="content">
          <div class="con-icon-banner">
            <a href="#">
              <div class="icon"></div>
              <span>맛난과일</span>
            </a>
          </div>

          <div class="con-best">
            <a href="#">
              이미지
            </a>
          </div>
        </section>
    </section>

  </main>

</template>

<script>
import Header from '@components/Header.vue';

export default {
  name: 'App',
  components: {
    Header : Header,
  },
}
</script>

<style lang="scss">
  @import "@styles/modules.scss";
</style>
