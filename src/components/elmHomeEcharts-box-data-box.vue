<template>
  <div class="data-box">
    <dataToday/>
    <dataAll/>
  </div>
</template>
<script>
import dataToday from './elmHomeEcharts-box-data-today'
import dataAll from './elmHomeEcharts-box-data-all'
export default {
  components: {
    dataToday,
    dataAll
  }
}
</script>
<style scoped>
.data-box{
  margin: 20px 0 0 40px;
}
</style>
