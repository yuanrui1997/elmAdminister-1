import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('../../pages/login.vue')), 'login')
const reg = r => require.ensure([], () => r(require('../../pages/reg.vue')), 'reg')
const index = r => require.ensure([], () => r(require('../../pages/index.vue')), 'index')
const home = r => require.ensure([], () => r(require('../components/elmHome.vue')), 'home')
const addShop = r => require.ensure([], () => r(require('../components/addShop.vue')), 'addShop')
const elmaddfoot = r => require.ensure([], () => r(require('../components/elmaddfoot.vue')), 'elmaddfoot')
// const userList = r => require.ensure([], () => r(require('@/page/userList')), 'userList')
// const shopList = r => require.ensure([], () => r(require('@/page/shopList')), 'shopList')
// const foodList = r => require.ensure([], () => r(require('@/page/foodList')), 'foodList')
const elmOrderList = r => require.ensure([], () => r(require('../components/elmOrderList.vue')), 'elmOrderList')
const elmManager = r => require.ensure([], () => r(require('../components/elmManager.vue')), 'elmManager')
const userList = r => require.ensure([], () => r(require('../components/userList.vue')), 'userList')
// const newMember = r => require.ensure([], () => r(require('@/page/newMember')), 'newMember')
// const uploadImg = r => require.ensure([], () => r(require('@/page/uploadImg')), 'uploadImg')
// const vueEdit = r => require.ensure([], () => r(require('@/page/vueEdit')), 'vueEdit')
// const adminSet = r => require.ensure([], () => r(require('@/page/adminSet')), 'adminSet')
// const sendMessage = r => require.ensure([], () => r(require('@/page/sendMessage')), 'sendMessage')
// const explain = r => require.ensure([], () => r(require('@/page/explain')), 'explain')

const routes = [
  {
    path: '/',
    component: login
	},
	{
    path: '/reg',
    component: reg
  },
  {
		path: '/index',
		component: index,
		name: '',
		children: [{
			path: '/home',
			component: home,
			meta: []
    },
    {
			path: '/addShop',
			component: addShop,
			meta: ['添加数据', '添加商品']
    },
    {
			path: '/elmaddfoot',
			component: elmaddfoot,
			meta: ['添加数据', '添加商品']
    },
    // {
		// 	path: '/userList',
		// 	component: userList,
		// 	meta: ['数据管理', '用户列表']
    // },
    // {
		// 	path: '/shopList',
		// 	component: shopList,
		// 	meta: ['数据管理', '商家列表']
    // },
    // {
		// 	path: '/foodList',
		// 	component: foodList,
		// 	meta: ['数据管理', '食品列表']
    // },
    {
			path: '/elmOrderList',
			component: elmOrderList,
			meta: ['数据管理', '订单列表']
    },
    {
			path: '/elmManager',
			component: elmManager,
			meta: ['数据管理', '管理员列表']
    },
    {
			path: '/userList',
			component: userList,
			meta: ['图表', '用户分布']
    }
    // {
		// 	path: '/newMember',
		// 	component: newMember,
		// 	meta: ['图表', '用户数据']
    // },
    // {
		// 	path: '/uploadImg',
		// 	component: uploadImg,
		// 	meta: ['文本编辑', 'MarkDown']
		// },{
		// 	path: '/vueEdit',
		// 	component: vueEdit,
		// 	meta: ['编辑', '文本编辑']
    // },
    // {
		// 	path: '/adminSet',
		// 	component: adminSet,
		// 	meta: ['设置', '管理员设置']
    // },
    // {
		// 	path: '/sendMessage',
		// 	component: sendMessage,
		// 	meta: ['设置', '发送通知']
    // },
    // {
		// 	path: '/explain',
		// 	component: explain,
		// 	meta: ['说明', '说明']
    // }
  ]
	}
]

export default new Router({
  routes,
  strict: process.env.NODE_ENV !== 'production'
})
