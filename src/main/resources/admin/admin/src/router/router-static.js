import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import yaopinleibie from '@/views/modules/yaopinleibie/list'
    import forum from '@/views/modules/forum/list'
    import news from '@/views/modules/news/list'
    import bingrenxinxi from '@/views/modules/bingrenxinxi/list'
    import hushi from '@/views/modules/hushi/list'
    import yaofangxinxi from '@/views/modules/yaofangxinxi/list'
    import bingchuangleibie from '@/views/modules/bingchuangleibie/list'
    import bingchuang from '@/views/modules/bingchuang/list'
    import yisheng from '@/views/modules/yisheng/list'
    import config from '@/views/modules/config/list'
    import keshixinxi from '@/views/modules/keshixinxi/list'
    import yaofang from '@/views/modules/yaofang/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/yaopinleibie',
        name: '药品类别',
        component: yaopinleibie
      }
      ,{
	path: '/forum',
        name: '内部论坛',
        component: forum
      }
      ,{
	path: '/news',
        name: '医院公告',
        component: news
      }
      ,{
	path: '/bingrenxinxi',
        name: '病人信息',
        component: bingrenxinxi
      }
      ,{
	path: '/hushi',
        name: '护士',
        component: hushi
      }
      ,{
	path: '/yaofangxinxi',
        name: '药方信息',
        component: yaofangxinxi
      }
      ,{
	path: '/bingchuangleibie',
        name: '病床类别',
        component: bingchuangleibie
      }
      ,{
	path: '/bingchuang',
        name: '病床',
        component: bingchuang
      }
      ,{
	path: '/yisheng',
        name: '医生',
        component: yisheng
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/keshixinxi',
        name: '科室信息',
        component: keshixinxi
      }
      ,{
	path: '/yaofang',
        name: '药房',
        component: yaofang
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
