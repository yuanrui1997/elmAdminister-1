<template>
    <div class="small-box">
        <trend/>
        <quarter/>
    </div>
</template>
<script>
import trend from './elmHomeEcharts-box-today'
import quarter from './elmHomeEcharts-box-quarter'
export default {
    components:{
        trend,
        quarter
    }
}
</script>
<style scoped>
.small-box{
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
}
@media screen and (max-width: 850px){
  .small-box{
    flex-wrap: wrap;
  }
}
</style>
