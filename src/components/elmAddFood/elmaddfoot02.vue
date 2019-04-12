<template>
  <el-collapse accordion class="el-collapse-item__content">
    <el-collapse-item class="eunfun">
      <template slot="title" class="el-collapse-item__header">
        <p >添加食品种类</p>
      </template>
      <div id="cunhun">
            <div class="sunrun">
                <h3 class="jungun">食品种类</h3>
                <div>
                  <el-input v-model="input" class="inputbox"></el-input>
                </div>
            </div>

            <div class="sunrun">
              <h3 class="jungun">种类描述</h3>
              <div>
                <el-input v-model="input" class="inputbox"></el-input>
              </div>
            </div>

              <div id="tijiao">
                <el-button type="primary">提交</el-button>
              </div>
            </div>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
<style scoped>
.inputbox{
  width: 740px;
  height: 45px;
  margin-top: 20px;
}
  .sunrun{
    display: flex;
    align-items: center;
  }
  .jungun{
    font-weight: 100;
    font-size: 16px;
    color: #48576a;
    margin-right: 15px;
  }
  #cunhun{
    background: #f9fafc;
    padding: 20px 20px;
    border-top: 1px solid #eaeefb;
  }
  #tijiao{
    width: 76px;
    height: 40px;
    margin-top: 4px;
    margin-left: 39px;

  }
  .duntuni p{
    color: #8c939d;
    font-size: 16px;
    margin-left: 15px;
    font-weight: 100;
    text-align: center;
  }
.el-collapse-item__content{
  padding: 0;
 border-bottom: 0;
  /*align-items: center;*/
  justify-content:center;
}
  .el-collapse-item__header{
    justify-content:center;
    padding: 0;
  }
  .el-collapse-item__header p{
      margin-left:65px;
  }
</style>
