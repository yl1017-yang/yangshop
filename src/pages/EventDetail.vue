<template>

  <section class="container">
    <div class="inner">
      <section class="content sub_content">        
        <div class="content_event">
          
          <section class="event_detail_info">
            <h3>{{ EventDetail[$route.params.id].title }}</h3>
            <span>{{ EventDetail[$route.params.id].date }} ~ {{ timestamp }}</span>
          </section>

          <figure class="event_detail_img">
            <img :src="EventDetail[$route.params.id].image" :alt="EventDetail[$route.params.id].title">
          </figure>
          
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
    EventDetail() {
      return this.$store.state.EventList; // 상품 정보가 바뀔 때마다 자동으로 EventList() 갱신
    },
  },

  data() {
    return {
      timestamp: ""
    };
  },
  created() {
    const now = new Date();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    //const weekList = new Array("Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.");
    //const week = weekList[now.getDay()];
    this.timestamp = `${month}-${date}`;
  }
}
</script>

<style lang="scss">
</style>