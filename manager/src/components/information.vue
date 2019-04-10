<template>
    <div class="tan_box">
        <div class="tan_hea">
            <div class="tan_hea1">管理员信息</div>
            <div class="tan_hea2"><button class="tan_btn" @click="Hidden()"></button></div>
        </div>
        <div class="infor">
            <form class="infor_form">
                <div class="infor1">
                    <span class="infor1_span">姓名:</span>
                    <input class="infor1_inp" type="text" name="" id="" placeholder="13104507201">
                </div>
                <div class="infor1">
                    <span class="infor1_span">注册时间:</span>
                    <input class="infor1_inp" type="text" name="" id="" placeholder="2019-04-09 19:28">
                </div>
                <div class="infor1">
                    <span class="infor1_span">管理员权限:</span>
                    <input class="infor1_inp" type="text" name="" id="" placeholder="管理员">
                </div>
                <div class="infor1">
                    <span class="infor1_span">管理员ID:</span>
                    <input class="infor1_inp" type="text" name="" id="" placeholder="001">
                </div>
                <div class="infor2">
                    <span class="infor2_span">更换图片</span>
                    <div class="infor2_inp"><a href="##"><img src="../assets/img/456.jpg" alt=""></a></div>
                </div>
                <div class="infor3">
                    <button class="infor3_button">保存</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name:'modifyPassword',
    data(){
        return{}
    },
    methods:{
        //本更改密码弹出框的显示隐藏事件
        Hidden(){
        //通过$emit引用组件传过来的hidden()事件
        this.$emit('hidden')
        }
    }
}
</script>
<style scoped>
    .tan_box{
        width:768px;
        height: 500px;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        background-color: #eef1f6;
        padding: 20px;
        box-sizing: border-box;
    }
    .tan_hea{
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .tan_hea1{
        width: 200px;
        height: 100%;
        line-height: 50px;
        font-size: 20px;
        font-weight: 600;
        color: #000;
    }
    .tan_hea2{
        width: 50px;
        height: 50px;
    }
    .tan_btn{
        outline: none;
        border: none;
        width: 50px;
        height: 50px;
        background: url(../assets/img/888.png) no-repeat;
        background-position: 50% 50%;
        cursor: pointer;
    }
    .infor{
        width: 100%;
        height: 420px;
        display: flex;
        margin-top: 30px;
    }
    .infor_form{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .infor1{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: flex-start;
        margin-left: 50px;
        margin-bottom: 10px;
    }
    .infor1_span{
        display: block;
        height: 50px;
        line-height: 50px;
        width: 100px;
        font-size: 18px;
        margin-right: 10px;
        text-align: left;
    }
    .infor1_inp{
        outline: none;
        border: 1px solid #c4c4c4;
        border-radius: 5px;
        width: 400px;  
        height: 40px;
        line-height: 40px;
    }
    .infor2{
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: flex-start;
        margin-left: 50px;
        margin-bottom: 10px;
    }
    .infor2_span{
        display: block;
        height: 80px;
        line-height: 80px;
        width: 100px;
        font-size: 18px;
        margin-right: 10px;
        text-align: left;
    }
    .infor2_inp{
        width: 80px;
        height: 80px;
    }
    .infor2_inp a{
        display: block;
        width: 80px;
        height: 80px;
        border: 1px dashed #c4c4c4;
    }
    .infor2_inp a img{
        width: 100%;
        height: 100%;
    }
    .infor3{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: flex-end;
    }
    .infor3_button{
        width: 70px;
        height: 100%;
        margin-right: 50px;
        outline: none;
        background-color: #ff4949;
        border: none;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
    }
    .infor3_button:hover{
        opacity: 0.8;
    }
</style>
