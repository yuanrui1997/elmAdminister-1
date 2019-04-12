<template>
  <div>
    <div class="qunrun">
      <p>价格</p>
      <div class="sunfun">
        <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="100"></el-input-number>
      </div>
    </div>
    <div class="shagpin"><el-button type="primary"  @click="open6">确定添加商品</el-button></div>
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
      },
      open6() {
        this.$notify.error({
          title: '错误',
          message: '请检查输入是否正确'
        });
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
    margin-left: 47px;
  }
  .sunfun{
    margin-left: 15px;
  }
  .shagpin{
    margin-top: 20px;
    margin-left: 94px;
  }
</style>
