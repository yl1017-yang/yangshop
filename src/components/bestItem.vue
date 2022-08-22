<template>
  <h2>
    오늘 만 특가
    <span class="bestItem_timer" id="timer"></span>
    <!-- https://goddino.tistory.com/29 -->
    <span class="special-price__timer" ref="timer"></span>
  </h2>
</template>

<script>
export default {
  name: 'App',

  mounted () {
    //this.setTimer();
    this.setTime();
  },

  methods: {
    // 타임딜 카운트다운
    // setTimer() {
    //   const targetDate = new Date('2099-12-30T00:00:00');
    //   setInterval(() => {
    //       const $timer = this.$refs.timer;
    //       if(!$timer) {
    //           return;
    //       }
    //       const { hours, minutes, seconds } = this.countDown(targetDate);
    //       $timer.innerHTML = `${this.timeToTwoDigits(hours)} : ${this.timeToTwoDigits(minutes)} : ${this.timeToTwoDigits(seconds)}`;
    //   }, 1000);
    // },

    setTime() {
      const dday = new Date("2099-12-30T00:00:00").getTime();
      setInterval(() => {
        const today = new Date().getTime();
        const gap = dday - today;
        const hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
        const sec = Math.ceil((gap % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = hour + " : " + min + " : " + sec;
      }, 1000);
    },

  }
}
</script>

<style lang="scss">
</style>