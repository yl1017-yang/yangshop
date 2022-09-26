<template>

  <div id="searchpage">
    <div id="searchrequire">
      <div class="search-form-title">검색조건</div>
      <div class="search-form-input">
        <b-form-input id="input-default" 
        type="text"
        v-model="keyword"
        v-on:input="keywordChanged()"
        v-on:keyup.enter="searchresultshow(keyword)"
        >
        {{keyword}}
        </b-form-input>
      </div>
      <div class="search-form-button">
        <button @click="searchresultshow(keyword)">
          검색
        </button>
      </div>
    </div>
    <SearchResult v-if="isResultShow" v-bind:keyword="keyword"></SearchResult>
    <div v-else>
      아직 검색어를 입력하지 않았습니다.
    </div>
  </div>

</template>

<script>
import SearchResult from "@pages/SearchResult.vue";

export default {
  name: 'SearchPage',
  components: {
    SearchResult
  },

  data() {
    return {
      isResultShow:true,  //nav.vue에서 라우터를 이용해 보낸 파라미터로부터 데이터 받음 
      keyword: this.$route.params.keyword  //nav.vue에서 라우터를 이용해 보낸 파라미터로부터 데이터 받음 
    }
  },
  
  methods: {
    searchresultshow(keyword) {
      console.log('"',keyword,'"' + ' 검색')
      if (keyword !== ''){
        this.$router.push({
          name: "SearchPage",
          params: {
            keyword: this.keyword
          },
        }).catch(()=>{});
        this.isResultShow = true
      } else {
        alert('검색어를 입력해주세요!')
      }
    },
    keywordChanged() {
      this.isResultShow = false
    }
  },  
}
</script>

<style lang="scss">
</style>