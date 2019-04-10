<template>
  <div class="today-box">
    <dataTodayTit/>
    <dataTodayuserinfo/>
    <dataTodayourderform/>
    <dataTodayadm/>
  </div>
</template>
<script>
import dataTodayTit from './elmHomeEcharts-box-data-today-tit'
import dataTodayuserinfo from './elmHomeEcharts-box-data-today-userinfo'
import dataTodayourderform from './elmHomeEcharts-box-data-today-ourderform'
import dataTodayadm from './elmHomeEcharts-box-data-today-adm'
export default {
  components: {
    dataTodayTit,
    dataTodayuserinfo,
    dataTodayourderform,
    dataTodayadm
  }
}
</script>
<style scoped>
.today-box{
    display: flex;
}
.today-box div{
  margin: 2px 6px;
}
</style>
