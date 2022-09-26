<template id="search-form">
  <!-- 
    검색기능구현샘플 : https://jocoma.tistory.com/entry/%EC%A0%9C%ED%92%88-%EA%B2%80%EC%83%89-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84 
    서치폼 내용 : https://tothefullest08.github.io/javascript/2019/07/14/Inflearn11-Form_component/
  -->
  <div class="search">
    <div class="search_inner">
      <!-- <input type="text" placeholder="양샵에 검색해주셔요" maxlength="30" 
        v-model="keyword"
        @keyup.enter="searchresultshow(keyword)"
      >
      <button type="submit" class="btn_search"
        @click="searchresultshow(keyword)"
      > -->
      <form v-on:submit.prevent="onSubmit">
        <label for="keyword" class="blind">검색</label>
        <input
            type="text"
            placeholder="양샵에 입력해주세요"
            v-model="keyword"
            @keyup.enter="searchresultshow(keyword)"
        >
        <button
          type="submit"
          class="btn_search"
          @click="searchresultshow(keyword)"
        >
        </button>
      </form>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  template: '#search-form',
  data() {
    return {
      keyword: '',
    }
  },
  methods: {
    searchresultshow(keyword) {
      if (keyword !== ''){ //검색어를 입력한 경우
        this.$router.push({
          name: "SearchPage",
          params: {
            keyword: this.keyword,
            isResultShow: true,
          },
        });
        this.keyword = ''
        console.log('"',keyword,'"' + ' 검색')
      } else {
        alert('검색어를 입력해주세요!')  //검색어를 입력하지 않은 경우
      }
    },
  },
}
</script>

<style lang="scss">
</style>