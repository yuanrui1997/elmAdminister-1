<template>
    <div class="add-shop">
        <el-form :model="formData" :rules="rules" ref="formData" label-width="110px" class="demo-formData">
            <el-form-item label="店铺名称" prop="name">
                <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item label="详细地址" prop="address">
                <el-autocomplete
                    v-model="formData.address"
                    :fetch-suggestions="querySearchAsync"
                    placeholder="请输入地址"
                    style="width: 100%;"
                    @select="addressSelect"
                ></el-autocomplete>
            </el-form-item>
            <el-form-item label="联系电话" prop="phone">
                <el-input v-model.number="formData.phone" maxLength="11"></el-input>
            </el-form-item>
            <el-form-item label="店铺简介" prop="description">
                <el-input v-model="formData.description"></el-input>
            </el-form-item>
            <el-form-item label="店铺标语" prop="promotion_info">
                <el-input v-model="formData.promotion_info"></el-input>
            </el-form-item>
            <el-form-item label="店铺分类" prop="promotion_info">
                <el-cascader
                    :options="info"
                    v-model="selectedCategory"
                    change-on-select
                    ></el-cascader>
            </el-form-item>
            <el-form-item label="店铺特点" prop="promotion_info">
                <span>品牌保证</span>
                <el-switch
                v-model="formData.is_premium"
                active-color="#20a0ff"
                inactive-color="#bfcbd9">
                </el-switch>
                 <span>蜂鸟专送</span>
                <el-switch
                v-model="formData.delivery_mode"
                active-color="#20a0ff"
                inactive-color="#bfcbd9">
                </el-switch>
                 <span>新开店铺</span>
                <el-switch
                v-model="formData.new"
                active-color="#20a0ff"
                inactive-color="#bfcbd9">
                </el-switch>
                 <span>外卖保</span>
                <el-switch
                v-model="formData.bao"
                active-color="#20a0ff"
                inactive-color="#bfcbd9">
                </el-switch>
                 <span>准时达</span>
                <el-switch
                v-model="formData.zhun"
                active-color="#20a0ff"
                inactive-color="#bfcbd9">
                </el-switch>
                 <span>开发票</span>
                <el-switch
                v-model="formData.piao"
                active-color="#20a0ff"
                inactive-color="#bfcbd9">
                </el-switch>
            </el-form-item>
            <el-form-item label="配送费" prop="">
                <el-input-number v-model="formData.float_delivery_fee" controls-position="right" @change="handleChange" :min="1" :max="20"></el-input-number>
            </el-form-item>
            <el-form-item label="起送价" prop="">
                <el-input-number v-model="formData.float_minimum_order_amount" controls-position="right" @change="handleChange" :min="1" :max="20"></el-input-number>
            </el-form-item>
            <el-form-item label="营业时间" prop="">
                <el-time-select
                    placeholder="起始时间"
                    v-model="formData.startTime"
                    :picker-options="{
                    start: '05:30',
                    step: '00:15',
                    end: '23:30'
                    }">
                </el-time-select>
                <el-time-select
                    placeholder="结束时间"
                    v-model="formData.endTime"
                    :picker-options="{
                    start: '05:30',
                    step: '00:15',
                    end: '23:30',
                    minTime: formData.startTime
                    }">
                </el-time-select>
            </el-form-item>
            <el-form-item label="上传店铺头像" prop="">
                 <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
            <el-form-item label="上传营业执照" prop="">
                 <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
             <el-form-item label="上传餐饮服务许可证" prop="">
                 <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
            <el-form-item label="优惠活动">
                <el-select v-model="activityValue" @change="selectActivity" :placeholder="activityValue">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-table
                :data="activities"
                style="min-width: 600px;margin-bottom: 20px;"
                align="cneter"
                :row-class-name="tableRowClassName">
                <el-table-column
                    prop="icon_name"
                    label="活动标题"
                    align="cneter"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="活动名称"
                    align="cneter"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="description"
                    align="cneter"
                    label="活动详情">
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="120">
                <template slot-scope="scope">
                    <el-button
                        size="small"
                        type="danger"
                        @click="handleDelete(scope.$index)">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
            <el-form-item class="button_submit">
                <el-button type="primary" @click="submitForm('formData')">立即创建</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>



<script>
export default {
   data() {
      return {
        city: {},
       	formData: {
            name: '', //店铺名称
            address: '', //地址
            latitude: '',
            longitude: '',
            description: '', //介绍
            phone: '',
            promotion_info: '',
            float_delivery_fee: 5, //运费
            float_minimum_order_amount: 20, //起价
            is_premium: true,
            delivery_mode: true,
            new: true,
            bao: true,
            zhun: true,
            piao: true,
            startTime: '',
            endTime: '',
            image_path: '',
            business_license_image: '',
            catering_service_license_image: '',

        },
        rules: {
            name: [
                { required: true, message: '请输入店铺名称', trigger: 'blur' },
            ],
            address: [
                { required: true, message: '请输入详细地址', trigger: 'blur' }
            ],
            phone: [
                { required: true, message: '请输入联系电话' },
                { type: 'number', message: '电话号码必须是数字' }
            ],
        },
        info: [{
          value: '异国料理',
          label: '异国料理',
          children: [{
              value: '日韩料理',
              label: '日韩料理'
            }, {
              value: '西餐',
              label: '西餐'
            }, {
              value: '披萨意面',
              label: '披萨意面'
            }, {
              value: '东南亚菜',
              label: '东南亚菜'
            }]
          },{
          value: '快餐便当',
          label: '快餐便当',
          children: [{
              value: '简餐',
              label: '简餐'
            }, {
              value: '盖浇饭',
              label: '盖浇饭'
            }, {
              value: '米粉面馆',
              label: '米粉面馆'
            }, {
              value: '包子粥店',
              label: '包子粥店'
            }, {
              value: '香锅砂锅',
              label: '香锅砂锅'
            }]
          },{
          value: '小吃夜宵',
          label: '小吃夜宵',
          children: [{
            value: '小龙虾',
            label: '小龙虾'
          }, {
            value: '烤面筋',
            label: '烤面筋'
          }, {
            value: '炸串',
            label: '炸串'
          }]
        }],
        options: [{
                value: '满减优惠',
                label: '满减优惠'
            }, {
                value: '优惠大酬宾',
                label: '优惠大酬宾'
            }, {
                value: '新用户立减',
                label: '新用户立减'
            }, {
                value: '进店领券',
                label: '进店领券'
            }],
        activityValue: '满减优惠',
        activities: [{
            icon_name: '减',
            name: '满减优惠',
            description: '满30减5，满60减8',
        }],
        selectedCategory: ['快餐便当', '简餐'],
        dialogImageUrl: '',
        dialogVisible: false,
      };
    },
    methods: {
        handleRemove(file, fileList) {
        console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
        },
        handleChange(value) {
            console.log(value);
        },
        andleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        selectActivity(){
            this.$prompt('请输入活动详情', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            }).then(({ value }) => {
                if (value == null) {
                    this.$message({
                        type: 'info',
                        message: '请输入活动详情'
                    });
                    return
                }
                let newObj = {};
                switch(this.activityValue){
                    case '满减优惠':
                        newObj= {
                            icon_name: '减',
                            name: '满减优惠',
                            description: value,
                        }
                        break;
                    case '优惠大酬宾':
                        newObj= {
                            icon_name: '特',
                            name: '优惠大酬宾',
                            description: value,
                        }
                        break;
                    case '新用户立减':
                        newObj= {
                            icon_name: '新',
                            name: '新用户立减',
                            description: value,
                        }
                        break;
                    case '进店领券':
                        newObj= {
                            icon_name: '领',
                            name: '进店领券',
                            description: value,
                        }
                        break;
                }
                this.activities.push(newObj);
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消输入'
                });
            });
        },
        handleDelete(index){
            this.activities.splice(index, 1)
        },
        submitForm(formName) {
            this.$refs[formName].validate(async (valid) => {
                if (valid) {
                    Object.assign(this.formData, {activities: this.activities}, {
                        category: this.selectedCategory.join('/')
                    })
                    try{
                        let result = await addShop(this.formData);
                        if (result.status == 1) {
                            this.$message({
                                type: 'success',
                                message: '添加成功'
                            });
                            this.formData = {
                                name: '', //店铺名称
                                address: '', //地址
                                latitude: '',
                                longitude: '',
                                description: '', //介绍
                                phone: '',
                                promotion_info: '',
                                float_delivery_fee: 5, //运费
                                float_minimum_order_amount: 20, //起价
                                is_premium: true,
                                delivery_mode: true,
                                new: true,
                                bao: true,
                                zhun: true,
                                piao: true,
                                startTime: '',
                                endTime: '',
                                image_path: '',
                                business_license_image: '',
                                catering_service_license_image: '',
                            };
                            this.selectedCategory = ['快餐便当', '简餐'];
                            this.activities = [{
                                icon_name: '减',
                                name: '满减优惠',
                                description: '满30减5，满60减8',
                            }];
                        }else{
                            this.$message({
                                type: 'error',
                                message: result.message
                            });
                        }
                        console.log(result)
                    }catch(err){
                        console.log(err)
                    }
                } else {
                    this.$notify.error({
                        title: '错误',
                        message: '请检查输入是否正确',
                        offset: 100
                    });
                    return false;
                }
            });
        },
        async querySearchAsync(queryString, cb) {
            if (queryString) {
                try{
                    const cityList = await searchplace(this.city.id, queryString);
                    if (cityList instanceof Array) {
                        cityList.map(item => {
                            item.value = item.address;
                            return item;
                        })
                        cb(cityList)
                    }
                }catch(err){
                    console.log(err)
                }
            }
        },
        addressSelect(address){
            this.formData.latitude = address.latitude;
            this.formData.longitude = address.longitude;
            console.log(this.formData.latitude, this.formData.longitude)
        },
        handleShopAvatarScucess(res, file) {
            if (res.status == 1) {
                this.formData.image_path = res.image_path;
            }else{
                this.$message.error('上传图片失败！');
            }
        },
        handleBusinessAvatarScucess(res, file) {
            if (res.status == 1) {
                this.formData.business_license_image = res.image_path;
            }else{
                this.$message.error('上传图片失败！');
            }
        },
        handleServiceAvatarScucess(res, file) {
            if (res.status == 1) {
                this.formData.catering_service_license_image = res.image_path;
            }else{
                this.$message.error('上传图片失败！');
            }
        },
        beforeAvatarUpload(file) {
            const isRightType = (file.type === 'image/jpeg') || (file.type === 'image/png');
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isRightType) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isRightType && isLt2M;
        },
        tableRowClassName(row, index) {
            if (index === 1) {
                return 'info-row';
            } else if (index === 3) {
                return 'positive-row';
            }
            return '';
        },
    },
} 

</script>

<style scoped>
.add-shop{
    width: 100%;
}
.demo-formData{
    width: 50%;
    margin: 50px auto;
}
.button_submit{
    text-align: center;
}
</style>
