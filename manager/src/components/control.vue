<template>
    <div class="control">
        <div class="control1" @click="disnone()"><img src="../assets/img/666.png" alt=""></div>
        <div class="control2">亲你的权限不足</div>
    </div>
</template>
<script>
export default {
    name:'control',
    data(){
        return{}
    },
    methods:{
        //本更改密码弹出框的显示隐藏事件
        disnone(){
        //通过$emit引用组件传过来的hidden()事件
        this.$emit('hidens')
        }
    }
}
</script>
<style scoped>
    .control{
        width: 200px;
        height: 40px;
        position: fixed;
        top: 50px;
        left: 45%;
        border-radius: 4px;
        background-color: #FFF;
        overflow: hidden;
    }
    .control1{
        width: 50px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: #ff4949;
    }
    .control1 img{
        position: absolute;
        width: 20px;
        height: 20px;
        left: 32%;
        top: 25%;
    }
    .control2{
        width: 150px;
        height: 100%;
        position: absolute;
        left: 50px;
        top: 0;
        font-size: 18px;
        text-align: center;
        line-height: 40px;
    }
</style>