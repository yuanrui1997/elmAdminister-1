<template>
  <div>
  <div id="onebox">
    <div><h3>选择食品种类</h3></div>
    <div class="topBox">
      <elmaddfoot01></elmaddfoot01>
      <elmaddfoot02></elmaddfoot02>
    </div>
<!--    <elmaddfoot04></elmaddfoot04>-->
  </div>
  <div id="sixbox">
    <elmaddfoot06></elmaddfoot06>
  </div>
  </div>
</template>
<script>
  import  elmaddfoot01 from './elmAddFood/elmaddfoot01.vue'
  import elmaddfoot02 from'./elmAddFood/elmaddfoot02.vue'
  // import elmaddfoot04 from "./elmaddfoot04"
  import elmaddfoot06 from "./elmAddFood/elmaddfoot06.vue";
    export default {
      components:{
        elmaddfoot01,
        elmaddfoot02,
        // elmaddfoot04,
        elmaddfoot06,
      }
    }
</script>

<style scoped>
#onebox{
  width: 930px;
  /* border: 1px solid #eaeefb; */
  border-radius: 5px;
  margin: 0 auto;
}
  #onebox h3{
    font-size: 16px;
    text-align: center;
    font-weight: 500;
    color: #48576a;
    height: 40px;
    line-height: 40px;
  }
  #sixbox{
    margin: 0 auto;
  }
  #onebox .topBox{
    border:1px solid #eaeefb;
  }
</style>
