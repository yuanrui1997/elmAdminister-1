<template>
  <div class="all-box">
    <dataAllTit/>
    <dataAllUserinfo/>
    <dataAllOurderform/>
    <dataAllAdm/>
  </div>
</template>
<script>
import dataAllUserinfo from "./elmHomeEcharts-box-data-all-userinfo"
import dataAllTit from "./elmHomeEcharts-box-data-all-tit"
import dataAllOurderform from "./elmHomeEcharts-box-data-all-ourderform"
import dataAllAdm from "./elmHomeEcharts-box-data-all-adm"
export default {
  components: {
    dataAllUserinfo,
    dataAllTit,
    dataAllOurderform,
    dataAllAdm
  }
};
</script>
<style scoped>
.all-box{
    display: flex;
}
.all-box div{
    margin: 2px 6px;
}
</style>
