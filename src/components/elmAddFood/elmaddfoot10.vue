<template>

  <div class="guige">
    <p>食品规格</p>
    <div class="tunhuny">
      <el-radio v-model="radio" label="1">单规格</el-radio>
      <el-radio v-model="radio" label="2">多规格</el-radio>
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>

<style scoped>
.guige{
  display: flex;
  align-items: center;
  margin-top: 20px;
}
  .guige p{
  font-size: 16px;
  color: #48576a;
  margin-left: 15px;
}
  .tunhuny{
    margin-left: 15px;
  }

</style>
