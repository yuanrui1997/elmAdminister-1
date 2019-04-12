<template>
    <div class="box">
        <div class="boxtitle">
            <p>订单ID</p>
            <p>总价格</p>
            <p>订单状态</p>
        </div>
        <ul class="boxcont">
            <li  class="boxli" @click="toggle(n);start(n)" v-for="(n,index) of list" :key="index">
                <div class="boxlist">
                    <img :class="[n.rotate?'fa fa-arrow-down go':'fa fa-arrow-down aa']" src="../assets/img/img1.png">
                    <p>{{n.title}}</p>
                    <p>{{n.price}}</p>
                    <p>{{n.state}}</p>
                </div>
                <div v-if="n.show" class="boxnone">
                    <div class="none-left">
                        <div class="item">
                            <i>用户名</i>{{n.username}}
                        </div>
                        <div class="item">
                            <i>收货地址</i>{{n.sendaddress}}
                        </div>
                        <div class="item">
                            <i>店铺地址</i>{{n.shopaddress}}
                        </div>
                      </div>
                    <div class="none-right">
                        <div class="item">
                            <i>店铺名称</i><em>{{n.shopname}}</em>
                        </div>
                        <div class="item">
                            <i>店铺 ID</i><em>{{n.shopid}}</em>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "order",
        data () {
            return {
                list: [
                    {
                      title: "8965",
                     price: "1708",
                     state: "支付超时",
                     username:'1232133163123adasd',
                     shopname:'我问4325',
                     sendaddress:'西安灞桥',
                    shopaddress:'上海市浦东新区周浦镇年家34252345浜路336-2',
                    shopid:'7689',
                    show:false,
                    rotate:false

                     },
                    {
                      title: "8964",
                       price: "219", 
                       state: "支付超时",
                       username:'1232133163123adasd',
                     shopname:'我问4325',
                     sendaddress:'西安灞桥',
                    shopaddress:'上海市浦东新区周浦镇年家34252345浜路336-2',
                    shopid:'7689',
                    show:false,
                     rotate:false
                      },
                    {
                      title: "8963", 
                    price: "219", 
                    state: "支付超时",
                    username:'1232133163123adasd',
                     shopname:'我问4325',
                     sendaddress:'西安灞桥',
                    shopaddress:'上海市浦东新区周浦镇年家34252345浜路336-2)',
                    shopid:'7689',
                    show:false,
                     rotate:false
                    },
                    {
                      title: "8962", 
                      price: "219", 
                      state: "支付超时",
                      username:'1232133163123adasd',
                     shopname:'我问4325',
                     sendaddress:'西安灞桥',
                    shopaddress:'上海市浦东新区周浦镇年家34252345浜路336-2',
                    shopid:'7689',
                    show:false,
                     rotate:false
                      },
                    {
                      title: "8961", 
                      price: "1708",
                      state: "支付超时",
                      username:'1232133163123adasd',
                     shopname:'我问4325',
                     sendaddress:'西安灞桥',
                    shopaddress:'上海市浦东新区周浦镇年家34252345浜路336-2',
                    shopid:'7689',
                    show:false,
                     rotate:false
                      },
                    {
                      title: "8960",
                       price: "219", 
                       state: "支付超时",
                       username:'1232133163123adasd',
                     shopname:'我问4325',
                     sendaddress:'西安灞桥',
                    shopaddress:'上海市浦东新区周浦镇年家34252345浜路336-2',
                    shopid:'7689',
                    show:false,
                     rotate:false
                       },
                    {title: "8959",
                     price: "219", 
                     state: "支付超时",
                     username:'1232133163123adasd',
                     shopname:'我问4325',
                     sendaddress:'西安灞桥',
                    shopaddress:'上海市浦东新区周浦镇年家34252345浜路336-2',
                    shopid:'7689',
                    show:false,
                     rotate:false
                     },
                    {
                      title: "8958",
                     price: "219", 
                     state: "支付超时",
                     username:'1232133163123adasd',
                     shopname:'我问4325',
                     sendaddress:'西安灞桥',
                    shopaddress:'上海市浦东新区周浦镇年家34252345浜路336-2',
                    shopid:'7689',
                    show:false,
                     rotate:false
                     }
                ],
            }
        },

        methods: {
            start(n){
                n.rotate = !n.rotate;
            },
            toggle: function (n) {
                n.show = !n.show;
            }
        }
    }
</script>

<style scoped>
.box{
  width: 100%;
  border: 1px solid #dfe6ec;
  border-bottom: none;
}
.boxtitle{
  background: #eef1f6;
  height: 40px;
  padding-left: 66px;
  border-bottom: 1px solid #dfe6ec
}
.boxtitle p{
  float: left;
  height: 40px;
  text-align: left;
  line-height: 40px;
  width: 33.33%;
  color:#1f2d3d;
  font-size: 13px;
  font-weight: 600;
}
.boxlist:hover{
  background: rgba(238, 241, 246, 0.8);
}
.boxlist{
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 22px;
  border-bottom: 1px solid #dfe6ec
}
.boxlist p{
  text-align: left;
  width: 33.33%;
  color:#1f2d3d;
  font-size: 13px;
}
.boxlist img{
  cursor: pointer;
  margin-right: 38px;
  display: block;
  width: 13px;
  height: 13px;
}
.aa{
  transition: all 300ms;
}
.go{
  transform:rotate(90deg);
  transition: all 300ms;
}
.boxnone{
  padding:20px 0 20px 50px;
  display: flex;
  background: #fbfdff;
  border-bottom: 1px solid #dfe6ec
}
.none-left{
  width: 50%;
  text-align: left;
}
.none-right{
  width: 50%;
  text-align: left;
}
.item{
  height: 37px;
  line-height: 37px;
  color: #1f2d3d;
  font-size: 13px;
}
.item i{
  width: 90px;
  color: #99a9bf;
  display: inline-block;
}
</style>
