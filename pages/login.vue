<template>
    <div class="elmLogin">
        <div class="loginTitle">
            <p>elm后台管理系统</p>
        </div>
        <div class="loginContent">
            <div class="loginBox">
                <el-form :model="loginForm" :rules="rules" ref="loginForm">
                    <el-form-item  prop="userName">
                        <el-input v-model="loginForm.userName" placeholder="用户名"><span>dsfsf</span></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" v-model="loginForm.password" placeholder="密码"></el-input>
                    </el-form-item>
                    <el-form-item>
				    	<el-button type="primary"  @click="submitForm('loginForm')" class="submit_btn login_btn">登陆</el-button>
				  	</el-form-item>
                </el-form>
                <div class="rt">
                    <el-checkbox v-model="checked" style="color:#a0a0a0;">一周内自动登录</el-checkbox>
                    <span @click="clearCookie" style="cursor: pointer;color: #f19149;font-size: 0.75rem;margin-left: 5px;">忘记密码？</span>
                    <router-link to="/reg"><el-button type="success" plain class="regButton" size="small">注册</el-button></router-link>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    data () {
        return {
            loginForm: {
                userName:'',
                password:'',
                errorTip:false
            },
            rules: {
                userName: [
                    {required:true,message:'请输入用户名',trigger:'blur'},
                ],
                password: [
                    {required:true,message:'请输入密码',trigger:'blur'}
                ]
            },
            checked:false
        }
    },
    methods: {
        submitForm(formName){
            var name = this.loginForm.userName
            var pass = this.loginForm.password
            axios.get("10.35.167.62;3002/user/findUser",{
                user_name : this.userName
            }).then( (res)=>{
                if(res.status=="0"){
                    this.$message({
                        message: '登录成功',
                        type: 'success'
                        });
                        this.$router.push("/index")
                }else{
                    this.$message.error('用户名或密码错误');
                }
            })
            if(this.checked=true){
                //传入账号名，密码，和保存天数3个参数
                this.setCookie(name,pass,7);
            }
            
        },
        setCookie(c_name,c_pwd,exdays){
            var exdate = new Date();//获取时间
            exdate.setTime(exdate.getTime()+24*60*60*1000*exdays);
            window.document.cookie = "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
            window.document.cookie="password"+"="+c_pwd+";path=/;expires="+exdate.toGMTString();
        },
        //读取cookie
        getCookie:function () {
            if (document.cookie.length>0) {
                var arr=document.cookie.split('; ');//这里显示的格式需要切割一下自己可输出看下
                for(var i=0;i<arr.length;i++){
                    var arr2=arr[i].split('=');//再次切割
                    //判断查找相对应的值
                    if(arr2[0]=='userName'){
                        this.loginForm.userName=arr2[1];//保存到保存数据的地方
                    }else if(arr2[0]=='password'){
                        this.loginForm.password=arr2[1];
                    }   
                }
            }   
        },
        //清除cookie
        clearCookie:function () {
            this.setCookie("","",-1);//修改2值都为空，天数为负1天就好了
            }
        },
        //页面加载调用获取cookie值
        mounted(){
            this.getCookie()
        }
}
</script>


<style>
.elmLogin{
    background: #324057;
    width:100%;
    height: 100%;
}
.elmLogin .loginTitle{
    width:100%;
    position: absolute;
    left:0;
    text-align: center;
    top:156px;
    font-size:34px;
    color:#fff;
}
.elmLogin .loginContent{
    width:320px;
    height: 210px;
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
.elmLogin .login_btn{
    width:100%;
}
.elmLogin .regButton{
    position: absolute;
    right:26px;
    bottom:18px;
}
</style>
