<template>
  <div>
    <elmhometitle/>
    <elmhomedatabox/>
    <echartstrend/>
    <echartsSmall/>
  </div>
</template>
<script>
import elmhometitle from '../components/elmHometitle'
import elmhomedatabox from '../components/elmHomeEcharts-box-data-box'
import echartstrend from '../components/elmHomeEcharts-box-trend-box'
import echartsSmall from '../components/elmHomeEcharts-small-box'
export default {
  components: {
    elmhometitle,
    elmhomedatabox,
    echartstrend,
    echartsSmall
  }
}
</script>
<style scoped>
@import "../assets/css/reset.css";
</style>
