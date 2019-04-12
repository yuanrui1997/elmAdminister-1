<template>
<el-container class="elmIndex">
        <el-aside class="el-aside">
                <div class="emlCommon">
                    <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        router
                        unique-opened
                        @close="handleClose">
                        <el-menu-item index="home">
                            <i class="el-icon-menu"></i>
                            <span slot="title">首页</span>
                        </el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-document"></i>
                                <span>数据管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="item1">用户列表</el-menu-item>
                                <el-menu-item index="item2">商家列表</el-menu-item>
                                <el-menu-item index="2-3">食品列表</el-menu-item>
                                <el-menu-item index="elmOrderList">订单列表</el-menu-item>
                                <el-menu-item index="elmManager">管理员列表</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">
                                <i class="el-icon-plus"></i>
                                <span>添加数据</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="addShop">添加商铺</el-menu-item>
                                <el-menu-item index="elmaddfoot">添加商品</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="4">
                            <template slot="title">
                                <i class="el-icon-star-on"></i>
                                <span>数据图表</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="userList">用户分布</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="5">
                            <template slot="title">
                                <i class="el-icon-edit"></i>
                                <span>文章编辑</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="5-1">文本编辑</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="6">
                            <template slot="title">
                                <i class="el-icon-setting"></i>
                                <span>权限设置</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="6-1">管理员设置</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="7">
                            <template slot="title">
                                <i class="el-icon-warning"></i>
                                <span>说明</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="7-1">版本说明</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
            </div>
        </el-aside>
        <el-container>
            <el-header class="elmHomeHeader">
                <el-breadcrumb separator="/" class="headerleft">
                    <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
                </el-breadcrumb>
                <div class="headerright">
                    <img src="../src/assets/img/userphoto.jpg" class="userphoto">
                    <p>欢迎您：<span>xxx</span></p>
                </div>
            </el-header>
            <el-main>
                <keep-alive>
                    <router-view />
            </keep-alive>
            </el-main>
        </el-container>
</el-container>   
</template>


<script>
export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>


<style>
.elmIndex{
    height: 100%;
}
 .elmIndex  .el-header, .el-footer {
    line-height: 60px;
  }
  
 .elmIndex  .el-aside {
     width:16% !important;
    line-height: 200px;
  }
  .elmHomeHeader{
      display: flex;
  }
  .elmIndex  .headerleft{
      line-height: 60px;
  }
  .elmIndex  .headerright{
      position: absolute;
      display: flex;
      height: 60px;
      right: 60px;
      align-items: center;
  }
 .elmIndex  .userphoto{
     border-radius: 50%;
     width: 36px;
     height: 36px;
     margin-right: 10px;
 }
 .elmIndex  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
  }
  
 .elmIndex  body > .el-container {
    margin-bottom: 40px;
  }
  
 .elmIndex  .el-container:nth-child(5) .el-aside,
 .elmIndex  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
.elmIndex   .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .emlCommon{
    height: 100%;
    background: rgb(50, 64, 87);
    font-size:16px;
}
.elmIndex  .el-header{
    background: #eff2f7;
}
.emlCommon .el-menu{
    border:none;
    background: transparent;
}
.emlCommon .el-menu-item.is-active,.el-menu-item.is-active i {
    color: #409EFF;
}
.emlCommon .el-menu li,.el-menu i,.el-submenu__title span{
    color:#bfcbd9;
}
.emlCommon .el-menu-item-group{
    background: #1f2d3d;
}
.emlCommon .el-submenu__icon-arrow{
    color:#bfcbd9;
    font-weight: 600;
}
.emlCommon .el-menu-item:hover{
    width:100%;
    background: #48576a;
}
.emlCommon .el-submenu .el-menu-item{
    min-width: 20px;
}
.emlCommon .el-submenu__title:hover{
    background-color:#48576a;
}
.emlCommon .is-active .el-submenu__title:hover{
    background-color: #48576a;
}
.emlCommon .el-menu-item-group__title{
    padding:0 !important;
}
</style>
