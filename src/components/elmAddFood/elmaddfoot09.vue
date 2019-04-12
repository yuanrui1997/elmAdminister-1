<template>
  <div class="tedian">
    <p>食品特点</p>
  <div class="tebox">
    <el-select
      v-model="value10"
      multiple
      filterable
      allow-create
      default-first-option
      placeholder="请选择">
      <el-option
        v-for="item in options5"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options5: [{
          value: '招牌',
          label: '招牌'
        }, {
          value: '新品',
          label: '新品'
        }],
        value10: []
      }
    }
  }
</script>

<style scoped>
  .tedian{
    display: flex;
    align-items: center;
    margin-top: 15px;
  }
  .tedian p{
    font-size: 16px;
    color: #48576a;
    margin-left: 15px;
  }
  .tebox{
    margin-left: 15px;
  }
</style>
