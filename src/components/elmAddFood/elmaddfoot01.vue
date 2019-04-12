<template>
  <div class="gundun">
      <h3 class="wzbox">食品种类</h3>
    <div >
    <el-select v-model="value8" filterable placeholder="请选择" id="xuanze">
      <el-option
        v-for="item in options"
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
        options: [{
          value: '选项1',
          label: '123'
        }, {
          value: '选项2',
          label: 'qew'
        }, {
          value: '选项3',
          label: 'nim'
        }, {
          value: '选项4',
          label: 'dfdfd'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value8: ''
      }
    }
  }
</script>

<style>
.gundun{
  height: 50px;
  display: flex;
  align-items: center;
  padding: 10px 30px 10px 10px;
  margin-bottom: 22px;

}
#xuanze{
  width: 740px;
  height: 45px;
  margin-left: 15px;
}
  .wzbox{
    font-size: 16px;
    color: #48576a;
    font-weight: 100;
  }
</style>
