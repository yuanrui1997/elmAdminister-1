<template>
    <div class="rundunw" >
          <div>  <el-button type="primary">添加规格</el-button></div>
      <div class="ungun">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="规格"
            width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="包装费"
            width="180">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>包装费: {{ scope.row.name}}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            label="价格"
            width="180">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>价格: {{ scope.row.jiage }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.jiage }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="suntunw">  <el-button type="primary">确认添加规格</el-button></div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '默认',
          name: '0',
          jiage:'20',
        },]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>

<style scoped>
.rundunw{
  display: flex;
  flex-direction: column;
  align-items: center;
}
  .ungun{
    width: 90%;
  }
  .suntunw{
    margin-top: 20px;
  }
  .rundunw{
    display: none;
  }
</style>
