<template>
  <div class="qunrun">
    <p>包装费</p>
      <div class="sunfun">
         <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="100"></el-input-number>
      </div>

<!--      <div class="qunrun">-->
<!--        <p>价格</p>-->
<!--        <div class="sunfun">-->
<!--          <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="100"></el-input-number>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="shagpin"><el-button type="primary">确定添加商品</el-button></div>-->
    </div>
</template>

<script>
  export default {
    data() {
      return {
        num8: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>

<style scoped>
.qunrun{
  display: flex;
  align-items: center;
  margin-top: 20px;
}
  .qunrun p{
    font-size: 16px;
    color: #48576a;
    margin-left: 30px;
  }
  .sunfun{
    margin-left: 15px;
  }
</style>
