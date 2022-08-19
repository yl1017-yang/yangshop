<template>
  <header class="header">
    <div class="inner">

      <section class="header_content">
        <h1 class="logo">
          <router-link to="/yangshop/">YANG<span>SHOP</span></router-link>
        </h1>
        <div class="search">
          <div class="search_inner">
            <input type="text" placeholder="양샵에 검색해주셔요" maxlength="30">
            <button type="button" class="btn_search"><span class="blind">검색</span></button>
          </div>
        </div>
        <div class="util">
          <a href="#">로그인</a>
          <a href="#">회원가입</a>
          <a href="#">마이페이지</a>
          <a href="#">주문/배송조회</a>
          <a href="#">장바구니</a>
        </div>
      </section>

      <section class="header_gnb">
        <div class="category">
          전체상품
        </div>
        <nav class="nav">
          <router-link to="/yangshop/NewProduct">새거상품</router-link>
          <router-link to="/yangshop/BestProduct">제일 잘나가</router-link>
          <router-link to="/yangshop/Event">기획전/이벤트</router-link>
          <router-link to="/yangshop/Gift">선물하숑</router-link>
        </nav>
      </section>

    </div>
  </header>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
</style>