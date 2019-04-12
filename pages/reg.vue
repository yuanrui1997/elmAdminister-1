<template>
    <div class="elmReg">
        <div class="loginTitle">
            <p>elm后台管理系统--注册</p>
        </div>
        <div class="loginContent">
            <div class="loginBox">
                <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="70px" class="demo-ruleForm">
                    <el-form-item label="用户名" prop="userName" auto-complete="off">
                        <el-input v-model="ruleForm2.userName"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="年龄" prop="age">
                        <el-input v-model.number="ruleForm2.age"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                        <el-button @click="resetForm('ruleForm2')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var checkname = (rule,value,callback) => {
          if(value === '') {
            callback(new Error('请输入用户名'));
          }else {
            axios.get("10.35.167.62;3002/user/addUser",{
              user_name : this.userName,
              user_pwd : this.pass
            }).then( (res) =>{
              if(res.status == '1'){
                   this.$message({
                        message: '注册成功',
                        type: 'success'
                        });
                        this.$router.push("/")
              }else{
                  this.$message.error('注册失败');
              }
            })
          }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          userName:'',
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          userName:[
            { validator: checkname, trigger: 'blur'}
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            this.$router.push("/")
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>


<style>
.elmReg{
    background: #324057;
    width:100%;
    height: 100%;
}
.elmReg .loginTitle{
    width:100%;
    position: absolute;
    left:0;
    text-align: center;
    top:124px;
    font-size:34px;
    color:#fff;
}
.elmReg .loginContent{
    width:320px;
    height: 307px;
    background: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin:auto;
    justify-content: center;
    padding:25px;
}
.elmReg .login_btn{
    width:100%;
}
.elmReg .regButton{
    position: absolute;
    right:26px;
    bottom:18px;
}
</style>
