<template>

  <section class="container">
    <div class="inner">
      <section class="content sub_content">
        <div class="content_event">
          <h2>기획전/이벤트</h2>

          <ul class="event_list">
            <li class="event_item" v-for="(item, index) in EventList" :key="index">
              <a @click="goToDetail(item.id)">
                <figure class="event_img">
                  <img :src="item.thumb_image" alt="">
                </figure>
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
    EventList() {
      return this.$store.state.EventList; // 상품 정보가 바뀔 때마다 자동으로 EventList() 갱신
    },
  },
  methods: {
    goToDetail(id) {
      console.log("goToDetail(id)가 호출되었습니다. 상품 : id 값" + id);
      this.$router.push(`/yangshop/EventDetail=${ id }`);
    },
  },
}
</script>

<style lang="scss">
</style>