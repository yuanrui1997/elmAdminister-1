<template>
    <div class="stafftable">
        <table class="table_staff">
            <thead class="saff_thead">
                <tr>
                    <th class="saff_th">
                        <div class="cell">姓名</div>
                    </th>
                    <th class="saff_th">
                        <div class="cell">注册日期</div>
                    </th>
                    <th class="saff_th">
                        <div class="cell">地址</div>
                    </th>
                    <th class="saff_th">
                        <div class="cell">权限</div>
                    </th>
                    <th class="saff_th">
                        <div class="cell">操作</div>
                    </th>
                </tr>
            </thead>
            <tbody class="saff_table">
                <tr>
                    <td class="saff_td">
                        <div class="cell">13104507201</div>
                    </td>
                    <td class="saff_td">
                        <div class="cell">2019-04-09 19:28</div>
                    </td>
                    <td class="saff_td">
                        <div class="cell">西安</div>
                    </td>
                    <td class="saff_td">
                        <div class="cell">管理员</div>
                    </td>
                    <td class="saff_td">
                        <div class="cell cells">
                            <button class="saff_btn saff_btn1" @click="modifyPassword()"><span>编辑</span></button>
                            <button class="saff_btn saff_btn2" @click="disshan()"><span>删除</span></button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <modifyPassword @hidden="hiddenShow" v-show="modifyPassword_pop_up"></modifyPassword>
        <control @hidens="hidens" v-show="displaynone"></control>
    </div>
    
</template>
<script>

import modifyPassword from"./information"
import control from"./control"
export default {
  name: 'stafflist',
  components:{
      modifyPassword,
      control
  },
  data(){
      return{
          data:"",
          modifyPassword_pop_up:false,
          history_pop_up:false,
          displaynone:false
      }
  },
  methods:{
   //更改密码弹出框显示（组件引用的弹出框）
   modifyPassword(){
      this.modifyPassword_pop_up=true
   },
   hiddenShow(){
    let that = this;
    that.modifyPassword_pop_up = false
   },


   disshan(){
       this.displaynone=true
   },
   hidens(){
        let that = this;
        that.displaynone = false
   }

  }
}
</script>
<style scoped>
.stafftable{
    width: 100%;
}
.table_staff{
    width: 100%;
    border: 0;
}

/* thead */
.saff_thead{
    width: 100%;
    height: 40px;
    display: block;
    background-color: #eef1f6;
    border: 1px solid #eef1f6;
}
.saff_thead tr{
    width: 100%;
    height: 100%;
    display: block;
}
.saff_thead tr th{
    display: block;
    float: left;
    width: 20%;
    height: 100%;
    padding:5px 0;
    box-sizing: border-box;
}
.cell{
    width: 100%;
    height: 100%;
    line-height: 30px;
    text-align: left;
    padding: 0 18px;
    box-sizing: border-box;
}
/* table */
.saff_table{
    width: 100%;
    display: block;
    background-color: #fff;
    border-left: 1px solid #eef1f6;
    border-right: 1px solid #eef1f6;
}
.saff_table tr{
    width: 100%;
    height: 40px;
    display: block;
    border-bottom: 1px solid #eef1f6;
}
.saff_table tr td{
    display: block;
    float: left;
    width: 20%;
    height: 100%;
    padding:5px 0;
    box-sizing: border-box;
}
.saff_btn{
    width: 45px;
    height: 100%;
    display: inline-block;
    outline: none;
    font-size: 12px;
    border: 1px solid #c4c4c4;
    border-radius: 4px;
    white-space: nowrap;
    cursor: pointer;
    margin-right: 10px;
}
.saff_btn1{
    background-color: #fff;
}
.saff_btn1:hover{
    border:1px solid #74b3fb;
    color:#74b3fb;
}
.saff_btn2{
    color:#fff;
    background-color: #ff4949;
    border-color: #ff4949;
}
.saff_btn2:hover{
    opacity: 0.8;
}
</style>
