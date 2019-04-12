<template>
  <div id="dunrung">
    <div class="tungun">
        <h3>食品名称</h3>
      <div class="wuneun">
        <el-input class="hunju"
          v-model="input10"
          clearable>
        </el-input>
      </div>
    </div>

    <div class="tungun">
      <h3>食品活动</h3>
      <div class="wuneun">
        <el-input class="hunju"
                  v-model="input10"
                  clearable>
        </el-input>
      </div>
    </div>

    <div class="tungun">
      <h3>食品详情</h3>
      <div class="wuneun">
        <el-input class="hunju"
                  v-model="input10"
                  clearable>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input10: ''
      }
    }
  }
</script>

<style scoped>
.tungun{
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.tungun h3{
  font-weight: 100;
  font-size: 16px;
  color: #48576a;
  margin-left: 15px;
}
.wuneun{
    width: 740px;
    height: 40px;
  margin-left: 15px;
}
</style>
